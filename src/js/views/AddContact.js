import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router";
import { Context } from "../store/appContext";

import "../../styles/demo.css";
export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
	const [data, setData] = useState({agenda_slug: "juanma"});
	const handleChange = (event) =>{
		setData({...data, [event.target.name]: event.target.value})
	}
	const handleSubmit = (event) =>{
		event.preventDefault();
		function volverAHome(){
			navigate("/contacto");
		}
       actions.añadirContacto(data, volverAHome);
	}

	
	
	return (
		<div className="container">
			<h1 className="text-center">Add a new contact</h1>
			<form onSubmit={handleSubmit}>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
					<input type="text" name="full_name" className="form-control" placeholder="Full Name" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => handleChange(e)}  />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Email</label>
					<input type="email" name="email"className="form-control" placeholder="Email" id="exampleInputPassword1" onChange={(e) => handleChange(e)}  />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
					<input type="text" name="phone"className="form-control" placeholder="Phone" id="exampleInputPassword1" onChange={(e) => handleChange(e)}  />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" name="address"className="form-control" placeholder="Address" id="exampleInputPassword1" onChange={(e) => handleChange(e)}  />
				</div>
				<button type="submit"  className="btn btn-primary">Save</button>
			</form>
			<Link to="/contacto">or get back to contacts</Link>
		</div>
	);
};