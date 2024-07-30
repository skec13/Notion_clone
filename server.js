//Dependencies
const express = require('express');
const fs = require('fs'); 

const mongoose = require('mongoose');
require('dotenv').config();

const morgan = require('morgan');

//MongoDB
mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log("Connected to database"));

const Task = require('./models/task');

//Express
const app = express();

//Middleware
app.use(express.static('./public'));
app.use(express.json());
app.use(morgan('tiny'));


//Get
app.get('/API', async (req, res) =>{
    try {
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(500).json({message: err.message});
    }
});

//Post
app.post('/API', async (req, res) => {
    const task = new Task({
        date: req.body.date,
        title: req.body.title,
        time: req.body.time,
        description: req.body.description,
        done: req.body.done,
        isLeft: req.body.isLeft
    });

    try{
        const newTask = await task.save();
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(400).json({message: err.message});   
    }
});

// Patch
app.patch('/API', getTask, async (req, res) => {
    if(res.task.done === false){
        res.task.done = true;
    } else {
        res.task.done = false;
    }

    try{
        const updatedTask = await res.task.save();
        const tasks = await Task.find();
        res.json(tasks);
    }catch(err){
        res.status(400).json({message: err.message});
    }
    
});

// Delete
app.delete('/API', getTask, async(req, res) => {
    try{
        await res.task.deleteOne();
        res.json({message: 'Deleted subscriber'});
    } catch(err){
        res.status(500).json({message: err.message});
    }

});

// Search in database
async function getTask(req, res, next){
    let task;
    try {
        task = await Task.find(
            { 
                'date': req.body.date,
                'title': req.body.title,
                'time': req.body.time,
                'description': req.body.description,
                "isLeft": req.body.isLeft
            }
        );
        if(task.length == 0){
            return res.status(404).json({message: 'Cannot find subscriber'});
        }
    }catch(err){
        return res.status(500).json({message: err.message})
    }
    res.task = task[0];
    next();
}






app.listen(3001, () => {
    console.log("Server listening on: http://localhost:3001");
});
