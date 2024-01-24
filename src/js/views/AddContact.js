import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
export const AddContact = () => {
	const { store, actions } = useContext(Context);
	const [fullname, setFullname] = useState();
	const [email, setEmail] = useState();
	const [phone, setPhone] = useState();
	const [adress, setAdress] = useState();
	//usestate por cada input con onchage
	return (
		<div className="container">
			<h1 className="text-center">Add a new contact</h1>
			<form>
				<div className="mb-3">
					<label htmlFor="exampleInputEmail1" className="form-label">Full Name</label>
					<input type="text" className="form-control" placeholder="Full Name" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setFullname(e.target.value)} value={fullname} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Email</label>
					<input type="email" className="form-control" placeholder="Email" id="exampleInputPassword1" onChange={(e) => setEmail(e.target.value)} value={email} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Phone</label>
					<input type="text" className="form-control" placeholder="Phone" id="exampleInputPassword1" onChange={(e) => setPhone(e.target.value)} value={phone} />
				</div>
				<div className="mb-3">
					<label htmlFor="exampleInputPassword1" className="form-label">Address</label>
					<input type="text" className="form-control" placeholder="Address" id="exampleInputPassword1" onChange={(e) => setAdress(e.target.value)} value={adress} />
				</div>
				<button type="button" onClick={() => actions.añadircontacto(fullname,email,phone,adress)} className="btn btn-primary">Submit</button>
			</form>
		</div>
	);
};