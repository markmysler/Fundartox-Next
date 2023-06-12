import style from "../form.module.css";

export default function SectionIngresoPaciente() {
	return (
		<>
			<section id="ingreso-paciente-guardia">
				<h2 className={style.h2}>Ingreso del Paciente a la Guardia</h2>
				<div>
					<label
						htmlFor="estado-paciente"
						className={[style.labelSelect, style.label]}
					>
						Estado en que llegó el paciente a la guardia
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="estado-paciente"
							name="estado-paciente"
							required
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
						className={[style.labelSelect, style.label]}
					>
						Glasgow
					</label>
					<div className={style.divSelect}>
						<input
							className={style.inputText}
							type="text"
							id="glasgow"
							placeholder="Por ej., 23"
							required
						/>
					</div>
				</div>
				<h3 className={style.h3}>Diagnósticos Presuntivos</h3>
				<div>
					<label
						htmlFor="codigos-cie-10"
						className={[style.labelSelect, style.label]}
					>
						Códigos CIE 10
					</label>
					<div className={style.divSelectMultiple}>
						<select
							multiple
							name="codigos-cie-10"
							id="codigos-cie-10"
							className={[style.selectScroll, style.select]}
						>
							<option value="Ciertas-enf-infecciosas-parasitarias">
								Ciertas enf. infecciosas y parasitarias
							</option>
							<option value="Tumores-(neoplasias)">
								Tumores (neoplasias)
							</option>
							<option value="Enf-sangre-organos-hematopoyeticos">
								Enf. de la sangre y de los órganos
								hematopoyeticos
							</option>
							<option value="Enf-endocrinas-nutricionales-metabolicas">
								Enf. endocrinas, nutricionales y metabólicas
							</option>
							<option value="Trast-mentales-comportamiento">
								Trast. mentales y del comportamiento
							</option>
							<option value="Ciertas-enf-infecciosas-parasitarias">
								Ciertas enf. infecciosas y parasitarias
							</option>
							<option value="Tumores-(neoplasias)">
								Tumores (neoplasias)
							</option>
							<option value="Enf-sangre-organos-hematopoyeticos">
								Enf. de la sangre y de los órganos
								hematopoyeticos
							</option>
							<option value="Enf-endocrinas-nutricionales-metabolicas">
								Enf. endocrinas, nutricionales y metabólicas
							</option>
							<option value="Trast-mentales-comportamiento">
								Trast. mentales y del comportamiento
							</option>
							<option value="Enf-sistema-nervioso">
								Enf. del sistema nervioso
							</option>
							<option value="Enf-ojo-anexos">
								Enf. del ojo y sus anexos
							</option>
							<option value="Enf-oido-apofisis-mastoides">
								Enf. del oido y de la apófisis mastoides
							</option>
							<option value="Enf-sistema-circulatorio">
								Enf. del sistema circulatorio
							</option>
							<option value="Enf-sistema-respiratorio">
								Enf. del sistema respiratorio
							</option>
							<option value="Enf-sistema-digestivo">
								Enf. del sistema digestivo
							</option>
							<option value="Enf-piel-tejido-subcutaneo">
								Enf. de la piel y el tejido subcutáneo
							</option>
							<option value="Enf-sistema-osteomuscular-tejido-conjuntivo">
								Enf. del sistema osteomuscular y del tejido
								conjuntivo
							</option>
							<option value="Enf-sistema-genitourinario">
								Enf. del sistema genitourinario
							</option>
							<option value="Embarazo-parto-puerperio">
								Embarazo, parto y puerperio
							</option>
							<option value="Tx-cabeza">Tx. de la cabeza</option>
							<option value="Tx-cuello">Tx. del cuello</option>
							<option value="Tx-torax">Tx. del tórax</option>
							<option value="Tx-hombro-brazo">
								Tx. del hombro y del brazo
							</option>
							<option value="Tx-antebrazo-codo">
								Tx. del antebrazo y del codo
							</option>
							<option value="Tx-cadera-muslo">
								Tx. de la cadera y del muslo
							</option>
							<option value="Tx-rodilla-pierna">
								Tx. de la rodilla y de la pierna
							</option>
							<option value="Tx-tobillo-pie">
								Tx. del tobillo y del pie
							</option>
							<option value="Fract-columna-vertebral-nivel-no-esp">
								Fract. de la columna vertebral, nivel no esp.
							</option>
							<option value="Otros-Tx-columna-vertebral-nivel-no-esp">
								Otros Tx. de la columna vertebral y del tronco,
								nivel no esp.
							</option>
							<option value="Accidentes-transp">
								Accidentes de transp.
							</option>
							<option value="Peaton-lesionado-accidente-transp">
								Peatón lesionado en accidente de transp.
							</option>
							<option value="Ciclista-lesionado-accidente-transp">
								Ciclista lesionado en accidente de transp.
							</option>
							<option value="Motociclista-lesionado-accidente-transp">
								Motociclista lesionado en accidente de transp.
							</option>
							<option value="Ocupante-automovil-lesionado-accidente-transp">
								Ocupante de automóvil lesionado en accidente de
								transp.
							</option>
							<option value="Ocupante-automovil-lesionado-accidente-transp">
								Ocupante de camioneta o furgoneta lesionado en
								accidente de transp.
							</option>
							<option value="Ocupante-vehiculo-transporte-pesado-lesionado-accidente-transp">
								Ocupante de vehículo de transporte pesado
								lesionado en accidente de transp.
							</option>
							<option value="Ocupante-autobus-lesionado-accidente-transp">
								Ocupante de autobús lesionado en accidente de
								transp.
							</option>
						</select>
					</div>
				</div>
			</section>
		</>
	);
}
