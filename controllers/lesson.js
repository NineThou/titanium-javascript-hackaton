const Lessons = require('../models/Lessons')
const Task = require('../models/Tasks')


//get all lessons
exports.getAllLessons = async (req, res, next) => {
    try {
        const lessons = await Lessons.find({}, function(err, allLessons){
            return allLessons;
        })
        res.render('lessons', {lessons: lessons})
    } catch(error){
        next()
        // res.status(404).send("Ощибка при получение списка задач")
    }

}


//get a specific leson by id
exports.getByIdLesson = async (req, res, next) => {
    try {
        const lesson = await Lessons.findById(req.params.id).exec(( err, foundLesson) => {
            return foundLesson
        })

        const tasks = await Task.find({ lesson: lesson._id }).exec( ( err, tasks ) => { return tasks } )

        res.render('lesson.pug', {
            lesson: lesson,
            tasks: tasks,
        })

    } catch(error){
        next()
        // res.status(404)
    }

}
