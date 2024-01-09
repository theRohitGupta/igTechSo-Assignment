const router = require("express").Router()

const { createReview, getAllReviews, updateReview, deleteReview } = require("../controllers/Review")
const { auth } = require("../middlewares/auth")

// **********************************************************************************************************************************
//                                                            REVIEW ROUTES
// **********************************************************************************************************************************

router.post("/createReview", auth, createReview)

router.get("/getReviews", getAllReviews)

router.put("/updateReview", auth, updateReview)

router.delete("/deleteReview", auth, deleteReview)

module.exports = router