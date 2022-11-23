import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class About extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="about-area bg-gray pd-top-120 pd-bottom-120">
              <div className="container">
                <div className="single-about-inner about-line-right bg-white">
                  <div className="row no-gutter">
                    <div className="col-lg-4 order-lg-12">
                      <div className="thumb" style={{background: 'url('+publicUrl+'assets/img/other/2.png)'}} />
                    </div>
                    <div className="col-lg-8 order-lg-1">
                      <div className="details">
                        <div className="section-title mb-4">
                          <h6>We offer the best Properties</h6>
                          <h2>The experts in the Business.</h2>
                          <p>Are you looking for a carrier as a real-estate agent or are you currently working as a real-estate agent and are looking for ways to increase your income then  Beton is the right choice for you.</p>
                        </div>
                        <div className="row">
                          <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Large database of properties for your clients.</li>
                              <li>Large reach for your property listings.</li>
                              <li>Flexible working hours </li>
                              <li>Training programs from the very best in the industry</li>
                            </ul>
                          </div>
                          {/* <div className="col-md-6">
                            <ul className="single-list-inner">
                              <li>Tempor incididunt Amet</li>
                              <li>Dolore magna quis nisi</li>
                              <li>Lorem ipsum dolor manga</li>
                            </ul>
                          </div> */}
                        </div>  
                        {/* <a className="btn btn-base" href="#">SEE MORE</a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

        }
}

export default About