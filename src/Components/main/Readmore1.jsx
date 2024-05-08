import React from 'react'
import './Readmore1.css'
import about from'../../assets/about.jpg'
import virus from'../../assets/virus.png'
import doctorstand from'../../assets/doctorstand.png'
import gallery4 from'../../assets/gallery4.jpg'
import gallery3 from'../../assets/gallery3.jpg'
import gallery2 from'../../assets/gallery2.jpg'
import gallery1 from'../../assets/gallery1.jpg'
import gallery5 from'../../assets/gallery5.jpg'
import gallery6 from'../../assets/gallery6.jpg'

const Readmore1 = () => {
  return (
    <div>
        <>
  <meta charSet="UTF-8" />
  <link rel="stylesheet" href="Readmore1.css" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  
  <title>Document</title>
  <body>
    
 
  <section className="section__container about__container">
    <div className="about__content">
      <h2 className="section__header">About Us</h2>
      <p>
        Welcome to our healthcare website, your one-stop destination for
        reliable and comprehensive health care information. We are committed to
        promoting wellness and providing valuable resources to empower you on
        your health journey.
      </p>
      <p>
        Explore our extensive collection of expertly written articles and guides
        covering a wide range of health topics. From understanding common
        medical conditions to tips for maintaining a healthy lifestyle, our
        content is designed to educate, inspire, and support you in making
        informed choices for your health.
      </p>
      <p>
        Discover practical health tips and lifestyle advice to optimize your
        physical and mental well-being. We believe that small changes can lead
        to significant improvements in your quality of life, and we're here to
        guide you on your path to a healthier and happier you.
      </p>
      
    </div>
    
    <div className="about__image">
    <img src={about} alt="" />
    </div>
  </section>
    </body>
</>
<>
  {/* why chose us */}
  <div className="why-chose-us">
    <h1>
      Why <span>chose</span> us
    </h1>
    <div className="full-main">
      <div className="main-choseus">
        <div className="main-inner-chose">
          <div className="chose-img">
            <img src={virus} alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit voluptates quod?{" "}
            </p>
          </div>
        </div>
        <div className="main-inner-chose">
          <div className="chose-img">
            <img src={virus} alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit voluptates quod?{" "}
            </p>
          </div>
        </div>
      </div>
      <div className="main-choseus">
        <img src={doctorstand} alt="" />
      </div>
      <div className="main-choseus">
        <div className="main-inner-chose">
          <div className="chose-img">
            <img src={virus} alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit voluptates quod?{" "}
            </p>
          </div>
        </div>
        <div className="main-inner-chose">
          <div className="chose-img">
            <img src={virus} alt="" />
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis
              impedit voluptates quod?{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* our gallery */}
  <div className="our-gallery">
    <h1>
      Our <span>Gallery</span>
    </h1>
    <div className="main-gallery">
      <div className="inner-gallery">
        <img src={gallery1} alt="" />
      </div>
      <div className="inner-gallery">
        <img src={gallery2} alt="" />
      </div>
      <div className="inner-gallery">
        <img src={gallery3} alt="" />
      </div>
      <div className="inner-gallery">
        <img src={gallery4} alt="" />
      </div>
      <div className="inner-gallery">
        <img src={gallery5} alt="" />
      </div>
      <div className="inner-gallery">
        <img src={gallery6} alt="" />
      </div>
    </div>
  </div>
</>

    </div>
  )
}

export default Readmore1