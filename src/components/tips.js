import React from 'react';
import Navbar from './global/navbar';
import PageHeader from './global/page-header';
import PropertyGrid from './section/sale-grid';
import Tips from './section/tips-grid';
import Footer from './global/footer';
import Search from './section/search';
import Agent  from './section/agent';

const PropertGridPage = () => {
    return <div>
        <Navbar />
        <PageHeader headertitle="Tips"  />
        <Tips />
        <Footer />
    </div>
}

export default PropertGridPage

