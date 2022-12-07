const express = require("express");
const cors = require("cors");
const { port } = require("./config");

const db = require("./database/database");
const bodyParser = require("body-parser");

const app = express();
app.use(cors())

app.use(express.json());
app.use("/public", express.static(`${__dirname}/images`));

app.get("/", (req, res) => {
  res.status(200).json({
    message: "OK!",
    users: `localhost:${port}/api/v1/users`,
  });
});


const userRouter = require("./users/users.router");
const authRouter = require("./auth/auth.router");
const initModels = require("./models/init.models");
const bankAccountRouter = require("./bankAccount/bankAccount.router");
const reviewRouter = require("./review/review.router");
const propertyRouter = require("./property/property.router");
const favoritesRouter = require("./favorites/favorites.router");
const propertiesRouter = require("./properties/properties.routes");
const popularRouter = require("./popular/popular.routes");
const orderRouter = require("./order/order.router");

app.use("/api/v1/users", userRouter);
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/review", reviewRouter);
app.use("/api/v1/property", propertyRouter);
app.use("/api/v1/popular", popularRouter);
app.use("/api/v1/favorites", favoritesRouter);
app.use("/api/v1/bank-account", bankAccountRouter);
app.use("/api/v1/properties", propertiesRouter);
app.use("/api/v1/order", orderRouter);

db.authenticate()
  .then(() => {
    console.log("Database Authenticated");
  })
  .catch((err) => {
    console.log(err);
  });

db.sync()
  .then(() => {
    console.log("Database synced");
  })
  .catch((err) => {
    console.log(err);
  });

initModels();

app.listen(port, () => {
  console.log(`server on port ${port}`);
});
