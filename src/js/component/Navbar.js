
import React from "react";

const Navbar = () => {
	return (
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark static-top">
            <div class="container">
            <a class="navbar-brand" > Star Bootsrtrap</a>
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="#">Home</a>
                    </li>
                    <li class="nav-item">    
                        <a class="nav-link active" aria-current="page" href="#">Abaut</a>
                     </li>
                     <li class="nav-item">  
                        <a class="nav-link active" aria-current="page" href="#">Services</a>
                    </li>
                        <a class="nav-link active" aria-current="page" href="#">Services</a>
                    <li class="nav-item"> 
                        <a class="nav-link active" aria-current="page" href="#">Contact</a>
                    </li>  
                </ul>
            </div>
        </nav>
	);
};

export default Navbar

