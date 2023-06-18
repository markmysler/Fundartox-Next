import { firestore } from "@/firebase/clientApp";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
	getLocalSaves,
	saveLocal,
	deleteLocalSaves,
} from "../../app-functions/handleLocalStorage";
import SectionDatosPersonales from "./sections/section-datos-personales";
import SectionEstablecimiento from "./sections/section-establecimiento";
import SectionCondicionSalud from "./sections/section-condicion-salud";
import SectionIngresoPaciente from "./sections/section-ingreso-paciente";
import style from "./form.module.css";
import addMultipleSelectOptions from "@/app-functions/addMultipleSelectOptions";
import {
	deleteIncompleteForm,
	getIncompleteForm,
	saveIncompleteForm,
} from "@/app-functions/handleIncompleteForm";
import Swal from "sweetalert2";
import SectionInicioEncuesta from "./sections/section-inicio-encuesta";
import SectionComsumoSustancias from "./sections/section-consumo-sustancias";

export default function FormularioComponent({ user }) {
	const [localData, setLocalData] = useState({});
	const [openCloseOtro, setOpenCloseOtro] = useState("closed");
	let currentValues = {};
	useEffect(() => {
		setLocalData(getLocalSaves());
		useIncompleteForm();
	}, []);

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
		const selectedOptions = addMultipleSelectOptions();
		let inputList = [];
		for (let i = 0; i < e.target.length - 1; i++) {
			const element = e.target[i];
			const Q = element.id;
			let A = element.value;
			if (Q === A && Q !== "") {
				if (element.checked) {
					A = "Checked";
					inputList.push({ Q, A });
				}
			} else if (Q !== "" && A !== "") {
				inputList.push({ Q, A });
			}
		}
		if (
			!!inputList.find((item) => item["A"] === "") &&
			inputList.find((item) => Array.isArray(item["A"]) === false)
		) {
			toast.error("Responder todas las preguntas antes de enviar");
		} else {
			if (selectedOptions.length > 1) {
				inputList[22]["A"] = selectedOptions;
			}
			try {
				const postDocRef = await addDoc(
					collection(firestore, "entries"),
					{ ...inputList }
				);
				await addDoc(
					collection(firestore, `users/${user.uid}/entries`),
					{
						id: postDocRef.id,
					}
				);

				toast.success("Formulario enviado a DB");
				setTimeout(() => {
					location.reload();
				}, 3000);
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

	function useIncompleteForm() {
		const incData = getIncompleteForm();
		if (incData !== undefined) {
			Swal.fire({
				title: "Continuar formulario guardado?",
				showDenyButton: true,
				confirmButtonText: "Si",
				denyButtonText: `Borrar`,
			}).then((result) => {
				if (result.isConfirmed) {
					for (const key in incData) {
						let campo = document.getElementById(key);
						const isRadio = document.querySelectorAll(
							'input[type="radio"]'
						);
						const radioElementList = [];
						for (const key2 in isRadio) {
							radioElementList.push(isRadio[key2].id);
						}
						const isCheckbox = document.querySelectorAll(
							'input[type="checkbox"]'
						);
						const checkboxElementList = [];
						for (const key3 in isCheckbox) {
							if (
								isCheckbox[key3].id !== "" &&
								isCheckbox[key3].id !== undefined
							) {
								checkboxElementList.push(isCheckbox[key3].id);
							}
						}
						const isMultiple =
							document.querySelector("select[multiple]");
						if (radioElementList.includes(key)) {
							campo.checked = true;
						} else if (checkboxElementList.includes(key)) {
							campo.checked = true;
						} else if (campo === isMultiple) {
							const options = document.querySelectorAll(
								"#diagnosticosPresuntivos option"
							);
							const optionElements = [];
							for (const key5 in options) {
								if (options[key5].id !== undefined) {
									optionElements.push(options[key5]);
								}
							}
							incData[key].forEach((i) => {
								const selectedOptions2 = optionElements.find(
									(item) => item.id === i
								);
								selectedOptions2.selected = true;
							});
						} else {
							try {
								campo.value = incData[key];
							} catch (error) {
								setOpenCloseOtro("open");
							}
						}
					}
					Swal.fire("Datos recuperados!", "", "success");
					deleteIncompleteForm();
				} else if (result.isDenied) {
					deleteIncompleteForm();
					Swal.fire("Formulario incompleto borrado", "", "success");
				}
			});
		}
	}

	function handleSaveIncompleteForm() {
		if (Object.keys(currentValues).length !== 0) {
			toast.info("Guardando...");
			saveIncompleteForm(currentValues);
			toast.success("Progreso guardado localmente");
		} else {
			toast.error("No es posible guardar un formulario vacio");
		}
	}

	function handleChange(e) {
		const inputID = e.target.id;
		const inputValue = e.target.value;
		const isMultiple = document.querySelector("select[multiple]");
		if (inputID !== isMultiple.id) {
			currentValues[inputID] = inputValue;
		} else {
			const selected = document.querySelectorAll(
				"#diagnosticosPresuntivos option:checked"
			);
			const ids = Array.from(selected).map((el) => el.id);
			currentValues[inputID] = ids;
		}
	}

	return (
		<>
			<form
				id="user-form"
				onSubmit={(e) => handleSubmit(e)}
				className={style.userForm}
			>
				<h1 className={style.h1}>Encuesta de Relevamiento</h1>
				<SectionInicioEncuesta handleChange={handleChange} />
				<SectionEstablecimiento handleChange={handleChange} />
				<SectionDatosPersonales handleChange={handleChange} />
				<SectionCondicionSalud handleChange={handleChange} />
				<SectionIngresoPaciente
					handleChange={handleChange}
					openCloseOtro={openCloseOtro}
				/>
				<SectionComsumoSustancias handleChange={handleChange} />

				<div className={style.botonesForm}>
					<button type="submit" className={style.btnEnviar}>
						Enviar formulario
					</button>
					<button
						onClick={handleSaveIncompleteForm}
						className={style.btnGuardar}
						type="button"
					>
						Guardar progreso
					</button>
					{localData.length > 0 && (
						<button onClick={() => handleLocalDataTransfer(e)}>
							Subir informacion local
						</button>
					)}
				</div>
			</form>
			<ToastContainer />
		</>
	);
}
