import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class MoreInfo extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-area pd-top-118">
			  <div className="container">
			    <div className="section-title text-center">
			      <h6>More About Us</h6>
			      <h2>More Info</h2>
			    </div>
			    <div className="row justify-content-center">
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/1.png"} alt="img" />
			          </div> 
			          <div className="product-details-inner">
			            <h4>Office Location</h4>
			            <p>Some Details</p>
			          </div>        
			        </div>
			      </div>
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/5.png"} alt="img" />
			          </div> 
			          <div className="product-details-inner">
			            <h4>Office Location</h4>
			            <p>Some Details</p>
			          </div>        
			        </div>
			      </div>
			     
			    </div>
			  </div>
			</div>
        }
}

export default MoreInfo