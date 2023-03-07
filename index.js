require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router");
const mongoose = require("mongoose");
mongoose
    .connect(process.env.MONGODB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.log(err);
    });

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(router);


const PORT = process.env.PORT || 3000;
app.listen(PORT)
console.log("app running is: ", PORT)



