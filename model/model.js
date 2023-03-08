const mongoose = require("mongoose");
const StudentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
})
const Student = mongoose.model("Student", StudentSchema);
module.exports = Student;
