import React from 'react'
import { Link } from 'react-router-dom';
import HeroImg from '../img/hero-img.svg';

const Home = () => {

  // GoTo Top fuction
  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <section id="hero" className="d-flex align-items-center">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-6 order-2 order-lg-1 d-flex flex-column justify-content-center">
            <h1>Develop Innovation</h1>
            <h2>We are team of talented developers</h2>
            <div><Link to="/contact" onClick={goToTop} className="btn-get-started scrollto">Get Started</Link></div>
          </div>
          <div className="col-lg-6 order-1 order-lg-2 hero-img">
            <img
              src={HeroImg}
              className="img-fluid animated"
              alt="HeroImg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Home