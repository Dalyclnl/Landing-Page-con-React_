//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import { Card } from "./component/Card";
import { Jumbotron } from "./component/Jumbotron";
import { Navbar } from "./component/Navbar";


//render your react application
ReactDOM.render(<Home />, document.querySelector("#app"));
ReactDOM.render(<Navbar />, document.querySelector("#navbar"));
ReactDOM.render(<Jumbotron />, document.querySelector("#jumbotron"));

ReactDOM.render(
	<Card
		title="Card title"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Find Out More!"
		buttonUrl="#"
		description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt."
	/>,
	document.querySelector("#card_1")
);


ReactDOM.render(
	<Card
		title="Card title"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Find Out More!"
		buttonUrl="#"
		description="Tincidunt tortor aliquam nulla facilisi cras fermentum odio eu feugiat.  Tempus imperdiet nulla malesuada. "
	/>,
	document.querySelector("#card1")
);

ReactDOM.render(
	<Card
		title="Card title"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Find Out More!"
		buttonUrl="#"
		description="Quis viverra nibh cras pulvinar mattis nunc sed blandit libero. Vestibulum lorem sed risus ultricies tristique."
	/>,
	document.querySelector("#card_2")
);

ReactDOM.render(
	<Card
		title="Card title"
		imageUrl="https://via.placeholder.com/500x325.png"
		buttonLabel="Find Out More!"
		buttonUrl="#"
		description="Justo eget magna fermentum iaculis. Vel elit scelerisque mauris pellentesque pulvinar pellentesque habitant."
	/>,
	document.querySelector("#card_3")
);