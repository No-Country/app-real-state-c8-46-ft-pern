const { filterGetProperties } = require("../properties/properties.services");

const popularProperties = async () => {
  const aux = await filterGetProperties();
  return aux.filter((p) => p.product === "superhot");
};

module.exports = { popularProperties };
