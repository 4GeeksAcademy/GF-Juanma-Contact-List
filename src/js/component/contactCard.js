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
                <div className="name">{contacto.full_name}</div>
                <div className="address">
                 
                    {contacto.address}
                </div>
                <div className="phone">
                    
                    {contacto.phone}
                </div>
                <div className="email">
                    
                    {contacto.email}
                </div>
            </div>
        </>
    );
};