import React, {useState} from 'react'
import {FaSignInAlt} from 'react-icons/fa'
import {toast} from 'react-toastify'
import {useSelector, useDispatch} from 'react-redux'
import {login} from '../features/auth/authSlice'

function Login() {
  const [formData, setfromData] = useState({
    email: "",
    password: ""
  })

  const {email , password} = formData

  const dispatch = useDispatch()

  const {user, isLoading, isSuccess, message} = useSelector(
    (state) => state.auth
  )

  const onChange = (e) =>{
    setfromData((prevState) => ({
      ...prevState, 
      [e.target.name]: e.target.value
    }))
  } 

  const onSubmit = (e) =>{
    e.preventDefault()
   const userData = {
       email, 
       password
   }
   dispatch(login(userData))
  }

  return (
   <>
      <section className='heading'>
        <h1>
              <FaSignInAlt />Login
        </h1>

        <p>Please create an account</p>
      </section>

      <section className='form'>
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type="email"  className='form-control' id='email' name="email" value={email} placeholder="Enter your email" onChange={onChange}/>
          </div>
          <div className='form-group'>
            <input type="password"  className='form-control' id='password' name="password" value={password} placeholder="Enter your passsword" onChange={onChange} required/>
          </div>
          <div className="form-group">
            <button className="btn btn-block">Submit</button>
          </div>
        </form>
      </section>
   </>
  )
}

export default Login