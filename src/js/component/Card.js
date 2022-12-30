
import PropType from "prop-types";
import React from "react";

       
export const Card = (props) => {
	return (
        <div class="card-deck">
         <div className="card text-top">
        <img className="card-img-top" src={props.card_imageUrl} alt="Card image cap"></img>
        <div className="card-body ">
            <h5 className="card-title">{props.card_title}</h5>
            <p className="card-text">{props.card_descriptext} </p>
        </div>
        <div className="card-footer ">
            <a href={props.btn_Url} className="btn btn-primary p-2">{props.btn_Label}</a>
            </div>
        </div>
    </div>

	);
};
Card.propTypes = {
    card_imageUrl: PropType.string,
	card_title: PropType.string,
	card_descriptext: PropType.string,
	btn_Url: PropType.string,
	btn_Label: PropType.string,
};


