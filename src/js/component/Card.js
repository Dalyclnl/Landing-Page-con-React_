import PropType from "prop-types";
import React from "react";

export const Card = (props) => {
  return (
    <div className="container fluid">
      <div className="row row-cols-1 row-cols-md-4 justify-content">
        <div className="col mb-4">
          <div className="card h-100">
              <img src="http://placehold.it/500x325.jpg" className="card-img-top" alt={props.alt}  />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at vestibulum nibh, sit amet posuere purus. 
              </p>           
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Go somewhere    </a>   
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
             <img src="http://placehold.it/500x325.jpg" class="card-img-top" alt={props.alt} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc scelerisque non lacus sed fermentum. Quisque semper elementum nulla a luctus.
              </p>          
            </div>
            <div class="card-footer">
            <a href="#" class="btn btn-primary">Go somewhere    </a>   
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
             <img src="http://placehold.it/500x325.jpg" class="card-img-top" alt={props.alt} />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at vestibulum nibh, sit amet posuere purus
              </p>                         
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Go somewhere    </a> 
            </div>
          </div>
        </div>
        <div class="col mb-4">
          <div class="card h-100">
             <img src="http://placehold.it/500x325.jpg" className="card-img-top" alt={props.alt} />      
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p className="card-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at vestibulum nibh, sit amet posuere purus. Proin eget volutpat magna, sit amet faucibus ipsum. 
              </p>             
            </div>
            <div class="card-footer">
              <a href="#" class="btn btn-primary">Go somewhere    </a>   
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Card.propTypes = {
//   src: PropType.props.src,
//   alt: PropType.props.alt,

// };