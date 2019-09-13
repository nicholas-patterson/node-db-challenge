exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("projects")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("projects").insert([
        {
          name: "Paint gate white",
          description: "Paint my gate in front my house white",
          completed: true
        }, // 1
        {
          name: "Cut the grass",
          description:
            "I need to make my lawn presentable by cutting the grass",
          completed: true
        }, // 2
        {
          name: "Take macbook apart",
          description: "I need to take my laptop apart and clean the inside",
          completed: false
        }, // 3
        {
          name: "prep for lab assignment",
          description:
            "I need to prep for my lab assignment...It will take a while",
          completed: true
        }, // 4
        {
          name: "take my sprint challenge",
          description:
            "I need to take my sprint challenge...Im typing this, so I started",
          completed: false
        }, // 5
        {
          name: "Build a shed",
          description: "I need to build a shed in my backyard",
          completed: false
        } // 6
      ]);
    });
};
