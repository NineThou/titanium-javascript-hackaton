exports.home = (req, res) => {
    // res.send('hey punk')
    res.render('admin/admin.pug', {})
}
exports.getLessonForm = (req, res) => {
    // res.send('hey punk')
    res.render('admin/lesson-form.pug', {})
}

exports.postLessonForm = (req, res) => {
    res.send(req.body)
}
