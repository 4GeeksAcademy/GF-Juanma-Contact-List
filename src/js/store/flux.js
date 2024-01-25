const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}

			],
			contactos: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},
			obtenerContactos: () => {
				fetch("https://playground.4geeks.com/apis/fake/contact/agenda/juanma")
					.then(response => {
						if (!response.ok) {
							throw Error('no se ha podido obtener los contactos')
						} return response.json()
					})
					.then(data => {
						setStore({ contactos: data })
						
					})
					.catch(error => {
						console.log(error);
					});
			},
			añadircontacto: (fullname,email,phone,adress) => {
				const store = getStore();
				let nuevoContacto = {
					fullname: fullname,
					email: email,
					phone: phone,
					adress: adress
					
				}
				let nuevaListaContactos = [...store.contactos, nuevoContacto]
				setStore({contactos: nuevaListaContactos});
			},
			handleSubmit: (event) =>{
				event.preventDefault();
				const config = {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						'Content-Type': 'application/json'
					}
				}
				console.log(data)
				fetch("https://playground.4geeks.com/apis/fake/contact/", config)
					.then((response) => response.text())
					.catch(error => console.log('error', error))
					.then(response => {
						actions.obtenerContactos();
						navigate("/contacto");
					});
			},
		
		}
	};
};

export default getState;
