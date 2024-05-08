import React, { useRef, useState } from 'react';
import HomePage from "../MainPages/HomePage";
const LoginPage = () => {
  const [alert, setAlert] = useState();
  const [color, setColor] = useState();
  const email = useRef();
  const password = useRef();
  const getEmail = localStorage.getItem("emailData");
  const getPassword = localStorage.getItem("passwordData");
  const handleSubmit = () => {
    if (email.current.value == "ilaha.hasanli@gmail.com" && password.current.value == "12345") {
      localStorage.setItem("emailData", "ilaha.hasanli@gmail.com");
      localStorage.setItem("passwordData", "12345");
    }
    else {
      setAlert("UserName or Password is incorrect!")
      setColor("alert alert-danger")
    }
  }

  return (
    <>
      {
        getEmail && getPassword ? <HomePage /> :
          <div className='loginPage mt-5 d-flex align-items-center justify-content-center flex-column'>
            <div className="titles mt-3 d-flex align-items-center justify-content-around flex-column">
              <h1 className='mt-5'>My Account</h1>
              <h4>Welcome Back</h4>
              <h5>Please sign in to access your full account</h5></div>

            {/* ************ */}
            <form onSubmit={handleSubmit} className='mb-5 col-4'>
            <p className={color}>{alert}</p>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input  ref={email} type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
              </div>
              <div className="">
                <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                <input ref={password} type="password" className="form-control" id="exampleInputPassword1" />
              </div>
              <div className="mb-3 form-check">
                <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
              </div>
              <button type="submit" className="btn btn-primary">Sign In</button>
            </form>

          </div>}
    </>
  )
}


export default LoginPage