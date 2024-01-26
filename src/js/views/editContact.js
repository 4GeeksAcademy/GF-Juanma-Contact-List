import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { ContactCard } from "../component/contactCard";


export const EditContact = (props) =>{
    const { store, actions } = useContext(Context);
	const params = useParams();
return (
    <div className="container">
       
       <ContactCard />
    </div>
);
};

EditContact.PropTypes = {

}