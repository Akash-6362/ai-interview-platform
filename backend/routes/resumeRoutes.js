const express = require("express");

const router = express.Router();

const {
    uploadResume
} = require("../controllers/resumeController");

const protect = require("../middleware/authMiddleware");

const upload = require("../middleware/uploadMiddleware");

// Upload route
router.post(
    "/upload",
    protect,
    upload.single("resume"),
    uploadResume
);

module.exports = router;