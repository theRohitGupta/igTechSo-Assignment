const { uploadImageToCloudinary } = require("../utils/imageUploader")
const Review = require("../models/Review")
const User = require("../models/User")
const { default: mongoose } = require("mongoose")


exports.createReview = async(req, res) => {
    try{
        const userId = req.user.id
        const email = req.user.email

        const { reviewTitle, rating, studentsWatched } = req.body
        
        const image = req.files.reviewImage

        if(!userId){
            return res.status(401).json({
                success : false,
                message : "YOU MUST LOGIN BEFORE CREATING A REVIEW"
            })
        }

        const userDetails = await User.findById(userId)
        if(!userDetails){
            return res.status(404).json({
                success : false,
                message : "USER DOES NOT EXIST"
            })
        }

        if(!reviewTitle || !rating || !studentsWatched){
            return res.status(406).json({
                success : false,
                message : "ALL FIELDS ARE REQUIRED"
            })
        }

        if(isNaN(studentsWatched) || isNaN(rating)){
            return res.status(406).json({
                success : false,
                message : "STUDENTS WATCHED / RATING MUST BE A NUMBER"
            })
        }

        if(rating < 1 || rating > 5 ){
            return res.status(406).json({
                success : false,
                message : "RATING MUST BE 1, 2, 3, 4, 5"
            })
        }

        if(studentsWatched < 0 ){
            return res.status(406).json({
                success : false,
                message : "STUDENTS WATCHED CANT BE A NEGATIVE NUMBER"
            })
        }


        if(!image){
            return res.status(404).json({
                success : false,
                message : "REVIEW IMAGE NOT FOUND"
            })
        }

        if(image.length > 1){
            return res.status(406).json({
                success : false,
                message : "ONLY ONE REVIEW IMAGE CAN BE UPLOADED"
            })
        }

        const allowedFileTypes = ['png', 'jpeg', 'jpg']
        if(!allowedFileTypes.includes(image.name.split(".").slice(-1)[0])){
            return res.status(406).json({
                success : false,
                message : "REVIEW IMAGE MUST BE ['png', 'jpeg', 'jpg']"
            })
        }


        const imageUpload = await uploadImageToCloudinary(image, process.env.FOLDER_NAME)

        const review = await Review.create({
            reviewTitle,
            rating,
            studentsWatched,
            reviewImage : imageUpload.secure_url
        });

        let user = await User.findByIdAndUpdate(userId)
        user.reviews.push(review._id)
        await user.save();

        return res.status(200).json({
            success : true,
            message : "REVIEW CREATED SUCCESSFULLY",
            email,
            data : review
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            message : "REVIEW COULD NOT BE CREATED",
            error : err.message
        })
    }
}

exports.getAllReviews = async(req,res) => {
    try{
        const reviews = await Review.find({})

        return res.status(200).json({
            success : true,
            message : "ALL REVIEWS FETCHED",
            data : reviews
        })

    }catch(err){
        return res.status(500).json({
            success : false,
            message : "REVIEWS COULD NOT BE FETCHED",
            error : err.message
        })
    }
} 

exports.updateReview = async(req,res) => {
    try{
        const userId = req.user.id

        const { reviewId, reviewTitle="", rating, studentsWatched } = req.body
        
        if(!reviewId){
            return res.status(406).json({
                success : false,
                message : "REVIEW ID IS REQUIRED TO UPDATE ANY REVIEW",
            })
        }

        let user = await User.findById(userId)
        const rId = new mongoose.Types.ObjectId(reviewId)
        
        if(!user.reviews.includes(rId)){
            return res.status(401).json({
                success : false,
                message : "POST YOUR OWN REVIEWS TO UPDATE THEM... YOU ARE NOT AUTHORIZED TO UPDATE SOMEONE ELSES REVIEWS",
            })
        }

        if(studentsWatched){
            if(isNaN(studentsWatched)){
                return res.status(406).json({
                    success : false,
                    message : "STUDENTS WATCHED MUST BE A NUMBER"
                })
            }

            if(studentsWatched < 0 ){
                return res.status(406).json({
                    success : false,
                    message : "STUDENTS WATCHED CANT BE A NEGATIVE NUMBER"
                })
            }
        }
        if(rating){
            if(isNaN(rating)){
                return res.status(406).json({
                    success : false,
                    message : "RATING MUST BE A NUMBER"
                })
            }
            
            if(rating < 1 || rating > 5 ){
                return res.status(406).json({
                    success : false,
                    message : "RATING MUST BE 1, 2, 3, 4, 5"
                })
            }
        }

        let image
        let imageUpload
        if(req.files){
            image = req.files.reviewImage

            if(image.length > 1){
                return res.status(406).json({
                    success : false,
                    message : "ONLY ONE REVIEW IMAGE CAN BE UPLOADED"
                })
            }
    
            const allowedFileTypes = ['png', 'jpeg', 'jpg']
            if(!allowedFileTypes.includes(image.name.split(".").slice(-1)[0])){
                return res.status(406).json({
                    success : false,
                    message : "REVIEW IMAGE MUST BE ['png', 'jpeg', 'jpg']"
                })
            }

            imageUpload = await uploadImageToCloudinary(image, process.env.FOLDER_NAME)
        }

        let review = await Review.findById(reviewId)
        if(reviewTitle) review.reviewTitle = reviewTitle
        if(rating) review.rating = rating
        if(studentsWatched) review.studentsWatched = studentsWatched
        if(imageUpload) review.reviewImage = imageUpload.secure_url
        await review.save();

        return res.status(200).json({
            success : true,
            message : "REVIEW UPDATED",
            data : review,
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            message : "REVIEW COULD NOT BE UPDATED",
            error : err.message
        })
    }
} 

exports.deleteReview = async(req,res) => {
    try{
        const userId = req.user.id

        const { reviewId } = req.body

        let user = await User.findById(userId)
        const rId = new mongoose.Types.ObjectId(reviewId)
        
        if(!user.reviews.includes(rId)){
            return res.status(401).json({
                success : false,
                message : "POST YOUR OWN REVIEWS TO DELETE THEM... YOU ARE NOT AUTHORIZED TO DELETE SOMEONE ELSES REVIEWS",
            })
        }

        await Review.findByIdAndDelete(reviewId)
        await User.findByIdAndUpdate(userId, {$pull : {reviews : rId}})

        return res.status(200).json({
            success : true,
            message : "REVIEW DELETED",
            data : reviewId
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            message : "REVIEW COULD NOT BE UPDATED",
            error : err.message
        })
    }
} 