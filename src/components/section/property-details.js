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
			            <h3>Agusta, Torhayloch</h3>
			            <p><img src={publicUrl+"assets/img/icon/location2.png"} alt="img" /> Addis, Ababa </p>
			            <ul>
			              <li>3 Bedroom</li>
			              <li>Bathroom</li>
			              <li>1026 sqft</li>
			            </ul>
			          </div>
			          <div className="col-lg-5 text-lg-right">
			            <h4>$ 80,650.00</h4>
			            
			            <ul>
			             
			              <li><img src={publicUrl+"assets/img/icon/3.png"} alt="img" />Negotiable</li>
			            </ul>
			          </div>
			        </div>
			      </div>







				
				  <Carousel>
                <div>
                    <img src="data:image/png;base64,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" />
                   
                </div>
                <div>
                    <img src="assets/2.jpeg" />
                
                </div>
                <div>
                    <img src="assets/3.jpeg" />
                    
                </div>
            </Carousel>


				  









			      
			    </div>


				
			    <div className="row go-top">
			      <div className="col-lg-8">
			        <div className="single-property-details-inner">
			          <h4>About the House</h4>
			          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
			          <p>Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, consectetuLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
			          <div className="single-property-grid">
			            <h4>Poperty Details</h4>
			            <div className="row">
			              <div className="col-md-4">
			                <ul>
			                  <li>Status: For Sale</li>
			                  <li>Bedrooms: 12</li>
			                  <li>Bathroom: 2</li>
			                  <li>House Type: Apartment</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li>Total Sqft: 380</li>
			                  <li>Covered Area: 290</li>
			                  <li>Floor: 3</li>
			                  <li>Year Built: 2019</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                 
			                  <li>All Rooms: 12</li>
			                  <li>House ID: S053</li>
			                  <li>Type: Private House</li>
			                </ul>
			              </div>
			            </div>
			          </div>
			          
			              


					  <div className="single-property-grid">
			            <h4>Amenities</h4>
			            <div className="row">
			              <div className="col-md-4">
			                <ul>
			                  <li><i className="fa fa-check" />Air Conditionar</li>
			                  <li><i className="fa fa-check" />Fencing</li>
			                  <li><i className="fa fa-check" />Internet</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li><i className="fa fa-check" />Wardrobes</li>
			                  <li><i className="fa fa-check" />School</li>
			                  <li><i className="fa fa-check" />Park</li>
			                </ul>
			              </div>
			              <div className="col-md-4">
			                <ul>
			                  <li><i className="fa fa-check" />Dishwasher</li>
			                  <li><i className="fa fa-check" />Floor Covering</li>
			                  <li><i className="fa fa-check" />Internet</li>
			                </ul>
			              </div>
			            </div>
			          </div>

			          
			        
			          <div className="single-property-grid">
			            <h4>Estate Location</h4>
			            <div className="property-map">
			              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
			            </div>
			          </div>
			         
			          
			             
			                  
			           
			            
			              
			                  
			           
			              
			                  
			          
			          
			        </div>
			      </div>
			      <div className="col-lg-4">
			        <aside className="sidebar-area">
			          <div className="widget widget-author text-center">
			            <h4 className="widget-title">Information </h4>
			            <div className="thumb">
			             
			            </div> 
			            <div className="details">
			             
			              <p>For more information or to visit house, Use the chat button at the bottom or call/text us by information's below</p>
						  <p>Phone: 0905404444  0906404444</p>
						  <p>Telegram:</p>
						  <p>Email:
betonproperties@gmail.com</p>
			              <ul>
			                <li><a href="#"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-linkedin-in" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
			                <li><a href="#"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
			              </ul>
			            </div>        
			          </div>
			          
			          
			       
			          
			        </aside>
			      </div>
			    </div>
			  </div>
			</div>

        }
}

export default PropertyDetails