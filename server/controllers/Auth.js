const User = require("../models/User")
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken")
require("dotenv").config()

exports.signUp = async(req, res) => {
    try{
        const { email, password, confirmPassword } = req.body
        
        if(!email || !password || !confirmPassword){
            return res.status(406).json({
                success : false,
                message : "ALL FIELDS ARE REQUIRED"
            })
        }

        if(password !== confirmPassword){
            return res.status(406).json({
                success : false,
                message : "PASSWORD AND CONFIRM PASSWORD DO NOT MATCH"
            })
        }

        const existingUser = await User.findOne({email})
        if(existingUser){
            return res.status(200).json({
                success : false,
                message : "USER ALREADY EXISTS.... PLEASE LOGIN"
            })
        }

        const hashedPassword = await bcrypt.hash(password, 10)

        const user = await User.create({
            email,
            password : hashedPassword
        })
        user.password = undefined

        return res.status(200).json({
            success : true,
            message : "USER IS REGISTERED SUCCESSFULLY",
            user
        })
    }catch(err){
        return res.status(500).json({
            success : false,
            message : "INTERNAL SERVER ERROR",
            error : err.message
        })
    }
}

exports.login = async(req,res) => {
    try{
        const {email, password} = req.body

        if(!email || !password){
            return res.status(406).json({
                succes : false,
                message : "ALL FIELDS ARE REQUIRED"
            })
        }

        let user = await User.findOne({email});

        if(!user){
            return res.status(401).json({
                succes : false,
                message : "USER IS NOT REGISTERED.... PLASE SIGNUP"
            })
        }

        if(await bcrypt.compare(password, user.password)){
            const payload = {
                email : user.email,
                id : user._id,
            }
            const token = jwt.sign(payload, process.env.JWT_SECRET, {expiresIn : "24H"});

            user[token] = token
            user.password = undefined

            const options = {
                expires : new Date(Date.now() + 24 * 60 * 60 * 1000),
                httpOnly : true
            }

            res.cookie("token", token, options).status(200).json({
                succes : true,
                token,
                user,
                message : "LOGGED IN SUCCESSFULLY"
            })
        }else{
            return res.status(401).json({
                succes : false,
                message : "PASSWORD IS WRONG"
            })
        }
    }catch(err){
        console.log(err)
        return res.status(500).json({
            succes : false,
            message : "LOGIN FAILURE, PLEASE TRY AGAIN",
            error : err.message
        })
    }
}