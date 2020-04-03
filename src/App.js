import React, { Component } from 'react';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import Header from './components/nav-bar/header/Header';
import Home from './components/Home/Home';
import DistrictDetails from './components/indiaDetails/districtDetails/DistrictDetails'

class App extends Component {
	render() {
		return (
			<div>
				<Router>
					<Header />
					<Route path="/" exact>
						<Home />
					</Route>
					<Route path="/moreinformation" exact component={DistrictDetails} />
				</Router>
			</div>
		);
	}
}

export default App;
