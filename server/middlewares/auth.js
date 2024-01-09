const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.auth = async(req, res, next) => {
    try{
        const token = req.cookies.token

        if(!token) {
            return res.status(401).json({
                success : false,
                message : "TOKEN IS MISSING.... PLEASE LOGIN"
            })
        }

        try{
            const decode = jwt.verify(token, process.env.JWT_SECRET)
            req.user = decode
        }catch(err){
            return res.status(400).json({
                success : false,
                message : "TOKEN IS INVALID"
            })
        }
        next()
    }catch(err){
        return res.status(500).json({
            success : false,
            message : "SOMETHING WENT WRONG"
        })
    }
}