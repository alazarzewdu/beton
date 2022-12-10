import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import parse from 'html-react-parser';

class Agent extends Component {

    render() {

        let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="agent-area text-center pd-top-118 pd-bottom-90">

          <div className="container">
            <div className="section-title text-center">
              <h2>Tips</h2>
              <h6>Hand picked tips from the team Beton</h6>
            </div>

         {/*  <div className='test'>
            <div className="row justify-content-center">
              <div className="col-lg-4 col-md-6">
                <div className="single-agent-wrap">
                  <div className="thumb">
                    <img src={publicUrl+"assets/img/agent/1.png"} alt="img" />
                  </div> 
                  <div className="details">
                    <h4>Head Title</h4>
                    <p>short info short info short info short info  short info short info short info short info  short info... </p>
                    <Link to="/tips" className='read_more'>Read More</Link>
                  </div>        
                </div>
              </div>
              </div> */}

             
                <div className='tips-t'>
                  <div className='tips-img'>
                  <img src={publicUrl+"assets/img/project/tips.webp" }alt="img" />
                    <h4 className='tips-title'>Tips</h4>
                  </div>
                  <div className='tips-det'>
                    <p>All things you need to know about buying and renting houses from team Beton</p>
                    <Link className="btn btn-baset w-10" to="/tips">Read More</Link>
                    </div>
                </div>
              
              

            
              
               
              
            </div>
          </div>
    


        }
}

export default Agent