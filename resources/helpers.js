const db = require("../data/db-config");
module.exports = {
  getResources
};

function getResources() {
  db("resources").then(resources => {
    return resources;
  });
}
