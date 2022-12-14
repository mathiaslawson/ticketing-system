const registerUser = (req, res) =>{
    res.send('Register Route')
    console.log(req.body)
}
const loginUser = (req, res) =>{
    res.send('login Route')
}

module.exports = {registerUser, loginUser}