const router = require("express").Router();
const {popularProperties} = require("./popular.services");

router.route("/").get(async (req, res) => {
  try {
    const response = await popularProperties();
    res.send(response);
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
