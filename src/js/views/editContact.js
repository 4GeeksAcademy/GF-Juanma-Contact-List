import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import "../../styles/demo.css";
import { ContactCard } from "../component/contactCard";


export const EditContact = (props) =>{
    const { store, actions } = useContext(Context);
    const navigate = useNavigate();
	const params = useParams();
    const { theid } = useParams();
    const handleSubmit = (event) =>{
		event.preventDefault();
		function volverAHome(){
			navigate("/contacto");
		}
        actions.editarContacto(theid, volverAHome);
	}
return (
    <div className="container">
       <div className="container">
			<h1 className="text-center">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
					<input type="text" name="full_name" className="form-control" placeholder="Full Name" id="exampleInputEmail1" aria-describedby="emailHelp" defaultValue={store.contactos[params.theid].full_name} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Email</label>
					<input type="email" name="email"className="form-control" placeholder="Email" id="exampleInputPassword1" defaultValue={store.contactos[params.theid].email} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
					<input type="text" name="phone"className="form-control" placeholder="Phone" id="exampleInputPassword1"defaultValue={store.contactos[params.theid].phone}/>
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" name="address"className="form-control" placeholder="Address" id="exampleInputPassword1"defaultValue={store.contactos[params.theid].address}/>
				</div>
				<button type="submit"  className="btn btn-primary">Save</button>
			</form>
      
    </div>
    </div>
)
}

EditContact.propTypes = {

}