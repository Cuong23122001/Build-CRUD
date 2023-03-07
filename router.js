const { getStudent, createStudent, } = require("./controllers/StudentHandler");

const router = require("express").Router();

router.get("/", (req, res) => {
    res.send("Let's build a CRUD API!");
});
router.get("/Student", getStudent);
router.post("/Student", createStudent);


module.exports = router;
