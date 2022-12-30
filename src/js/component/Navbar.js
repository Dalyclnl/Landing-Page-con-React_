
import React from "react";

export const Navbar = () => {
	return (
        <nav className ="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div className ="container">
            <a class="navbar-brand" > Star Bootsrtrap</a>
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">    
                        <a className="nav-link active" aria-current="page" href="#">Abaut</a>
                     </li>
                     <li className="nav-item">  
                        <a className="nav-link active" aria-current="page" href="#">Services</a>
                    </li>
                    <li className="nav-item"> 
                        <a className="nav-link active" aria-current="page" href="#">Contact</a>
                    </li>  
                </ul>
            </div>
        </nav>
	);
};

