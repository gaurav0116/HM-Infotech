import React from 'react'
import AboutImg from '../img/about-img.svg';

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container" style={{paddingTop: '170px'}}>
        <div className="row justify-content-between">
          <div className="
        col-lg-5
        d-flex
        align-items-center
        justify-content-center
        about-img
      ">
            <img src={AboutImg} className="img-fluid" alt="About Img" data-aos="zoom-in" />
          </div>
          <div className="col-lg-6 pt-9 pt-lg-0">
            <h3 data-aos="fade-up">About Us</h3>
            <p data-aos="fade-up" data-aos-delay="100" className="pt-5">
              HM-Infotech is an innovative software services-oriented company based in Ahmedabad. The main vision of HM-Infotech is to help businesses and enterprises to develop their inhouse technology to grow their business. With the help of innovation, Agility and
              technology HM-Infotech provides 360 degree technical to businesses. The HM-Infotech team has vast experience in the IT industry and we worked with global clients.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About