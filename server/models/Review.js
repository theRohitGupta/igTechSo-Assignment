const mongoose = require("mongoose")

const reviewSchema = new mongoose.Schema(
    {
        reviewTitle : {
            type : String,
            required : true,
            trim : true
        },
        rating : {
            type : Number,
            enum : [1,2,3,4,5],
            default : 0,
            required : true,
        },
        studentsWatched : {
            type : Number,
            required : true,
        },
        reviewImage : {
            type : String,
            required : true,
        }
    }
)

module.exports = mongoose.model("Review", reviewSchema)