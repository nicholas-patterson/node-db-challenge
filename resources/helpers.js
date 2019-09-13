const db = require("../data/db-config");
module.exports = {
  getResources,
  addResource,
  getByResourceID
};

function getResources() {
  return db("resources").then(resources => {
    return resources;
  });
}

function getByResourceID(id) {
  return db("resources")
    .where({ id })
    .first();
}

function addResource(resource) {
  return db("resources")
    .insert(resource)
    .then(([id]) => {
      return getByResourceID(id);
    });
}
