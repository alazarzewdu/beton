import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Agent extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="agent-area text-center pd-top-118 pd-bottom-90">
          <div className="container">
            <div className="section-title text-center">
              <h6>Meet Our Team</h6>
              <h2>Our Best Team</h2>
            </div>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/agent/1.png"} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Member 1</h4>
                    <h6>CEO </h6>
                    <ul className="social-area style-2">
                      <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    </ul>
                  </div>        
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/agent/2.png"} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Member 2</h4>
                    <h6>Co Founder</h6>
                    <ul className="social-area style-2">
                      <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    </ul>
                  </div>        
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/agent/3.png"} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Member 2 </h4>
                    <h6>Developer</h6>
                    <ul className="social-area style-2">
                      <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
                      <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
                    </ul>
                  </div>        
                </div>
              </div>
            </div>
          </div>
        </div>


        }
}

export default Agent