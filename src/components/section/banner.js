import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Banner extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return  <div className="banner-area banner-area-1 banner-area-bg" style={{background: 'url('+publicUrl+'assets/img/background2.jpg)'}}>
			  <div className="container">
			    <div className="banner-area-inner">
			      <div className="row justify-content-center">
			        <div className="col-lg-8">
			          <div className="banner-inner text-center">
			            
			            <div className="banner-txt">
			            <h2>Find Your Home</h2>
						<h3>Rentals | For Sale | Guest House</h3>
						</div>
			          </div>
			        </div>
			       
			              
			             
			              <div className="col-md-3">
			                <Link className="btn btn-base w-100" to="/"><i className="fa fa-search mr-1" /> Search</Link>
			              </div>
			            </div>
			       
			        </div>
			      </div>
			
			  </div>
			

        }
}

export default Banner