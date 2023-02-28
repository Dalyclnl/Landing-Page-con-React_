import PropType from "prop-types";
import React from "react";

export const Card = (props) => {
  return (
        <div className="card-container">
           <div className="card-deck">
  <Card
    card_imageUrl="url_de_la_imagen_1.jpg"
    card_title="Título de la tarjeta 1"
    card_descriptext="Descripción de la tarjeta 1"
    btn_Url="url_del_boton_1"
    btn_Label="Etiqueta del botón 1"
  />
  <Card
    card_imageUrl="url_de_la_imagen_2.jpg"
    card_title="Título de la tarjeta 2"
    card_descriptext="Descripción de la tarjeta 2"
    btn_Url="url_del_boton_2"
    btn_Label="Etiqueta del botón 2"
  />
  <Card
    card_imageUrl="url_de_la_imagen_3.jpg"
    card_title="Título de la tarjeta 3"
    card_descriptext="Descripción de la tarjeta 3"
    btn_Url="url_del_boton_3"
    btn_Label="Etiqueta del botón 3"
  />
  <Card
    card_imageUrl="url_de_la_imagen_4.jpg"
    card_title="Título de la tarjeta 4"
    card_descriptext="Descripción de la tarjeta 4"
    btn_Url="url_del_boton_4"
    btn_Label="Etiqueta del botón 4"
  />
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
