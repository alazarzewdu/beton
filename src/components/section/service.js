import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Service extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="service-area">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/1.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Rentals</a></h4>
			            <p>Explore large number of houses and apartments for rent.</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/2.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">For Sale</a></h4>
			            <p>Explore House and land for sale all around Addis Ababa</p>
			          </div>
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-10">
			        <div className="single-service-wrap mb-0">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/service/3.png"} alt="icon" />
			          </div>
			          <div className="single-service-details">
			            <h4><a href="property-details.html">Guest House</a></h4>
			            <p>Fully furnished house and ready to use houses around Addis Ababa</p>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>


        }
}

export default Service