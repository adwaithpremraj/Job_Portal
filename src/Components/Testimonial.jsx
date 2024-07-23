import React from 'react'
import download1 from '../assets/download2.png'

import './style.css'

function Testimonial() {
  return (
    <>
        <div className="container-xxl py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <h1 className="text-center mb-5">Our Clients Say!!!</h1>
                    <div className="d-flex flex-column align-items-center">
                    <div className="testimonial-item bg-light rounded p-4 mb-4 w-100" style={{ maxWidth: '500px' }}>
                        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                        <p>
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" src={download1} style={{ width: 50, height: 50 }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4 mb-4 w-100" style={{ maxWidth: '500px' }}>
                        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                        <p>
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" src={download1} style={{ width: 50, height: 50 }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4 mb-4 w-100" style={{ maxWidth: '500px' }}>
                        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                        <p>
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" src={download1} style={{ width: 50, height: 50 }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                        </div>
                    </div>
                    <div className="testimonial-item bg-light rounded p-4 mb-4 w-100" style={{ maxWidth: '500px' }}>
                        <i className="fa fa-quote-left fa-2x text-primary mb-3" />
                        <p>
                        Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam
                        </p>
                        <div className="d-flex align-items-center">
                        <img className="img-fluid flex-shrink-0 rounded" src={download1} style={{ width: 50, height: 50 }} />
                        <div className="ps-3">
                            <h5 className="mb-1">Client Name</h5>
                            <small>Profession</small>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
        </div>



    </>
  )
}

export default Testimonial