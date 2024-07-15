const { tasks } = require("../data/dummyData");

// create controller for tasks
const getAllTasks = (req, res) => {
  // get all task like unordered listed from tasks

  res.json({
    success: true,
    data: tasks,
    count: tasks.length,
    message: "All tasks",
  });
};

const createTask = (req, res) => {
  let isUnique = true;
  while (isUnique) {
    const randomId = Math.floor(Math.random() * 10) + 1;
    isUnique = tasks.some((task) => task.id === id);
    if (!isUnique) {
      let newTask = {
        id: randomId,
        name: req.body.name,
        description: req.body.description,
      };
      tasks.push(newTask);
      res.status(201).json({ success: true, data: newTask });
    }
  }
  res.send("Create a task");
};

const getTask = (req, res) => {
  const { id } = req.params;
  const task = tasks.find((task) => task.id === parseInt(id));
  if (!task) {
    return res.status(404).send("Task not found");
  }
  res.send(task);
};

const updateTask = (req, res) => {
  res.send("Update a task");
};

const deleteTask = (req, res) => {
  res.send("Delete a task");
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
