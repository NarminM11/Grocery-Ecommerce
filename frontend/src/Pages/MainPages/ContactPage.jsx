import React from 'react'
import path2 from "../Images/path-2.svg";

const ContactPage = () => {
  return (
    <div className='contactPage'>
        <div className="firstPartContactPage d-flex align-items-center justify-content-center flex-column">
            <h1 data-aos="fade-down" data-aos-duration="1000"  className=''>Contact Us</h1>
            <div className="contactOptions row container mt-5">
                <div data-aos="flip-left" data-aos-duration="2500" className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-regular fa-envelope fa-2x"></i>
                <div className="contactTxts d-flex flex-column ms-5">
                <h3>
                    <a href="mailto:hello@grocery.com">Email</a>
                </h3>
                <p>hello@grocery.com</p>
                <span>(708) 638-5584</span>
                </div>

                </div>
                <div data-aos="flip-left" data-aos-duration="2500" className="d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-solid fa-map-location fa-2x"></i>
                <div className="contactTxts d-flex flex-column ms-5">
                <h3>
                    <a href="https://goo.gl/maps/yh5CBmv5Wh25RZWh8">Location</a>
                </h3>
                <p>7310 Fieldstone Lane Brooklyn, NY 11220 USA</p>
                </div>
                </div>
                <div data-aos="flip-left" data-aos-duration="2500" className="insta d-flex justify-content-center col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
                <i class="fa-brands fa-instagram fa-2x"></i>
                <div className="contactTxts d-flex flex-column ms-5">
                <h3>
                    <a href="https://www.instagram.com/vamtam.themes/"></a>
                </h3>
                <p>Social Media</p>
                </div>
                </div>
            </div>

        </div>

        <div className="imgTop d-flex justify-content-center">
            <img  width={170} src={path2} alt="" />
        </div>
        <div className="secondPartContactPage d-flex align-items-center justify-content-center flex-column">
            <h6 data-aos="flip-down" data-aos-duration="1200">Contact Us</h6>
            <h2 data-aos="flip-down" data-aos-duration="1200">Get in touch</h2>
            <p data-aos="flip-down" data-aos-duration="1200">Fill out the form below and we will do our best to get back to you within 24 hours!</p>

       
            <div className='col-8 getInTouch' id="contact-form" name="contact-form" action="mail.php" method="POST">
              <div data-aos="flip-down" data-aos-duration="1200" className="row">
                {/*Grid column*/}
                <div className="col-md-6">
                  <div className="md-form mb-0">
                  <label htmlFor="name" className>Your name</label>
                    <input placeholder="Enter your name" type="text" id="name" name="name" className="form-control" />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="md-form mb-0">
                  <label htmlFor="email" className>Email address</label>
                    <input placeholder="Enter your email" type="text" id="email" name="email" className="form-control" />
                  </div>
                </div>
              </div>
              <div data-aos="flip-down" data-aos-duration="1200" className="row mt-3">
                <div className="col-md-12">
                  <div className="md-form">
                  <label htmlFor="message">Your message</label>
                    <textarea type="text" id="message" name="message" rows={2} className="form-control md-textarea" defaultValue={""} />
                  </div>
                </div>
              </div>
            </div>

            <div data-aos="flip-down" data-aos-duration="1200" className="sendBtn mt-3 d-flex justify-content-around align-items-center">Send</div>
           

        </div>

    </div>
  )
}

export default ContactPage