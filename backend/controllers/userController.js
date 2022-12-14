const registerUser = (req, res) =>{
    const {name, email , password} = req.body

    if(!name || !email || !password) {
        res.status(400)
        throw new Error('Please include all field')
    }

    res.send('Register Route')
}
const loginUser = (req, res) =>{
    res.send('login Route')
}

module.exports = {registerUser, loginUser}