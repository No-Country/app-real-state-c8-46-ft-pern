const { getProperties } = require("./properties.controller");

const filterGetProperties = async () => {
  const aux = await getProperties();
  const filteredProperties = aux.map((e) => {
    return {
      id: e.id,
      state: e.state,
      lat: e._geoloc.lat,
      lng: e._geoloc,
      purpose: e.purpose,
      price: e.price,
      product: e.product,
      rentFrequency: e.rentFrequency,
      title: e.title,
      category: e.category[0].name,
      rooms: e.rooms,
      baths: e.baths,
      area: e.area,
      coverPhoto: e.coverPhoto.url,
      contactName: e.contactName,
      type: e.type,
      location:e.location[1].name
    };
  });
  return filteredProperties;
};

module.exports = { filterGetProperties };
