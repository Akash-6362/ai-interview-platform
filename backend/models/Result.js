const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema(
{
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },

    testId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Test"
    },

    score: {
        type: Number
    },

    feedback: {
        type: String
    }
},
{
    timestamps: true
}
);

module.exports = mongoose.model("Result", resultSchema);