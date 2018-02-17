const Lessons = require('../models/Lessons')


exports.getLessonsForm =  (req, res) => {
    Lessons.find({}, function(err, allLessons){
        if(err){
            res.send({
                succes: false
            })
        } else {
            res.render('/lessons', {lesseons: allLessons})
        }
    })
}



