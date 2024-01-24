import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { ContactCard } from "../component/contactCard";
export const Contacto = () => {
	const { store, actions } = useContext(Context);

	return (
		<div className="container">
			
		</div>

	);
};