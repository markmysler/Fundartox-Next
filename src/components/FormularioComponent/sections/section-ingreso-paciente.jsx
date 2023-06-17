import style from "../form.module.css";

export default function SectionIngresoPaciente({ handleChange }) {
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
							type="text"
							id="glasgow"
							placeholder="Por ej., 23"
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
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="desconocido">Desconocido</option>
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
					<p className={style.p}>
						Para seleccionar más de un diagnóstico, aprete la tecla{" "}
						<span className={style.negrita}>CTRL</span>
					</p>
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
				<h3 className={style.h3}>Gravedad de la lesión</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="gravedadLesion"
							id="gravedadLesionLeve"
							value="gravedadLesionLeve"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="gravedadLesionLeve">Leve</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="gravedadLesion"
							id="gravedadLesionModerada"
							value="gravedadLesionModerada"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="gravedadLesionModerada">Moderada</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="gravedadLesion"
							id="gravedadLesionGrave"
							value="gravedadLesionGrave"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="gravedadLesion">Grave</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="gravedadLesion"
							id="gravedadLesionNSNC"
							value="gravedadLesionNSNC"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="gravedadLesion">NSNC</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Naturaleza de la lesión (sólo para traumatismo - politrauma
					- heridas)
				</h3>
				<div className={style.divMultipleCheckboxLargo}>
					<div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="heridaExcoriacion"
								value="heridaExcoriacion"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="heridaExcoriacion"
							>
								Herida / Excoriación
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="esguinceTorceduraTraumaTendc"
								value="esguinceTorceduraTraumaTendc"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="esguinceTorceduraTraumaTendc"
							>
								Esguince / Torcedura / Trauma Tendón
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="traumaIntracraneano"
								value="traumaIntracraneano"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="traumaIntracraneano"
							>
								Trauma intracraneano
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="efectoCuerpoExtraño"
								value="efectoCuerpoExtraño"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="efectoCuerpoExtraño"
							>
								Efecto de cuerpo extraño
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="politraumatismo"
								value="politraumatismo"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="politraumatismo"
							>
								Politraumatismo
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="otro"
								value="otro"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="otro"
							>
								Otro
							</label>
						</div>
					</div>
					<div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="traumaHematoma"
								value="traumaHematoma"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="traumaHematoma"
							>
								Trauma / Hematoma
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="fractura"
								value="fractura"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="fractura"
							>
								Fractura
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="lesionMedulaEspinal"
								value="lesionMedulaEspinal"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="lesionMedulaEspinal"
							>
								Lesión médula espinal
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="intoxicacionEnvenenamiento"
								value="intoxicacionEnvenenamiento"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="intoxicacionEnvenenamiento"
							>
								Intoxicación / Envenenamiento
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="naturalezaLesion"
								id="quemaduraCorrosion"
								value="quemaduraCorrosion"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="quemaduraCorrosion"
							>
								Quemadura / Corrosión
							</label>
						</div>
					</div>
				</div>
				<div>
					<label
						htmlFor="modoTransporteLesionado"
						className={(style.labelSelect, style.label)}
					>
						Modo de transporte del lesionado
					</label>
					<div className={style.divSelect}>
						<select
							className={style.selectLargo}
							id="modoTransporteLesionado"
							name="modoTransporteLesionado"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="peatonV1V9">Peatón V01 a V09</option>
							<option value="ciclistaV10V19">
								Ciclista V10 a V19
							</option>
							<option value="motociclistaV20V29">
								Motociclista V20 a V29
							</option>
							<option value="ocupanteAutomovilV40V49">
								Ocupante de automóvil V40 a V49
							</option>
							<option value="ocupanteCamionetaFurgonetaV50V59">
								Ocupante de camioneta o furgoneta V50 a V59
							</option>
							<option value="ocupanteVehiculoTransportePesadoV60V69">
								Ocupante de vehículo de transporte pesado V60 a
								V69
							</option>
							<option value="ocupanteAutobusV70V79">
								Ocupante de autobús V70 a V79
							</option>
							<option value="pasajeroTren">
								Pasajero de Tren
							</option>
							<option value="traccionAnimal">
								Tracción animal
							</option>
							<option value="otro">Otro</option>
							<option value="NSNC">NS / NC</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="contraColisionPersonaLesionada"
						className={(style.labelSelect, style.label)}
					>
						Contra qué colisionó la persona lesionada
					</label>
					<div className={style.divSelect}>
						<select
							className={style.selectLargo}
							id="contraColisionPersonaLesionada"
							name="contraColisionPersonaLesionada"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="peatonV1V9">Peatón V01 a V09</option>
							<option value="animal">Animal</option>
							<option value="ciclistaV10V19">
								Ciclista V10 a V19
							</option>
							<option value="motociclistaV20V29">
								Motociclista V20 a V29
							</option>
							<option value="ocupanteAutomovilV40V49">
								Ocupante de automóvil V40 a V49
							</option>
							<option value="ocupanteCamionetaFurgonetaV50V59">
								Ocupante de camioneta o furgoneta V50 a V59
							</option>
							<option value="ocupanteVehiculoTransportePesadoV60V69">
								Ocupante de vehículo de transporte pesado V60 a
								V69
							</option>
							<option value="ocupanteAutobusV70V79">
								Ocupante de autobús V70 a V79
							</option>
							<option value="pasajeroTren">
								Pasajero de Tren
							</option>
							<option value="traccionAnimal">
								Tracción animal
							</option>
							<option value="otro">Otro</option>
							<option value="NSNC">NS / NC</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="condicionLesionado"
						className={(style.labelSelect, style.label)}
					>
						Condición del lesionado
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="condicionLesionado"
							name="condicionLesionado"
							required
							onChange={(e) => handleChange(e)}
						>
							<option value="">Seleccione</option>
							<option value="peaton">Peatón</option>
							<option value="pasajero">Pasajero</option>
							<option value="conductor">Conductor</option>
							<option value="acompañante">Acompañante</option>
							<option value="nsNc">NS / NC</option>
						</select>
					</div>
				</div>
				<h3 className={style.h3}>
					¿Cómo fue el siniestro vial en el que participó?
				</h3>
				<div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroColision"
							value="comoFueSiniestroColision"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroColision">
							Colisión (contra otro vehículo en movimiento)
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroCaidaVehiculo"
							value="comoFueSiniestroCaidaVehiculo"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroCaidaVehiculo">
							Caída de vehículo
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroChoque"
							value="comoFueSiniestroChoque"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroChoque">
							Choque (contra un objeto fijo)
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroAtropelloPeaton"
							value="comoFueSiniestroAtropelloPeaton"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroAtropelloPeaton">
							Atropello a peatón
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroAtropelloAnimal"
							value="comoFueSiniestroAtropelloAnimal"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroAtropelloAnimal">
							Atropello a animal
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroDespiste"
							value="comoFueSiniestroDespiste"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroDespiste">
							Despiste
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroVuelco"
							value="comoFueSiniestroVuelco"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroVuelco">Vuelco</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="comoFueSiniestro"
							id="comoFueSiniestroOtro"
							value="comoFueSiniestroOtro"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label htmlFor="comoFueSiniestroOtro">
							Otro (especificar)
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Elementos de seguridad</h3>
				<div className={style.divMultipleCheckbox}>
					<div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="cinturonSeguridad"
								value="cinturonSeguridad"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="cinturonSeguridad"
							>
								Cinturón de seguridad
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="chalecoReflectante"
								value="chalecoReflectante"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="chalecoReflectante"
							>
								Chaleco reflectante
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="otro"
								value="otro"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="otro"
							>
								Otro
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="nosabeNocontesta"
								value="nosabeNocontesta"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="nosabeNocontesta"
							>
								No sabe / No contesta
							</label>
						</div>
					</div>
					<div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="cascoMotocicleta"
								value="cascoMotocicleta"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="cascoMotocicleta"
							>
								Casco de motocicleta
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="cascoBicicleta"
								value="cascoBicicleta"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="cascoBicicleta"
							>
								Casco de bicicleta
							</label>
						</div>
						<div className={style.divCheckbox}>
							<input
								className={style.inputCheckbox}
								type="checkbox"
								name="elementosSeguridad"
								id="noAplica"
								value="noAplica"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.labelCheckbox}
								htmlFor="noAplica"
							>
								No aplica
							</label>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
