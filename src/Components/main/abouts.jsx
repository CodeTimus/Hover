import React from 'react'

const abouts = () => {
  return (
    <div>
      <>
  @@include('header.htm') @@include('blocks/navigation.htm', {"{"}"about":
  "active"{"}"}) @@include('blocks/page-title.htm',{"{"}"title":"about us"{"}"})
  {/* Our Story */}
  <section className="story">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <img
            loading="lazy"
            src="images/services/service-one.jpg"
            className="responsive"
            alt="story"
          />
        </div>
        <div className="col-lg-6">
          <div className="story-content">
            <h2>Our Story</h2>
            <h5 className="tagline">
              "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsum,
              minima. Nemo impedit fuga nostrum expedita sint dicta ullam quam
              et harum velit saepe"
            </h5>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus
              totam ducimus est vero, officiis, placeat optio. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Alias aliquam nesciunt
              fugit optio illum aut. consectetur adipisicing elit. Neque
              assumenda, est quam perferendis expedita autem?
            </p>
            <h6>Mission</h6>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nam
              nihil dolorum beatae consequatur mollitia iure?
            </p>
            <h6>Vision</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              consectetur adipisci, voluptatum dolores nostrum omnis.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
  {/* Promo Video */}
  <section className="promo-video">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="block text-center">
            <h6>About Our Hospital</h6>
            <h1>
              The World <br />
              Class Hospitality
            </h1>
            <a
              data-fancybox=""
              href="https://www.youtube.com/watch?v=_sI_Ps7JSEk&autoplay=1&rel=0&controls=0&showinfo=0"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  @@include('blocks/gallery.htm')
  {/* Contact Section */}
  <section className="appoinment-section section">
    <div className="container">
      <div className="row">
        <div className="col-lg-6">@@include('blocks/accordions.htm')</div>
        <div className="col-lg-6">@@include('blocks/contact-area.htm')</div>
      </div>
    </div>
  </section>
  {/* End Contact Section */}
  @@include('blocks/footer.htm') @@include('footer.htm')
</>

    </div>
  )
}

export default abouts
