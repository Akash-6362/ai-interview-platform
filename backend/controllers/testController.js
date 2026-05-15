const Test = require("../models/Test");

const createTest = async (req, res) => {

    try {

        const test = await Test.create(req.body);

        res.status(201).json(test);

    } catch(error){

        res.status(500).json({
            message: error.message
        });
    }
};

const getTests = async (req, res) => {

    try {

        const tests = await Test.find();

        res.status(200).json(tests);

    } catch(error){

        res.status(500).json({
            message: error.message
        });
    }
};

module.exports = {
    createTest,
    getTests
};