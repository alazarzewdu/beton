import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer_v1 extends Component {

	componentDidMount() {
		let publicUrl = process.env.PUBLIC_URL + '/'
		const minscript = document.createElement("script");
		minscript.async = true;
		minscript.src = publicUrl + "assets/js/main.js";

		document.body.appendChild(minscript);
	}

	render() {

		let publicUrl = process.env.PUBLIC_URL + '/'

		return (
			<footer className="footer-area">
				<div className="footer-top">
					<div className="container">
						<div className="row">
							<div className="col-md-4">
								<a href="index.html"><img className='foot-img' src={publicUrl + "assets/img/beton-text.png"} alt="img" /></a>
							</div>
							<div className="col-md-8 text-md-right mt-3 mt-md-0">
								<ul className="social-area">
									<li><a href="https://www.facebook.com/solverwp/"><i className="fab fa-facebook-f" aria-hidden="true" /></a></li>
									<li><a href="https://www.twitter.com/solverwp/"><i className="fab fa-twitter" aria-hidden="true" /></a></li>
									<li><a href="https://www.instagram.com/solverwp/"><i className="fab fa-instagram" aria-hidden="true" /></a></li>
									<li><a href="https://www.skype.com/solverwp/"><i className="fab fa-linkedin" aria-hidden="true" /></a></li>
									<li><a href="https://www.pinterest.com/solverwp/"><i className="fab fa-telegram" aria-hidden="true" /></a></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<div className="footer-middle bg-black">
					<div className="container">
						<div className="row">
							<div className="col-lg-4 col-md-6">
								<div className="widget widget_about">
									
									<h6 className='foot-beton'>Beton Properties</h6> <br></br>
									
									<div className="details">
										
										<p>Beton is committed to ensure a better user experience on the platform. we are continuously working to improve your experience on all our platforms, we welcome any feedback. if you wish to report an issue or any other comment</p>
										<p><i className="fas fa-map-marker-alt" /> Summit feyelbet, Tshion BLDG 6th floor Addis Ababa, Ethiopia </p> 
										<p><i className="fas fa-map-marker-alt" /> Wosen, the BLDG with Hibret Bank 4th floor Addis Ababa, Ethiopia </p> 
										<p><i className="fas fa-phone-volume" /> +(251)905404444,  +(251)906404444</p>
										<p><i className="fas fa-envelope" /> betonproperties@gmail.com</p>
										<iframe className='map' src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d198059.49240377638!2d-84.68048827338674!3d39.13652252762691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sbd!4v1615660592820!5m2!1sen!2sbd" />
										
									</div>
								</div>
							</div>

							
							<div className="single-property-grid2">
			    
			           
			          </div>
						</div>
					</div>
				</div>
				
				<div className="footer-bottom bg-black">
				
					<div className="container">
						<div className="row">
							<div className="col-md-7 align-self-center">
								<p>©2022, Developed by Alazar Zewdu. All Rights Reserved</p>
							</div>
							
						</div>
					</div>
				</div>
			</footer>

		)
	}
}


export default Footer_v1