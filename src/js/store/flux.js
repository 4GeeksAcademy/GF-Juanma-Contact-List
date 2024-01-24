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
			contacto: [],
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
						setStore({ contacto: data })
						
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
				let nuevaListaContactos = [...store.contacto, nuevoContacto]
				setStore({contacto: nuevaListaContactos});
			}
		}
	};
};

export default getState;
