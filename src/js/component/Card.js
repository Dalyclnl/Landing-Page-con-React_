
import React from "react";
import ReactDOM from "react-dom";
import PropType from "prop-types";


const Card = (props) => {
	return (
        <div className="container">
            <div className="card" style="width: 18rem;">
            <img src={props.imageUrl} className="card-img-top" ></img>
            </div>
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href={props.btnUrl} className="btn btn-primary">{props.btnLabel}</a>
            </div>
        </div>
	);
};

Card.propTypes = {
    btnUrl: PropType.string,
	btnLabel: PropType.string,
	title: PropType.string,
	imgUrl: PropType.string,

};





export default Card