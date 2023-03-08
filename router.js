const { getAllStudent, createStudent, getStudentById, updateStudent, deleteStudent } = require("./controllers/StudentHandler");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});
router.get("/Student", getAllStudent);
router.post("/Student", createStudent);
router.get("/Student/:id", getStudentById);
router.put("/Student/:id", updateStudent);
router.delete("/Student/:id", deleteStudent);


module.exports = router;
