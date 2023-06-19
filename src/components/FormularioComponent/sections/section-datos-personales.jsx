import { useState } from "react";
import TipoLicenciaComponent from "../components/TipoLicenciaComponent";
import style from "../form.module.css";

export default function SectionDatosPersonales({ handleChange }) {
	const [tipoLicencia, setTipoLicencia] = useState(<TipoLicenciaComponent />);
	const tieneLicencia = (e) => {
		if (e.target.value === "si") {
			setTipoLicencia(
				<TipoLicenciaComponent handleChange={handleChange} />
			);
		} else {
			setTipoLicencia(<></>);
		}
	};
	return (
		<>
			<section id="datosPersonales">
				<h2 className={style.h2}>Datos personales</h2>
				{/* <h3 className={style.h3}>Fecha de nacimiento</h3> */}
				<div className={style.fechaNacimiento}>
					<input
						className={style.inputDate}
						type="date"
						id="fechaDeNacimiento"
						required
						onChange={(e) => handleChange(e)}
					/>
					<label
						htmlFor="fechaDeNacimiento"
						className={(style.labelText, style.label)}
					>
						Fecha de nacimiento
					</label>
				</div>
				<div className={style.divSeparacion}>
					<label
						htmlFor="genero"
						className={(style.labelSelect, style.label)}
					>
						Género
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="genero"
							name="genero"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="masculino">Masculino</option>
							<option value="femenino">Femenino</option>
							<option value="o">O</option>
							<option value="x">X</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="situacionConyugal"
						className={(style.labelSelect, style.label)}
					>
						Situación Conyugal
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="situacionConyugal"
							name="situacionConyugal"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="conPareja">Con pareja</option>
							<option value="sinPareja">Sin pareja</option>
							<option value="noResponde">No responde</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="nivelEducativo"
						className={(style.labelSelect, style.label)}
					>
						Nivel Educativo
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="nivelEducativo"
							name="nivelEducativo"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="sinInstruccion">
								Sin instrucción (SI)
							</option>
							<option value="primariaCompleta">
								Primaria Incompleta (PI)
							</option>
							<option value="primariaIncompleta">
								Primaria Completa (PC)
							</option>
							<option value="secundariaCompleta">
								Secundaria Incompleta (SI)
							</option>
							<option value="secundariaIncompleta">
								Secundaria Completa (SC)
							</option>
							<option value="tuIncompleta">
								Terciaria o Universidad Incompleta (TUI)
							</option>
							<option value="tuCompleta">
								Terciaria o Universidad Completa (TUC)
							</option>
							<option value="nosabeNocontesta">
								No sabe o no contesta (NSNC)
							</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="situacionLaboral"
						className={(style.labelSelect, style.label)}
					>
						Situación Laboral
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="situacionLaboral"
							name="situacionLaboral"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="tiempoCompleto">
								Trabaja a tiempo completo (más de 35 horas)
							</option>
							<option value="tiempoParcial">
								Trabaja a tiempo parcial (menos de 35 horas)
							</option>
							<option value="trabajaEsporadicamente">
								Trabaja esporádicamente
							</option>
							<option value="desempleado">Desempleado</option>
							<option value="dedicadoAlEstudio">
								Dedicado al estudio
							</option>
							<option value="notrabajaNobusca">
								No trabaja y no busca trabajo
							</option>
							<option value="trabajadorFamiliar">
								Trabajador familiar
							</option>
							<option value="jubiladoPensionadoRentista">
								Jubilado / pensionado / rentista
							</option>
							<option value="incapacitadoParaTrabajar">
								Incapacitado para trabajar
							</option>
							<option value="nosabeNocontesta">
								No sabe o no contesta (NSNC)
							</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="ocupacion"
						className={(style.labelSelect, style.label)}
					>
						Ocupación
					</label>
					<div className={style.divSelect}>
						<select
							className={style.selectLargo}
							id="ocupacion"
							name="ocupacion"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="comoPropio">
								Para su propio negocio / empresa / actividad
							</option>
							<option value="comoEmpleado">
								Como obrero o empleado para un patrón / empresa
								/ institución
							</option>
							<option value="comoServicioDomestico">
								Como servicio doméstico
							</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="licenciaConducir"
						className={(style.labelSelect, style.label)}
					>
						¿Tiene licencia de conducir en estado vigente?
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="licenciaConducir"
							name="licenciaConducir"
							required
							onChange={(e) => (
								handleChange(e), tieneLicencia(e)
							)}
						>
							<option value="">Seleccione</option>
							<option value="si">Si</option>
							<option value="no">No</option>
							<option value="nosabeNocontesta">
								No sabe o no contesta
							</option>
						</select>
					</div>
				</div>
				{tipoLicencia}
				<h3 className={style.h3}>Dirección del siniestro</h3>
				<div>
					<div className={style.divLargo}>
						<label
							htmlFor="calleSiniestro"
							className={(style.labelText, style.label)}
						>
							Calle
						</label>
						<input
							className={style.inputLargo}
							type="text"
							id="calleSiniestro"
							required
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className={style.divLargo}>
						<label
							htmlFor="altura"
							className={(style.labelText, style.label)}
						>
							Altura o Numeración
						</label>
						<input
							className={[style.inputLargo]}
							type="text"
							id="alturaONumeracionSiniestro"
							required
							onChange={(e) => handleChange(e)}
						/>
					</div>
					<div className={style.dosDivsJuntos}>
						<div>
							<label
								htmlFor="ciudadSiniestro"
								className={(style.labelText, style.label)}
							>
								Ciudad
							</label>
							<input
								className={style.inputCorto}
								type="text"
								id="ciudadSiniestro"
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>
						<div>
							<label
								htmlFor="estadoProvinciaSiniestro"
								className={(style.labelText, style.label)}
							>
								Estado / Provincia
							</label>
							<input
								className={style.inputCorto}
								type="text"
								id="estadoProvinciaSiniestro"
								required
								onChange={(e) => handleChange(e)}
							/>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
