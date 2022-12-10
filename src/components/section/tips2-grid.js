import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class PropertyGrid extends Component {

	componentDidMount() {

     const $ = window.$;

     $( 'body' ).addClass( 'body-bg' );

 	}

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="blog-page-area pt-5 go-top">
			  <div className="container">
			    <div className="row justify-content-center">
			      <div className="col-12">
			                
			      </div>    
				  
				      
			      <div className="col-lg-4 col-md-6">
			        <div className="single-product-wrap style-2">
			          <div className="thumb">
			            <img src={publicUrl+"assets/img/project/15.png" }alt="img" />
			            <div className="product-wrap-details">
			              <div className="media">
			                <div className="author">
			                    
			                </div>
			               
			              </div>
			            </div> 
			          </div> 
			          <div className="product-details-inner">
					  <h4>Head Title</h4>
                    <p>short info short info short info short info  short info short info short info short info  short info... </p>
                    <Link to="/tips" className='read_more'>Read More</Link>
			          </div>
			        </div>
			      </div>

				  


				 
				  
				  
			      
			      
			      
			      
			     
			      
			      
			      
				 

			    </div>
			  </div>
			</div>

        }
}

export default PropertyGrid