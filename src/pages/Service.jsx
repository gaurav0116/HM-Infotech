import React from 'react'

const Service = () => {
  return (
    <section id="services" className="services section-bg" >
      <div className="container" data-aos="fade-up">
        <div className="section-title" style={{paddingTop: '50px'}}>
          <h2>Services</h2>
          <p>Check out the great services we offer</p>
        </div>

        <div className="row d-flex justify-content-center">

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100" id="appdev">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-phone"></i></div>
              <h4 className="title"><a href="#">App Development</a></h4>
              <p className="description">
                As the number of smartphone users are increasing and accessing the internet via phone, mobile applications are the best way to reach out to your target audience.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" id="webdev" data-aos="zoom-in" data-aos-delay="200">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-laptop"></i></div>
              <h4 className="title"><a href="">Web Development</a></h4>
              <p className="description">
                Your business needs websites with amazing UI, smooth navigation and landing pages which convert leads, And we make that kind of websites.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" id="cloudservices" data-aos="zoom-in" data-aos-delay="300">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-clouds"></i></div>
              <h4 className="title">
                <a href="">Cloud Services and consulting</a>
              </h4>
              <p className="description">
                To make your technical work easy, fast and affordable for your business, HM-Infotech likes to work on cloud technology and also provides consultancy of cloud computing.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" id="devops" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-hdd-stack"></i></div>
              <h4 className="title"><a href="">DevOps Services</a></h4>
              <p className="description">
                To bring development and operations teams together to complete development we’re here to set up DevOps culture for you.
              </p>
            </div>
          </div>

          <div className="col-md-6 col-lg-4 d-flex align-items-stretch" id="itconsultancy" data-aos="zoom-in" data-aos-delay="400">
            <div className="icon-box">
              <div className="icon"><i className="bi bi-person-circle"></i></div>
              <h4 className="title"><a href="">IT Consultancy</a></h4>
              <p className="description">
                Let develop an effective, productive, efficient and best technical team or products by landing us to our IT Consultancy.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service