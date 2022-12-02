import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';
import Button from 'react-bootstrap/Button';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


class PropertyDetails extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="property-page-area pd-top-120 pd-bottom-90 ">
			  <div className="container">
			    <div className="property-details-top pd-bottom-70">
			      <div className="property-details-top-inner">
			        <div className="row">
			          <div className="col-lg-7">
			            <h2>8 must-dos for all tenants when moving to a rental property</h2>
			            <p>Team Beton</p>
                        <p>March4, 2022</p>
			           
			          </div>
			         
			        </div>
			      </div>

				
				 
                <div>
                    <img src="https://static.wixstatic.com/media/d36806_d9d5d51e1020438796e4e3eb9f354d2d~mv2.jpg/v1/fill/w_1280,h_372,al_c,q_85,enc_auto/d36806_d9d5d51e1020438796e4e3eb9f354d2d~mv2.jpg" />
                   
                </div>

			    </div>
			    <div className="row go-top">
			      <div className="col-lg-8">
			        <div className="single-property-details-inner">

			          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
			         
                     

                     <h4> 1. Research the neighborhood before the move</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 2.      Read the lease’s terms carefully</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 3.      Inspect the property carefully</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 4.      Set up automatic bill payments to your landlord</h4>
                     <img src="https://static.wixstatic.com/media/d36806_35407c0e2ffb4502b64daa2678b6d787~mv2.jpg/v1/fill/w_1080,h_742,al_c,q_85,enc_auto/d36806_35407c0e2ffb4502b64daa2678b6d787~mv2.jpg"></img>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 5.      Keep up with property maintenance</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 6.      Do a deep clean of the property</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 7.      Talk to the landlord about rules regarding customizations</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     <h4> 8.      Try to have a good relationship with the landlord</h4>
                     <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>

                     
      
			          
			        </div>
			      </div>
			      
			          
			          
			       
			          
			      
			     
			    </div>
			  </div>
			</div>

        }
}

export default PropertyDetails