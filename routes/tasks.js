
taskRouter = express.Router();

const taskController = require('../controllers/taskController');


taskRouter.get('/', taskController.getAllTasks);
taskRouter.post('/', taskController.createTask);
taskRouter.get('/:id', taskController.getTask);
taskRouter.put('/:id', taskController.updateTask);
taskRouter.delete('/:id', taskController.deleteTask);


module.exports = taskRouter;