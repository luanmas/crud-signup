const express = require("express");
const PORT = 3030;
const app = express();
const path = require("path");
const apiRoute = require("./routes/api");
const connectDB = require("./db");
const cors = require("cors");

connectDB();

app.use(cors());
// estudar esse cors e o cookie parser
app.use("/api" , express.json() , apiRoute);
app.use(express.static(path.join(__dirname , "public")));

app.listen(PORT , () => {
    console.log("Server is running on port " + PORT);
})