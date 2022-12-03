import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-1 banner-area-bg" style={{background: 'url('+publicUrl+'assets/img/family.webp)'}}>
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
			            
			            <div className="banner-txt">
			            <h2>Find Your Home</h2>
						</div>
			          </div>
			        </div>
			       
			              
			             
			        
			                
							<div className='b1'>
							<Link to="/rental">
     							<button className='btn1' type="button">Rentals</button>
 							</Link>
							 </div>

							 <div className='b2'>
							 <Link to="/sale">
     							<button className='btn2' type="button">For Sale</button>
 							</Link>
							</div>

							<div className='b3'>
							 <Link to="/guest">
     							<button className='btn3' type="button">Guest House</button>
 							</Link>
							 </div>
							
			              </div>

						  
			            </div>
			       
			        </div>
			      </div>
			
			
			

        }
}

export default Banner