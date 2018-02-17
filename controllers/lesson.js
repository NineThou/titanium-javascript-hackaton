const Lessons = require('../models/Lessons')

//get all lessons
exports.getAllLessons = async (req, res) => {
    try {
        const lessons = await Lessons.find({}, function(err, allLessons){
            return allLessons;
        })
        res.render('lessons', {lessons: lessons}) 
    } catch(error){
        res.status(404).send("Ощибка при получение списка задач")
    }
}


//get a specific leson by id
exports.getByIdLesson = async (req, res) => {
    try {
        const lesson = await Lessons.findById(req.params.id).exec(( err, foundLesson) => {
            return foundLesson
        })
        res.render('/lesson.pug', {lesson: lesson})
    } catch(error){
        res.status(404).send("Ощибка при получение задачи")
    }

}
