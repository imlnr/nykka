const express = require("express");
const cors = require("cors");
const { connection } = require("./config/db");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());


app.listen(process.env.PORT, async () => {
    try {
        await connection
        console.log("Connected to db");
        console.log("Server is running at ");
    } catch (error) {
        console.log(error);
    }
})