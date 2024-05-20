import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/hero2.png'
import team1 from '../../assets/team1.jpg'
import team2 from '../../assets/team2.jpg'
import pic1 from '../../assets/pic1.jpg'
import pic2 from '../../assets/pic2.jpg'
import pic3 from '../../assets/pic3.jpg'
import profile1 from '../../assets/profile1.png'
import profile2 from '../../assets/profile2.jpg'
import profile3 from '../../assets/profile3.jpg'
import footerlogo from '../../assets/footerlogo.png'
import { enqueueSnackbar } from 'notistack'
import {ReactTyped} from "react-typed";


const Home = () => {
  const [showDisclaimer, setShowDisclaimer] = useState(false);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowDisclaimer(true);
      enqueueSnackbar('This website is for informational purposes only. The content should not be considered professional advice.', {
        variant: 'info',
        anchorOrigin: {
          vertical: 'bottom',
          horizontal: 'center',
        },
        autoHideDuration: 6000, // 6 seconds
        contentStyle: {
          fontSize: '30px !important', // Adjust font size as needed
        },
      });
    }, 5000); // 30 seconds in milliseconds

    return () => clearTimeout(timeoutId); // Cleanup function to clear timeout on unmount
  }, []);

  return (
    <div>
      
      <>
        <title>Emergency Doctor Services</title>
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-thin-rounded/css/uicons-thin-rounded.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn-uicons.flaticon.com/2.1.0/uicons-regular-rounded/css/uicons-regular-rounded.css"
        />
        <link rel="stylesheet" href=".css" />

        {/* Home section started */}
        <div className="main-home">
          <div className="home">
            <div className="home-left-content">
              <span>Welcome to </span>
              <ReactTyped style={{fontSize:"30px"}} className=" " strings={["Emergency Doctor Services"]} typeSpeed={100} loop />
              <h2>
                We take care our
                <br /> Patients Healths
              </h2>
              <p className="lorem">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus <br />
                numquam veniam porro eius, fugiat vero ut ipsum libero
              </p>
              <div className="home-btn">
                <Link to="/main/Location">Explore Map</Link>
                <Link className="homebtnsec" to="/main/ProfileCard">
                  Profiles
                </Link>
              </div>
            </div>
            <div className="home-right-content">
              <img src={image1} alt="" />
            </div>
            <div className="header__form">
              {/* <form>
    <h4>Book Now</h4>
    <input type="text" placeholder="First Name" />
    <input type="text" placeholder="Last Name" />
    <input type="text" placeholder="Address" />
    <input type="text" placeholder="Phone No." />
    <button className="btn form__btn2">Book Appointment</button>
  </form> */}
            </div>

          </div>
        </div>
        <div className="technology">
          <div className="main-technology">
            <div className="inner-technology">
              <span />
              <i className="fi fi-tr-hands-heart" />
              <h2>Great Doctors</h2>
              <p>
                Our diverse team of 120+ doctors, including physicians and clinicians,
                share a common passion to provide the highest quality of world-class
                care.
              </p>
            </div>
            <div className="inner-technology">
              <span />
              <i className="fi fi-rr-doctor" />
              <h2>Multi-Specialty Care</h2>
              <p>
                An ISO 9001-2000 certified, NABH Accredited multi-specialty hospital
                offering a patient-centric care to people of all age group, backed by
                the NABL Accredited Laboratories.
              </p>
            </div>
            <div className="inner-technology">
              <span />
              <i className="fi fi-tr-user-md" />
              <h2>24/7 Support</h2>
              <p>
                Fully equipped to offer medical assistance for all kinds of
                emergencies including pediatrics (facilities for Children). Backed by
                Ambulance with ventilator support.
              </p>
            </div>
          </div>
        </div>
        {/* home section ends */}
        {/* About us section started */}
        {/* <div className="main-about">
    <div className="about-heading">About Us</div>
    <div className="inner-main-about">
      <div className="about-inner-content-left">
        <img src="images/about1.png" alt="" />
      </div>
      <div className="about-inner-content">
        <div className="about-right-content">
          <h2>
            We're setting Standards in Research <br /> what's more, Critical
            Care.
          </h2>
          <p>
            We provide the most full medical services, so every person could
            have the pportunity o receive qualitative medical help.
          </p>
          <p className="aboutsec-content">
            Our Clinic has grown to provide a world class facility for the
            treatment of tooth loss, dental cosmetics and bore advanced
            restorative dentistry. We are among the most qualified implant
            providers in the AUS with over 30 years of uality training and
            experience.
          </p>
          <button className="aboutbtn">Read More</button>
        </div>
      </div>
    </div>
  </div> */}
        <>
          {/* bANNER */}
          <section id="banner-one" className="banner-one text-center">
            <div className="container text-white">
              <blockquote className="lead">
                <i className="fas fa-quote-left" /> When you are young and healthy, it
                never occurs to you that in a single second your whole life could
                change. <i className="fas fa-quote-right" />
              </blockquote>
              <small className="text text-sm">- Anonim Nano</small>
            </div>
          </section>
          {/* bANNER */}
        </>

        {/* About us section ends */}
        {/* our doctors */}
        <section>
          <div className="row98">
            <h1>Medical Experts</h1>
          </div>
          <div className="row98">
            {/* Column 1*/}
            <div className="column98">
              <div className="card98">
                <div className="img-container98">
                  <img src={profile1} />
                </div>
                <h3>Dr.Aarohi</h3>
                <p>Neurosciences</p>
                <div className="icons98">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            {/* Column 2*/}
            <div className="column98">
              <div className="card98">
                <div className="img-container98">
                  <img src={profile2} />
                </div>
                <h3>Dr.Ritika</h3>
                <p>Cardiac Care</p>
                <div className="icons98">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
            {/* Column 3*/}
            <div className="column98">
              <div className="card98">
                <div className="img-container98">
                  <img src={profile3} />
                </div>
                <h3>Dr Pradeep </h3>
                <p>CPR Specialist</p>
                <div className="icons98">
                  <a href="#">
                    <i className="fab fa-twitter" />
                  </a>
                  <a href="#">
                    <i className="fab fa-linkedin" />
                  </a>
                  <a href="#">
                    <i className="fab fa-github" />
                  </a>
                  <a href="#">
                    <i className="fas fa-envelope" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* new One */}

        {/* <section class="section__container service__container">
      <div class="service__header">
        <div class="service__header__content">
          <h2 class="section__header">Our Special service</h2>
          <p>
            Beyond simply providing medical care, our commitment lies in
            delivering unparalleled service tailored to your unique needs.
          </p>
        </div>
        <button class="service__btn">Ask A Service</button>
      </div>
      <div class="service__grid">
        <div class="service__card">
          <span><i class="ri-microscope-line"></i></span>
          <h4>Laboratory Test</h4>
          <p>
            Accurate Diagnostics, Swift Results: Experience top-notch Laboratory
            Testing at our facility.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div class="service__card">
          <span><i class="ri-mental-health-line"></i></span>
          <h4>Health Check</h4>
          <p>
            Our thorough assessments and expert evaluations help you stay
            proactive about your health.
          </p>
          <a href="#">Learn More</a>
        </div>
        <div class="service__card">
          <span><i class="ri-hospital-line"></i></span>
          <h4>General Dentistry</h4>
          <p>
            Experience comprehensive oral care with Dentistry. Trust us to keep
            your smile healthy and bright.
          </p>
          <a href="#">Learn More</a>
        </div>
      </div>
    </section> */}
        {/* our doctors ended */}
        {/* our services */}
        <div className="our-service">
          <div className="service-heading">
            <h2>Our Services</h2>
          </div>
          <div className="main-services">
            <div className="inner-services">
              <div className="service-icon">
                <i className="fa-solid fa-truck-medical" />
              </div>
              <h3>Ambulance Services</h3>
              <p>
                We offer extensive medical procedures to outbound &amp; inbound
                patients what it is and we are very proud achievement staff.
              </p>
            </div>
            <div className="inner-services">
              <div className="service-icon">
                <i className="fa-regular fa-hospital" />
              </div>
              <h3>Emergency &amp; Trauma</h3>
              <p>
                The world-class Emergency &amp; Trauma facility is operational 24×7
                with all the modern technology and infrastructure to provide the best
                emergency and trauma support.
              </p>
            </div>
            <div className="inner-services">
              <div className="service-icon">
                <i className="fa-regular fa-heart" />
              </div>
              <h3>Cardiology (Heart Care)</h3>
              <p>
                {" "}
                Our team of best heart specialists in Lucknow and Cardiothoracic
                surgeons in Lucknow has trained at the top institutes in India and
                abroad to perform many treatments and procedures in Cardiology
              </p>
            </div>
            <div className="inner-services">
              <div className="service-icon">
                <i className="fa-solid fa-notes-medical" />
              </div>
              <h3>Gynaecological Clinic</h3>
              <p>
                Our team of the best Gynaecologist in Lucknow and best Obstetrician in
                Lucknow provides pre-pregnancy and pregnancy care, management of
                high-risk pregnancies/late pregnancies
              </p>
            </div>
            <div className="inner-services">
              <div className="service-icon">
                <i className="fa-solid fa-list-check" />
              </div>
              <h3>Urology Hospital</h3>
              <p>
                Backed by the best Female urologists in Lucknow as well as male
                urologist in Lucknow, our treatments match the international standards
                and include, prostate disease treatment, urology cancer treatment,
                erectile dysfunction treatment, stone in ureter treatment, stone in
                kidney treatment, stone in urethra treatment, stone in bladder
                treatment, andrology treatment and more through laparoscopic urology
                procedures and reconstructive urology surgery.
              </p>
            </div>
            <div className="inner-services">
              <div className="service-icon">
                <i className="fa-solid fa-user-doctor" />
              </div>
              <h3>Anesthesia and Pain Management</h3>
              <p>
                Our team of experts Anesthesiologists in Lucknow focuses on optimal
                patient safety and satisfaction. Physician anesthesiologists
                specialize in anesthesia care, pain management, and critical care
                medicine. We have the latest equipment in anesthesia care, which give
                us the ability to provide timely and efficient care at our health
                center. We and our best anesthesiologist doctors in Lucknow are
                engineered in ways to focus on the individual needs of the patient..
              </p>
            </div>
          </div>
        </div>
        {/* our services ended */}
        {/* customer review */}
        <div className="main-review">
          <section>
            <div className="review-heading">
              <h1>Our Customers Review</h1>
            </div>
            <div className="main-inner-review">
              <div className="review-inner-content">
                <div className="review-box">
                  <img src={pic1} alt="" />
                  <h2>Areeba Shakeel</h2>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="review-text">
                    <p>
                      Once I found a doctor who matched my criteria, booking an
                      appointment was a breeze. The website seamlessly integrated with
                      the doctor's scheduling system, so I could see real-time
                      availability and choose a time slot that worked for me. I also
                      appreciated the reminders I received leading up to my
                      appointment, which helped me stay organized.{" "}
                    </p>
                  </div>
                </div>
                <div className="review-box">
                  <img src={pic2} alt="" />
                  <h2>Bharvi Sharma</h2>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="review-text">
                    <p>
                      During my visit, I found the doctor to be knowledgeable,
                      attentive, and compassionate. It was evident that they took the
                      time to listen to my concerns and provide personalized care. The
                      entire process, from booking the appointment to receiving
                      treatment, was smooth and efficient thanks to Emergency Doctor
                      Services.
                    </p>
                  </div>
                </div>
                <div className="review-box">
                  <img src={pic3} alt="" />
                  <h2>Irshad Ansari</h2>
                  <div className="review-stars">
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-solid fa-star" />
                    <i className="fa-regular fa-star" />
                  </div>
                  <div className="review-text">
                    <p>
                      Overall, I highly recommend Emergency Doctor Services to anyone
                      in need of medical care. Whether you're looking for a primary
                      care physician, specialist, or other healthcare provider, this
                      website makes it easy to find the right match and schedule
                      appointments with ease.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* customer review */}
        {/* footer */}
        <footer className="footer">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="footer-about">
                  <div className="footer-logo">
                    <a href="#">
                      <img src={footerlogo} alt="" />
                    </a>
                  </div>
                  <p>
                    The Customer is at the heart of our unique bussiness model, which
                    include design.
                  </p>
                  <a href="#">
                    <img src="img/payment.png" alt="" />
                  </a>
                </div>
              </div>
              <div className="col-lg-2 offset-lg-1 col-md-3 col-sm-6">
                <div className="footer-widget">
                  <h6>Specialities</h6>
                  <ul>
                    <li>
                      <a href="#">Cardiac Care</a>
                    </li>
                    <li>
                      <a href="#">Orthopaedics</a>
                    </li>
                    <li>
                      <a href="#">Emergency</a>
                    </li>
                    <li>
                      <a href="#">ENT, Head and Neck Specialist</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-2  col-md-3 col-sm-6">
                <div className="footer-widget">
                  <h6>Links</h6>
                  <ul>
                    <li>
                      <a href="#">Contact Us</a>
                    </li>
                    <li>
                      <a href="#">Find a Doctor</a>
                    </li>
                    <li>
                      <a href="#">Book Appointment</a>
                    </li>
                    <li>
                      <a href="#">CPR &amp; CPR</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-3 offset-lg-1 col-md-6 col-sm-6">
                <div className="footer-widget">
                  <h6>NewsLetter</h6>
                  <div className="footer-newslatter">
                    <p>
                      Be the first to know about new arrivals, look books, sales &amp;
                      promos!
                    </p>
                    <form action="#">
                      <input type="text" placeholder="Your Email" />
                      <button type="submit">
                        <span>
                          <i className="fa fa-envelope" arial-hidden="true" />
                        </span>
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="footer-copyright-text">
                  <p>
                    Copyright © 2024 All rights reserved | This template is made with{" "}
                    <i className="fa fa-heart-o" arial-hidden="true" />
                    by <a href="#">CodingWithkumar</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* footer ended */}
      </>

    </div>
  )
}

export default Home
