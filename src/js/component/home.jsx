import React from "react";
import ReactDOM  from "react-dom";
import { Card } from "./Card.js";
import { Navbar } from "./Navbar.js";
import { Jumbotron } from "./Jumbotron.js";
import { Footer } from "./Footer.js";


//include images into your bundle

//create your first component

const Home = () => {
	return (
		<>
			<div className="text-center">
				<Navbar/>
				<Jumbotron/>
				<Card/>
				<Footer/>
			</div>	
		</>
	);
};

export default Home;
