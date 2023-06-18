import { useEffect, useState } from "react";
import style from "../form.module.css";
import OtroComponent from "../OtroComponent";
import SiniestroSiComponent from "../SiniestroSiComponent";

export default function SectionIngresoPaciente({
	handleChange,
	openCloseOtro,
}) {
	const [isSinE, setIsSinE] = useState(
		<SiniestroSiComponent
			handleChange={handleChange}
			openCloseOtro={openCloseOtro}
		/>
	);
	const isSiniestro = (e) => {
		if (e.target.value !== "otro" && e.target.value !== "seleccione") {
			setIsSinE(
				<SiniestroSiComponent
					handleChange={handleChange}
					openCloseOtro={openCloseOtro}
				/>
			);
		} else {
			setIsSinE(<></>);
		}
	};

	function isTouchEnabled() {
		try {
			document.createEvent("TouchEvent");
			return true;
		} catch (e) {
			return false;
		}
	}

	return (
		<>
			<section id="ingresoPacienteGuardia">
				<h2 className={style.h2}>Ingreso del Paciente a la Guardia</h2>
				<div>
					<label
						htmlFor="estadoPaciente"
						className={(style.labelSelect, style.label)}
					>
						Estado en que llegó el paciente a la guardia
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="estadoPaciente"
							name="estadoPaciente"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="conciente">Conciente</option>
							<option value="inconciente">Inconciente</option>
							<option value="confuso">Confuso</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="glasgow"
						className={(style.labelSelect, style.label)}
					>
						Glasgow
					</label>
					<div className={style.divSelect}>
						<input
							className={style.inputGlasgow}
							type="number"
							min={1}
							max={15}
							id="glasgow"
							placeholder="1 - 15"
							required
							onChange={(e) => handleChange(e)}
						/>
					</div>
				</div>
				<div>
					<label
						htmlFor="motivoIngreso"
						className={(style.labelSelect, style.label)}
					>
						Motivo de ingreso
					</label>
					<div className={style.divSelect}>
						<select
							className={style.selectLargo}
							id="motivoIngreso"
							name="motivoIngreso"
							required
							onChange={(e) => (handleChange(e), isSiniestro(e))}
						>
							<option value="seleccione">Seleccione</option>
							<option value="otro" id="otroMotivo">
								Otro
							</option>
							<option value="siniestroTransito">
								Siniestro de tránsito
							</option>
							<option value="siniestroTransitoItinere">
								Siniestro de tránsito in itinere
							</option>
							<option value="siniestroTransitoTrabajo">
								Siniestro de tránsito en ocasión de trabajo
							</option>
						</select>
					</div>
				</div>
				<div>
					<h3 htmlFor="diagnosticosPresuntivos" className={style.h3}>
						Diagnósticos Presuntivos
					</h3>
					{!!!isTouchEnabled() ? (
						<p className={style.p}>
							Para seleccionar más de un diagnóstico, aprete la
							tecla <span className={style.negrita}>CTRL</span>
						</p>
					) : (
						<></>
					)}

					<div className={style.divSelectMultiple}>
						<select
							multiple
							name="diagnosticosPresuntivos"
							id="diagnosticosPresuntivos"
							className={(style.selectScroll, style.select)}
							onChange={(e) => handleChange(e)}
						>
							<option id="CiertasEnfInfecciosasParasitarias">
								Ciertas enf. infecciosas y parasitarias
							</option>
							<option id="Tumores-(neoplasias)">
								Tumores (neoplasias)
							</option>
							<option id="EnfSangreOrganosHematopoyeticos">
								Enf. de la sangre y de los órganos
								hematopoyeticos
							</option>
							<option id="EnfEndocrinasNutricionalesMetabolicas">
								Enf. endocrinas, nutricionales y metabólicas
							</option>
							<option id="TrastMentalesComportamiento">
								Trast. mentales y del comportamiento
							</option>
							<option id="CiertasEnfInfecciosasParasitarias">
								Ciertas enf. infecciosas y parasitarias
							</option>
							<option id="Tumores-(neoplasias)">
								Tumores (neoplasias)
							</option>
							<option id="EnfSangreOrganosHematopoyeticos">
								Enf. de la sangre y de los órganos
								hematopoyeticos
							</option>
							<option id="EnfEndocrinasNutricionalesMetabolicas">
								Enf. endocrinas, nutricionales y metabólicas
							</option>
							<option id="TrastMentalesComportamiento">
								Trast. mentales y del comportamiento
							</option>
							<option id="EnfSistemaNervioso">
								Enf. del sistema nervioso
							</option>
							<option id="EnfOjoAnexos">
								Enf. del ojo y sus anexos
							</option>
							<option id="EnfOidoApofisisMastoides">
								Enf. del oido y de la apófisis mastoides
							</option>
							<option id="EnfSistemaCirculatorio">
								Enf. del sistema circulatorio
							</option>
							<option id="EnfSistemaRespiratorio">
								Enf. del sistema respiratorio
							</option>
							<option id="EnfSistemaDigestivo">
								Enf. del sistema digestivo
							</option>
							<option id="EnfPielTejidoSubcutaneo">
								Enf. de la piel y el tejido subcutáneo
							</option>
							<option id="EnfSistemaOsteomuscularTejidoConjuntivo">
								Enf. del sistema osteomuscular y del tejido
								conjuntivo
							</option>
							<option id="EnfSistemaGenitourinario">
								Enf. del sistema genitourinario
							</option>
							<option id="EmbarazoPartoPuerperio">
								Embarazo, parto y puerperio
							</option>
							<option id="TxCabeza">Tx. de la cabeza</option>
							<option id="TxCuello">Tx. del cuello</option>
							<option id="TxTorax">Tx. del tórax</option>
							<option id="TxHombroBrazo">
								Tx. del hombro y del brazo
							</option>
							<option id="TxAntebrazoCodo">
								Tx. del antebrazo y del codo
							</option>
							<option id="TxCaderaMuslo">
								Tx. de la cadera y del muslo
							</option>
							<option id="TxRodillaPierna">
								Tx. de la rodilla y de la pierna
							</option>
							<option id="TxTobilloPie">
								Tx. del tobillo y del pie
							</option>
							<option id="FractColumnaVertebralNivelNoEsp">
								Fract. de la columna vertebral, nivel no esp.
							</option>
							<option id="Otros-TxColumnaVertebralNivelNoEsp">
								Otros Tx. de la columna vertebral y del tronco,
								nivel no esp.
							</option>
							<option id="AccidentesTransp">
								Accidentes de transp.
							</option>
							<option id="PeatonLesionadoAccidenteTransp">
								Peatón lesionado en accidente de transp.
							</option>
							<option id="CiclistaLesionadoAccidenteTransp">
								Ciclista lesionado en accidente de transp.
							</option>
							<option id="MotociclistaLesionadoAccidenteTransp">
								Motociclista lesionado en accidente de transp.
							</option>
							<option id="OcupanteAutomovilLesionadoAccidenteTransp">
								Ocupante de automóvil lesionado en accidente de
								transp.
							</option>
							<option id="OcupanteAutomovilLesionadoAccidenteTransp">
								Ocupante de camioneta o furgoneta lesionado en
								accidente de transp.
							</option>
							<option id="OcupanteVehiculoTransportePesadoLesionadoAccidenteTransp">
								Ocupante de vehículo de transporte pesado
								lesionado en accidente de transp.
							</option>
							<option id="OcupanteAutobusLesionadoAccidenteTransp">
								Ocupante de autobús lesionado en accidente de
								transp.
							</option>
						</select>
					</div>
				</div>
				{isSinE}
			</section>
		</>
	);
}
