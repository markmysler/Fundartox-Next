import { firestore } from "@/firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	getLocalSaves,
	saveLocal,
	deleteLocalSaves,
} from "../../app-functions/handleLocalStorage";
import SectionDatosPersonales from "./sections/section-datos-personales";
import SectionEstablecimiento from "./sections/section-establecimiento";
import SectionGeo from "./sections/section-geolocalizacion";

export default function FormularioComponent({ user }) {
	const [localData, setLocalData] = useState(getLocalSaves());

	async function handleLocalDataTransfer() {
		let localSaves = getLocalSaves();
		for (let i = 0; i < localSaves.length; i++) {
			try {
				const postDocRef = await addDoc(
					collection(firestore, "entries"),
					{
						...localSaves[i][1],
					}
				);
				await addDoc(
					collection(firestore, `users/${user.uid}/entries`),
					{
						id: postDocRef.id,
					}
				);
			} catch (error) {
				toast.error("DB no disponible, intente mas tarde");
				return;
			}
			toast.success("Datos locales cargados a DB");
			deleteLocalSaves();
			toast.success("Datos locales borrados");
			setLocalData(getLocalSaves());
		}
	}

	const handleSubmit = async (e) => {
		e.preventDefault();
		let inputList = [];
		for (let i = 0; i < e.target.length - 1; i++) {
			const element = e.target[i];
			inputList.push([element.id, element.value]);
		}
		if (!!inputList.find((item) => item[1] === "")) {
			toast.error("Responder todas las preguntas antes de enviar");
		} else {
			try {
				const postDocRef = await addDoc(
					collection(firestore, "entries"),
					inputList
				);
				await addDoc(
					collection(firestore, `users/${user.uid}/entries`),
					{
						id: postDocRef.id,
					}
				);

				toast.success("Formulario enviado a DB");
			} catch (error) {
				toast.error("Error enviando formulario, intente mas tarde");
				toast.info("Guardando informacion localmente");
				saveLocal(inputList);
				toast.info(
					"Informacion guardada localmente, intente subirla a DB mas tarde usando el boton"
				);
				setLocalData(getLocalSaves());
			}
		}
	};

	return (
		<>
			<form id="user-form" onSubmit={(e) => handleSubmit(e)}>
				<h1>Formulario</h1>
				<SectionGeo />
				<SectionEstablecimiento />
				<SectionDatosPersonales />

				<div className="botones-form">
					<button type="submit">Enviar formulario</button>
					{localData.length > 0 && (
						<button onClick={handleLocalDataTransfer}>
							Subir informacion local
						</button>
					)}
				</div>
			</form>
			<ToastContainer />
		</>
	);
}
