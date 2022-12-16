const asyncHandler = require('express-async-handler')
const bcrypt = require('bcryptjs')
const User = require('../models/userModel')

const registerUser = asyncHandler(async (req, res) =>{
    const {name, email , password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all field')
    }

    //find if user already exists
    const userExists = await User.findOne({email: email})

    if(userExists){
        res.status(400) //client error
        throw new Error ('User already exists')
    }

    //Hash
    const salt = await bcrypt.genSalt(10)
    const hashedPwd = await bcrypt.hash(password, salt)

    //create user

    const user = await User.create({
        name: name, 
        email: email, 
        key: hashedPwd,
    })


    if(user){
        res.status(201).json({
            _id: user._id,
            name: user.name,
            email: user.email,
            password: user.password
        })
        console.log(user.password)
    }else{
        res.status(400)
        throw new error ('Inval User Data');
    }

})


const loginUser = asyncHandler(async (req, res) =>{
    const {email, password} = req.body

    const user = await User.findOne({email})
    //check pass
    console.log(user)
    if(user && (await bcrypt.compare(password, user.password))){
        res.status(200).json({
            _id: user._id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(401)
        throw new Error ('invalid credentials')
    }
})

module.exports = {registerUser, loginUser}