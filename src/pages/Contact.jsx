import React from 'react'

// Map Location URL
const MapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.601404028295!2d72.52671351419609!3d23.03840307151914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e84b6e49bc3e3%3A0x2059060635cbdaca!2sVastrapur%20Lake!5e0!3m2!1sen!2sin!4v1630692521459!5m2!1sen!2sin";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="container" data-aos="fade-up">
        <div className="section-title" style={{paddingTop: '50px'}}>
          <h2>Contact Us</h2>
          <p>We'd love to talk with you. Fill the form for a free quote</p>
        </div>

        <div className="row">
          <div className="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
            <div className="info">
              <div className="address">
                <i className="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>Vastrapur lake, Ahmedabad, Gujarat.</p>
              </div>

              <div className="email">
                <i className="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>sahil@hminfotech.co.in</p>
              </div>

              <div className="phone">
                <i className="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 7990317653</p>
              </div>

              <iframe src={MapUrl}
                frameborder="0" style={{ border: "0px", width: '100%', height: "290px" }} allowfullscreen></iframe>
            </div>
          </div>

          <div className="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
            <form action="" method="" role="form" className="php-email-form">
              <div className="row">
                <div className="form-group col-md-6">
                  <label for="name">Your Name</label>
                  <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                </div>
                <div className="form-group col-md-6 mt-3 mt-md-0">
                  <label for="name">Your Email</label>
                  <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group mt-3">
                <label for="name">Subject</label>
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
              </div>
              <div className="form-group mt-3">
                <label for="name">Message</label>
                <textarea className="form-control" name="message" rows="10" required></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact