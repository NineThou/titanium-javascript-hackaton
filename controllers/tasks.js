const Tasks = require('../models/Tasks');


exports.getTask = async (req, res, next) => {
    try {
        const task = await Tasks.findById(req.params.id).exec(( err, taskById) => {
            return taskById
        })
        res.render('task', {task: task}) 
    } catch(error){
        next()
        // res.status(404).send("Ощибка при получение таска")
    }
}


