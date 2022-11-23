
import React from "react";

export const Card = (props) => {
	return (
        <div className="container">
            <div className="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..."></img>
            </div>
            <div class="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
	);
};

