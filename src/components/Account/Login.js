import React, { useState,useEffect } from 'react'
import axios from "axios"
import { Link, useHistory, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { LoginState } from '../AuthContext/AuthContext'

const Login = () => {
  
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory();
  const { state:{ userInfo } , dispatch } = LoginState()
  const { search } = useLocation()
  const redirectInUrl = new URLSearchParams(search).get('redirect')
  const redirect = redirectInUrl ? redirectInUrl : '/'


  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('https://ca8d-41-220-235-163.in.ngrok.io/api/auth/login',
      JSON.stringify({email, password}),
      {
        headers : { 'Content-type' : 'application/json'},
        withCredentials : true
      });
      dispatch({type:'USER_SIGNIN', payload:response})
      localStorage.setItem('userInfo', JSON.stringify(response))
      console.log(response?.data)
      toast.success("Login Successfull")
      history.push('/')
    } catch (error) {
        if (!error?.response) {
          toast.error('No Server Response');
        } else if (error.response?.status === 400) {
          toast.error('Missing Username or Password');
        } else if (error.response?.status === 401) {
          toast.error('Unauthorized');
        } else {
          toast.error('Login Failed');
        }
      console.log(error)
      console.log(error.response)
    }
  }

  useEffect(() => {
    if(userInfo){
      history.push(redirect)
    }
  },[history, redirect, userInfo])
  

  return (
    <div className="min-h-screen">
      <div className="container mx-auto p-4">
        <div className="flex justify-center items-center ">
          <form className="block shadow-lg rounded-lg p-8" onSubmit={handleSubmit}>
            <div className="text-center p-5">
              <h3><b>Sign into your account!</b></h3>
              <p>Nice to see you! Please log in with your account.</p>
            </div>  
            <div className="mb-4">
              <input
                type="email"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Email Address"
                name="mail" 
                id="mail" 
                value={email}
                onChange = { (e) => setEmail(e.target.value) }
              />
            </div>
            <div className="mb-4">
              <input
                type="password"
                className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                placeholder="Password"
                name="password" 
                id="password"
                value={password}
                onChange = { (e) => setPassword(e.target.value) }
              />
            </div>
            <div className="text-center pt-1 mb-12 pb-1">
              <button
                className="inline-block px-6 py-2.5 bg-[#C21010] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-[#e04444] hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out w-full mb-3"
                type="submit"
              > Log in
              </button>
              <Link className="text-gray-500 hover:text-[#C21010]" to="/reset-password">Forgot password?</Link>
            </div>
            <div className="flex items-center pb-6">
              <p className="mb-0 mr-2">Don't have an account?</p>
              <Link className="mb-0 mr-2 hover:text-[#C21010] " to="/register">Register</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
export default Login
