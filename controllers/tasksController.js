// create controller for tasks
const getAllTasks = (req, res) => {
  res.send('Get all tasks');
};

const createTask = (req, res) => {
  res.send('Create a task');
};

const getTask = (req, res) => {
  res.send('Get a task');
};

const updateTask = (req, res) => {
  res.send('Update a task');
};

const deleteTask = (req, res) => {
  res.send('Delete a task');
};

module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };
