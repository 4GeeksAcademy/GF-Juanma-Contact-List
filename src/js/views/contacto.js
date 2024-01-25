import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { ContactCard } from "../component/contactCard";
export const Contacto = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	return (
		<div className="container">
			<div className="contacts">
				<ul>
					{store.contactos.map((contacto,index) =>{
						return(<li className="row contact" key={index}>
							<ContactCard contacto = {contacto}/>
						</li>)
					})}
				</ul>
			</div>
		</div>

	);
};