import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import Testimonial from './section/testimonial';
import MoreInfo from './section/more-info';
import Footer from './global/footer';

const AboutPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Team"  />
        <Testimonial />
        <MoreInfo />
        <Footer />
    </div>
}

export default AboutPage

