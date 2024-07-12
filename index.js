// make a server 
const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

const taskRouter = require('./routes/tasks');
app.use('/tasks', taskRouter);

app.get('/', (req, res) => {
    res.send('Welcome to the Task Manager API');
});














app.listen(port, () => {    
    console.log(`Server is running on port ${port}`);
});