import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";


import { Context } from "../store/appContext";

import "../../styles/demo.css";
export const ContactCard = ({ contacto }) => {
    const { store, actions } = useContext(Context);
    return (
        <>
            <div className="col-md-3 photo">
                <img
                    src="https://cdn.pixabay.com/photo/2022/06/05/07/04/person-7243410_1280.png"
                    className=" rounded-circle "
                    alt=""
                    srcSet=""
                />
            </div>
            <div className="col-md-7 col-10">
                <div className="name"><strong>{contacto.full_name}</strong>
                </div>
                <div className="address">
                    <i className="fas fa-map-marker-alt" />
                    {contacto.address}
                </div>
                <div className="phone">
                    <i className="fas fa-phone"></i>
                    {contacto.phone}
                </div>
                <div className="email">
                    <i className="fas fa-envelope" />
                    {contacto.email}
                </div>

            </div>
            <div className="col-md-3 iconos">
                <button onClick={() => {actions.borrarContacto(contacto.id)}} ><i className="fas fa-trash-alt"  /></button>
                <i className="far fa-edit" />
            </div>
        </>
    );
};