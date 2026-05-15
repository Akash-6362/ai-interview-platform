const express = require("express");
const router = express.Router();

const {
    createTest,
    getTests
} = require("../controllers/testController");

const protect = require("../middleware/authMiddleware");
const admin = require("../middleware/authMiddleware");

router.post("/", createTest);
router.post("/", protect, admin, createTest);

router.get("/", getTests);

module.exports = router;