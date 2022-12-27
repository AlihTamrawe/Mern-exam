const mongoose = require('mongoose');

const StudentSchema = new mongoose.Schema({
    name: { type: String ,
        required:[true,"Student name is required"],
        minlength:[3,'Student name should be at least 10 characters'],
},

status: { type: String
}

}, { timestamps: true });



module.exports.Student = mongoose.model('Student', StudentSchema);
