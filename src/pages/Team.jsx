import React from 'react'
import Team1 from '../img/team-1.jpg';

const Team = () => {
  return (
    <section id="team" className="team">
      <div className="container">
        <div className="section-title" data-aos="fade-up" style={{paddingTop: '50px'}}>
          <h2>Team</h2>
          <p>Our team is always here to help</p>
        </div>

        <div className="row d-flex align-items-center justify-content-center">
          <div className="col-xl-3 col-lg-3 col-md-4 align-items-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="member">
              <img src={Team1} className="img-fluid" alt="Team 1" />
              <div className="member-info">
                <div className="member-info-content">
                  <h4>Sahil Thakar</h4>
                  <span>Founder and CEO</span>
                </div>
                <div className="social">
                  <a href="https://www.linkedin.com/in/sahil-thakar-b6464b136" target="_blank" rel="noopener"><i className="bi bi-linkedin"></i></a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-9 col-lg-9 col-md-8 align-items-center" data-aos="zoom-in" data-aos-delay="100">
            <div className="member-details">
              <ul>
                <li><p>
                  Sahil has his own software firm where he does all kinds of stuff related to Tech and marketing.
                </p></li>
                <li><p>
                  this venture he built 3 startups from scratch where one of the firms was selected for Startup India by the Government of India. And a few months later the company was acquired.
                </p></li>
                <li><p>
                  Being an entrepreneur he is always looking for Challenges and Recently he has found a problem and he is trying to solve that through technology and that would be his 4th startup which is based on people's emotions.
                </p></li>
                <li><p>
                  Apart from his own venture he is an active seller of his own products at different e-commerce platforms such as Flipkart, Amazon etc. And he can proudly say that he is in the list of 100 best sellers on Amazon.
                </p></li>
                <li><p>
                  Apart from the day-to-day assignment. He also conducts online classNamees and right now he is teaching students from abroad and helping them in their project work.
                </p></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team