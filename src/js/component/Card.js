
import React from "react";


export const Card = () => {
	return (
        <div className="container">
            <div className="card" >
            <img src= "https://via.placeholder.com/500x325.png" className="card-img-top" ></img>
            </div>
            <div className="card-body">
                <h5 className="card-title"></h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href='#' className="btn btn-primary">Find out more!</a>
            </div>
        </div>
	);
};
