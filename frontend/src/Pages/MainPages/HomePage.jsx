import React from 'react'
import OvalYellow from "../Images/Oval-yellow.svg"
import OvalBlue from "../Images/Oval-blue.svg"
import MainImg from "../Images/mainPage.png"
import SunImg from "../Images/sun.svg"
import SecondPage from './SecondPage'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div >
      <div className='MainPage'>
        <img className='ovalblue' src={OvalBlue} alt="" />
        <img className='ovalyellow' src={OvalYellow} alt="" />


        <div className="row mt-5 w-100 d-flex align-items-center justify-content-center">
          <div className="mainPageTexts d-flex  flex-column col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12">
            <div className="container">
              <h1>Order fresh, get it delivered!</h1>
              <Link to="store" data-aos="zoom-in" data-aos-duration="3000" className="explore d-flex align-items-center justify-content-around">
                Store<i class="fa-solid fa-arrow-right"></i>
              </Link>
            </div>

          </div>
          <div className="mainPageImages d-flex align-items-center justify-content-center col-xl-6 col-lg-6 col-md-6 col-sm-12 col-12 " >
            <div className="mainimg">
              <img width={600} src={MainImg} alt="" />
            </div>
            <img data-aos="fade-left" data-aos-duration="3000" className='sunImg' src={SunImg} alt="" />
          </div>
        </div>
      </div>
      <SecondPage />
    </div>
  )
}

export default HomePage