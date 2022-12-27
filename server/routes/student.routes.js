const StudentController = require('../controllers/student.controller');
module.exports = function(app){
    app.get('/api/getAllStudents', StudentController.getAllStudents);
    // app.get('/api/getTopStudents', StudentController.getTopStudents);
    app.post('/api/createNewStudent', StudentController.createStudent);
   app.get('/api/students/:id', StudentController.getStudent);
   app.get('/api/students/backlog', StudentController.getBacklogstudents);
   app.get('/api/students/inprogress', StudentController.getInprogressstudents);
   app.get('/api/students/completed', StudentController.getCompletedstudents);
   app.put('/api/students/:id', StudentController.updateStudent);
    app.delete('/api/students/:id', StudentController.deleteStudent);
}
