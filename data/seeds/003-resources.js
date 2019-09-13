exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("resources")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("resources").insert([
        { name: "paint", description: "white paint" }, // project 1
        { name: "lawn mower", description: "new lawn mower" }, // project 2
        { name: "screw driver", description: "screw driver set" }, // project 3
        { name: "lab book", description: "my lab book from school" }, // project 4
        { name: "macbook", description: "macbook to code" }, // project 5
        { name: "lumber", description: "lumber from home depot" } // project 6
      ]);
    });
};
