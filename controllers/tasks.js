const Tasks = require('../models/Tasks');

const Schema = mongoose.Schema;

exports.getTask = async (req, res) => {
    try {
        const task = await Tasks.findById(req.params.id).exec(( err, taskById) => {
            return taskById
        })
        res.render('/lessons.pug', {task: task}) 
    } catch(error){
        res.status(404).send("Ощибка при получение таска")
    }

}
