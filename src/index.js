import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, HashRouter, Route, Switch } from "react-router-dom";
import HomeV1 from './components/home-v1';
import ProptertyDetails from './components/property-details';
import rental from './components/rental';
import guest from './components/guest';
import sale from './components/sale';
import Propterty from './components/property';
import About from './components/about';
import Team from './components/team';
import Contact from './components/contact';
import Tips from './components/tips';
import Tips2 from './components/tips-second';






class Root extends Component {
    render() {
        return(
                <HashRouter basename="/">
	                <div>
	                <Switch>
                        <Route exact path="/" component={HomeV1} />
                        <Route  path="/sale" component={sale} />
                        <Route  path="/guest" component={guest} />
                        <Route  path="/rental" component={rental} />
                        <Route  path="/property" component={Propterty} />
                        <Route  path="/about" component={About} />
                        <Route  path="/team" component={Team} />
                        <Route  path="/test" component={ProptertyDetails} />
                        <Route  path="/contact" component={Contact} />
                        <Route  path="/tips" component={Tips} />
                        <Route  path="/tips2" component={Tips2} />
                        
	                </Switch>
	                </div>
                </HashRouter>
        )
    }
}

export default Root;

ReactDOM.render(<Root />, document.getElementById('beton'));
