const { Student } = require('../models/student.model');

    // The method below is new
module.exports.createStudent = (request, response) => {
    Student.create(request.body)
        .then(student => response.json(student))
        .catch(err => response.status(400).json(err));
}

module.exports.getAllStudents = (request, response) => {
    Student.find().sort({_id:-1})
        .then(students => response.json(students))
        .catch(err => response.json({message:"something went wrong",error:err}))
}


module.exports.deleteStudent = (request, response) => {
    Student.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}
module.exports.updateStudent = (request, response) => {
    Student.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedStudent => response.json(updatedStudent))
        .catch(err => response.json(err))
}

module.exports.getStudent = (request, response) => {
    Student.findOne({_id:request.params.id})
        .then(student => response.json(student))
        .catch(err => response.json(err))
}


module.exports.getBacklogstudents = (request, response) => {
    Student.find({status:"backlog"})
        .then(students => response.json(students))
        .catch(err => response.json({message:"something went wrong",error:err}))
}

module.exports.getInprogressstudents = (request, response) => {
    Student.find({status:"inprogress"})
        .then(students => response.json(students))
        .catch(err => response.json({message:"something went wrong",error:err}))
}
module.exports.getCompletedstudents = (request, response) => {
    Student.find({status:"completed"})
        .then(students => response.json(students))
        .catch(err => response.json({message:"something went wrong",error:err}))
}

