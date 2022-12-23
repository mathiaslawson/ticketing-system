import React, {useState, useEffect} from 'react'
import {FaUser} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {register, reset} from '../features/auth/authSlice'
import {useNavigate} from 'react-router-dom'

function Register() {
  const [formData, setfromData] = useState({
    name: "", 
    email: "",
    password: "", 
    password2: ""
  })

  const {name, email , password, password2} = formData

  const dispath = useDispatch()
  const navigate = useNavigate()

  const {user, isLoading, isError ,isSuccess, message } = useSelector(state => state.auth)

useEffect(()=>{
   if(isError){
      toast.error(message)
   }

   //Redirect when logged in 
   if(isSuccess || user) {
         navigate('/')
   }

   dispath(reset)
}, [isError, isSuccess, user, message, navigate, dispath])


  const onChange = (e) =>{
    setfromData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  } 

  const onSubmit = (e) =>{
    e.preventDefault()
      
    if(password !== password2){
      toast.error('Passwords do not match')
    }else{
      const userData = {
        name, 
        email, 
        password
      }

      dispath(register(userData))
    }
  }

  return (
   <>
      <section className='heading'>
        <h1>
              <FaUser />Register
        </h1>

        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type="text"  className='form-control' id='name' name="name" value={name} placeholder="Enter your name" onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type="email"  className='form-control' id='email' name="email" value={email} placeholder="Enter your email" onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type="password"  className='form-control' id='password' name="password" value={password} placeholder="Enter your passsword" onChange={onChange} required/>
          </div>
          <div className='form-group'>
            <input type="password"  className='form-control' id='password2' name="password2" value={password2} placeholder="Confirm Password" onChange={onChange} required/>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
   </>
  )
}

export default Register