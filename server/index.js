const express = require('express')
const app = express()

require("dotenv").config()
const cors = require("cors")

const cookieParser = require('cookie-parser')

const userRoutes = require("./routes/User")
const reviewRoutes = require("./routes/Review")

const db = require('./config/database')
const fileUpload = require("express-fileupload")
const {cloudinaryConnect} = require("./config/cloudinary")

const PORT = process.env.PORT || 4000

db.dbConnect();
app.use(express.json())
app.use(cookieParser())
app.use(
    cors(
        {
            origin : "*",
            credentials : true
        }
    )
)
app.use(fileUpload({
    useTempFiles : true,
    tempFileDir : "/tmp"
}))

cloudinaryConnect();

app.use("/auth", userRoutes)
app.use("/review", reviewRoutes)


app.listen(PORT, () => {
    console.log(`SERVER STARTED AT PORT: ${PORT}`)
})

app.get('/', (req,res) => {
    return res.json({
        success : true,
        message : "YOUR SERVER IS UP AND RUNNING"
    })
})