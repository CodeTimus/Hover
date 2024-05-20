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
import bubble from'../../assets/bubble.png'
import bedd from'../../assets/bedd.png'
import mins from'../../assets/mins.png'
import ambul from'../../assets/ambul.png'
import hrs from'../../assets/hrs.png'
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
      <h2 className="section__header">About Us <img src={bubble} alt="" /></h2>
      <p>
      India's first, GPS based technology platform for fast and reliable first point medical attention. With an increasing emphasis on promoting independent living today, having access to the nearest ambulance to you can provide much needed peace of mind in a worst case scenario.
      </p>
      <h2 className="section__header">History/Idea <img src={bubble} alt="" /></h2>
      <p>
      Emergency response is the most critical to the lifeline of any country. Medulance wants to inspire breakthroughs in the way India looks at ambulances and first-point medical attention and to touch lives. Medulance was started in the year 2017 to make finding an ambulance as easy as finding food or taxis these days to assist lives. Medulance is an integrated emergency response support provider, ambulance booking and tracking system designed to provide first-point medical attention.
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
            <img src={bedd} alt="" />
            <p>
            Patient first policy.{" "}
            </p>
          </div>
        </div>
        <div className="main-inner-chose">
          <div className="chose-img">
            <img src={mins} alt="" />
            <p>
            Emergency assistance time of 15 minutes or less.{" "}
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
            <img src={ambul} alt="" />
            <p>
            Biggest fleet of ambulances across Lucknow{" "}
            </p>
          </div>
        </div>
        <div className="main-inner-chose">
          <div className="chose-img">
            <img src={hrs} alt="" />
            <p>
            24/7 Support{" "}
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