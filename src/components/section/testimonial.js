import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Testimonial extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="testimonial-area pd-top-118 pd-bottom-120 bg-overlay" style={{background: 'url('+publicUrl+'assets/img/client.jpg)'}}>
			  <div className="bg-overlay-wrap">
			    <div className="section-title style-white text-center">
			      
			      <h2>What Clients Say</h2>
			    
			    </div>
			    <div className="container">
			      <div className="row justify-content-center">
			        <div className="col-lg-10">
			          <div className="testimonial-slider-1 owl-carousel">
			            <div className="item">
			              <div className="single-testimonial-inner style-two text-center">
			                <div className="thumb main-thumb">
			                  <img src={publicUrl+"assets/img/testimonial/1.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h6 className="name">Marta Shimeles</h6>
			                  <p>“I was looking around for 2 bedroom apartment  when i find Beton. it such an amazing website not just there online service but, also their agent. There agent i meet with was  such a great person and knowledgeable and he helped me to find an amazing house. Thank You" </p>
			                  <div className="rating-inner">
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
								<i className="fas fa-star" />
			                    {/* <i className="far fa-star"  aria-hidden="true"/> */}
			                  </div>
			                </div>
			              </div>
			            </div>
			            <div className="item">
			              <div className="single-testimonial-inner style-two text-center">
			                <div className="thumb main-thumb">
			                  <img src={publicUrl+"assets/img/testimonial/4.png"} alt="img" />
			                </div>
			                <div className="details">
			                  <h6 className="name">Bekele Yaschelal</h6>
			                  <p>“our website is easy to use and i had many options of houses to choice from. keep up the good work." </p>
			                  <div className="rating-inner">
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="fas fa-star" />
			                    <i className="far fa-star" aria-hidden="true" />
			                  </div>
			                </div>
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default Testimonial