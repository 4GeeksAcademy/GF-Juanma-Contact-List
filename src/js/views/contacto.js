import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { ContactCard } from "../component/contactCard";
export const Contacto = (props) => {


	return (
		<div className="container">
			{store.contacto.map(contact => (
				<ContactCard key={contact.id} contact={contact} />
			))}
		</div>

	);
};