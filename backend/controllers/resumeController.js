const Resume = require("../models/Resume");

const uploadResume = async (req, res) => {

    try {

        if(!req.file){

            return res.status(400).json({
                message: "No file uploaded"
            });
        }

        const resume = await Resume.create({

            user: req.user.id,

            filename: req.file.filename,

            filepath: req.file.path
        });

        res.status(201).json({
            message: "Resume uploaded successfully",
            resume
        });

    } catch(error){

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    uploadResume
};