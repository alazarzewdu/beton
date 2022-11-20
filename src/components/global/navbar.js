import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {

    render() {
        let publicUrl = process.env.PUBLIC_URL+'/'
        let imgattr = 'logo'
        let anchor = '#'
        return (
        	<div className="navbar-area navbar-area-1">
			  {/* navbar top start */}
			  <div className="navbar-top">
			    <div className="container">
			      <div className="row">
			        <div className="col-lg-8 text-lg-left text-center">
			          <ul>
			            <li><p><img src={publicUrl+"assets/img/icon/location.png"} alt="img" /> 
Summite feyelbet, Tshion BLDG 6th floor </p></li>
			            <li><p><img src={publicUrl+"assets/img/icon/phone.png"} alt="img" /> O905404444  0906404444</p></li>
			            <li><p><img src={publicUrl+"assets/img/icon/envelope.png"} alt="img" />  betonproperties@gmail.com</p></li>
			          </ul>
			        </div>
			        <div className="col-lg-4">
			          <ul className="topbar-right text-lg-right text-center">
			            <li className="social-area">
			              <a href="https://www.facebook.com/Betonproperties/"><i className="fab fa-facebook-f" aria-hidden="true" /></a>
			              <a href="https://www.tiktok.com/@beton.et"><i className="fab fa-tiktok" aria-hidden="true" /></a>
			              <a href="https://www.instagram.com/betoneth/"><i className="fab fa-instagram" aria-hidden="true" /></a>
			              <a href="https://t.me/Betoneth"><i className="fab fa-telegram" aria-hidden="true" /></a>
			              <a href="https://www.linkedin.com/in/beton-real-estate-marketplace-982775253/"><i className="fab fa-linkedin" aria-hidden="true" /></a>
			            </li>
			          </ul>
			        </div>
			      </div>
			    </div>
			  </div>
			  <nav className="navbar navbar-expand-lg">
			    <div className="container nav-container">
			      <div className="responsive-mobile-menu">
			        <button className="menu toggle-btn d-block d-lg-none" data-target="#dkt_main_menu" aria-expanded="false" aria-label="Toggle navigation">
			          <span className="icon-left" />
			          <span className="icon-right" />
			        </button>
			      </div>
			      <div className="logo">
			        <Link to="/"><img class="beton-logo" src={publicUrl+"assets/img/beton-text.png"} alt="img" /></Link>
			      </div>
			      <div className="nav-right-part nav-right-part-mobile">
			        <ul>
			          <li><a className="search" href="#"><i className="fa fa-search" /></a></li>
			          <li><Link className="btn btn-base" to="/add-property"><span className="btn-icon"><i className="fa fa-plus" /></span> <span className="btn-text">SUBMIT PROPERTY</span></Link></li>
			        </ul>
			      </div>
			      <div className="collapse navbar-collapse" id="dkt_main_menu">
			        <ul className="navbar-nav menu-open text-center">
			          <li className=" current-menu-item">
			            <Link to="/">Home</Link>
			          </li>
			          <li className="menu-item-has-children current-menu-item">
			            <Link to="/#">Property</Link>
			            <ul className="sub-menu">
			              <li><Link to="/rental">Rentals</Link></li>
			              <li><Link to="/sale">For Sale</Link></li>
			              <li><Link to="/guest">Guest House</Link></li>
			            </ul>
			          </li>
			          <li className=" current-menu-item">
					  <Link to="/about">About</Link>
			            <ul className="sub-menu">
			             
			            </ul>
			          </li>
			          
			          <li><Link to="/contact">Contact</Link></li>
			        </ul>
			      </div>
			      
			    </div>
			  </nav>
			</div>

        )
    }
}


export default Navbar