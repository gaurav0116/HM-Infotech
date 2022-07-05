import React from 'react'

const Achievement = () => {
  return (
    <section id="achievement" >
      <section id="counts" className="counts section-bg" >
        <div className="section-title" style={{paddingTop:'50px'}}>
          <h2>Achievement</h2>
          <h3>
            <p>A glimpse of our achievements</p>
          </h3>
        </div>

        <div className="container mt-5" data-aos="fade-up" style={{paddingBottom: '140px'}}>
          <div className="row d-flex justify-content-center">
            <div className="col-lg-3 col-md-6">
              <div className="count-box">
                <i className="bi bi-emoji-smile"></i>
                <span data-purecounter-start="1" data-purecounter-end="15" data-purecounter-duration="4" className="purecounter">15</span>
                <span></span>
                <p>Clients</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-md-0">
              <div className="count-box">
                <i className="bi bi-journal-richtext"></i>
                <span data-purecounter-start="1" data-purecounter-end="30" data-purecounter-duration="4" className="purecounter">30</span>
                <p>Projects</p>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 mt-5 mt-lg-0">
              <div className="count-box">
                <i className="bi bi-headset"></i>
                <span data-purecounter-start="0" data-purecounter-end="10" data-purecounter-duration="4" className="purecounter">10</span>
                <p>Employees</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  )
}

export default Achievement