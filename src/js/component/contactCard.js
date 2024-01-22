import React, { Component } from "react";
import { Contacto } from "../views/contacto";
export const ContactCard = (props) => {
    return (
        <li className="list-group-item">
            <div className="row w-100">
                <div className="col-12 col-sm-6 col-md-3 px-0">
                   
                </div>
                <div className="col-12 col-sm-6 col-md-9 text-center text-sm-left">
                    <div className="float-right">
                  
                    </div>
                    <button className="btn">
                        <i className="fas fa-trash-alt" />
                    </button>
                    <label className="name lead">{contacto.fullname}</label>
                    <br />
                    <i className="fas fa-map-marker-alt text-muted mr-3" />
                    <span className="text-muted">{contacto.address}</span>
                    <br />
                    <span className="fa fa-phone fa-fw text-muted mr-3" />
                    <span className="text-muted small">{contacto.phone}</span>
                    <br />
                    <span className="fa fa-envelope fa-fw text-muted mr-3" />
                    <span className="text-muted small text-truncate">{contacto.email}</span>
                </div>
            </div>
        </li>
    );
};