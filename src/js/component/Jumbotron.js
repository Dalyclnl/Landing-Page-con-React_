import React from "react";

export const Jumbotron = () => {
        return (
        <div className="container jb ">         
                <div className="Jumbotron">
                <h1> A warm Welcome</h1>
                <p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
                <p className="lead">
                <a className="btn btn-primary" href="#" role="button">Call to action</a>
                </p>
                </div>
        </div> 
        );
};

export default Jumbotron;
