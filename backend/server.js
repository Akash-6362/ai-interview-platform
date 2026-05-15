const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
const resumeRoutes = require("./routes/resumeRoutes");

dotenv.config();

const app = express();

app.use(cors());

app.use(express.json());

const authRoutes = require("./routes/authRoutes");

const testRoutes = require("./routes/testRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/tests", testRoutes);
app.use("/api/resumes", resumeRoutes);
app.use("/uploads", express.static("uploads"));

mongoose.connect(process.env.MONGO_URI, {
    family: 4
})
.then(() => {
    console.log("MongoDB Connected");
})
.catch((error) => {
    console.log(error);
});

app.get("/", (req, res) => {
    res.send("API Running Successfully");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});