const Student = require("../model/model");


const getAllStudent = async (req, res) => {
    try {
        const students = await Student.find();
        res.status(200).json(students);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};
const createStudent = async (req, res) => {
    try {
        const newStudent = await Student.create(req.body)
        res.status(200).json(newStudent);
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
}
const getStudentById = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        res.status(200).json(student);
        console.log("Successfully!!!");
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};
const updateStudent = async (req, res) => {
    try {
        const student = await Student.findById(req.params.id);
        await student.updateOne({ $set: req.body });
        res.status(200).json(student);
        console.log("Update Successfully!!!");
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};

const deleteStudent = async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.status(200).json("Delete Successfully!!!" + student);
        console.log("Delete Successfully!!!");
    } catch (err) {
        console.log("Fail");
        res.status(500).json(err);
    }
};


module.exports = {
    getAllStudent, createStudent, getStudentById, updateStudent, deleteStudent,
};