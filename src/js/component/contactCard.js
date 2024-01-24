import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
export const ContactCard = () => {
    const { store, actions } = useContext(Context);
    return (
        <div className="card mb-3" style={{maxWidth: "540px" }}>
            <div className="row g-0">
               
                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title"></h5>
                        <p className="card-text">gfgfdg</p>
                        <p className="card-text"><small className="text-body-secondary">fgdgfgdg</small></p>
                    </div>
                </div>
            </div>
        </div>
    );
};