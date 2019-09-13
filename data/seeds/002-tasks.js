exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("tasks")
    .truncate()
    .then(function() {
      // Inserts seed entries
      return knex("tasks").insert([
        {
          project_id: 1,
          description: "Buy white paint for the gate",
          completed: true
        },
        {
          project_id: 1,
          description: "Buy primer for the gate",
          completed: true
        },
        {
          project_id: 1,
          description: "Paint gate so my front yard will look nice",
          completed: true
        },
        {
          project_id: 2,
          description: "Buy lawnmower so I can cut the grass",
          completed: true
        },
        {
          project_id: 2,
          description: "Set up lawnmower this might be hard",
          completed: true
        },
        {
          project_id: 2,
          description: "Cut grass so my lawn will look great",
          completed: true
        },
        {
          project_id: 3,
          description: "Take macbook case off",
          completed: true
        },
        {
          project_id: 3,
          description: "Buy right size screw driver",
          completed: false
        },
        { project_id: 3, description: "Take macbook apart", completed: false },
        {
          project_id: 3,
          description: "Put macbook back together",
          completed: false
        },
        {
          project_id: 4,
          description: "Study for the assignment",
          completed: true
        },
        {
          project_id: 4,
          description: "Go to library to browse the web",
          completed: true
        },
        {
          project_id: 4,
          description: "Take my lab test",
          completed: true
        },
        {
          project_id: 5,
          description: "Look over all my guided projects from this week",
          completed: true
        },
        {
          project_id: 5,
          description: "Study for my sprint challenge",
          completed: true
        },
        {
          project_id: 5,
          description: "Take Sprint Challenge!!",
          completed: true
        },
        {
          project_id: 6,
          description: "Buy power tools",
          completed: false
        },
        {
          project_id: 6,
          description: "Get lumber",
          completed: false
        },
        {
          project_id: 6,
          description: "Build the shed that I always wanted!",
          completed: false
        }
      ]);
    });
};
