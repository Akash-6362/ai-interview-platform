const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
    
    question: {
        type: String,
        required: true
    },

    options: [
        {
            type: String
        }
    ],

    correctAnswer: {
        type: String,
        required: true
    }
});

const testSchema = new mongoose.Schema(
{
    title: {
        type: String,
        required: true
    },

    category: {
        type: String
    },

    difficulty: {
        type: String
    },

    questions: [questionSchema]
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Test", testSchema);