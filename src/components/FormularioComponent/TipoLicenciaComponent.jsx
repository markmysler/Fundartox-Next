import style from "./form.module.css";

export default function TipoLicenciaComponent({ handleChange }) {
	return (
		<div>
			<label
				htmlFor="tipoLicenciaConducir"
				className={(style.labelSelect, style.label)}
			>
				¿Qué tipo de vehículo lo habilita a conducir esta licencia?
			</label>
			<div className={style.divSelect}>
				<select
					className={style.selectLargo}
					id="tipoLicenciaConducir"
					name="tipoLicenciaConducir"
					required
					onChange={(e) => handleChange(e)}
				>
					<option value="">Seleccione</option>
					<option value="ciclomotores">
						Ciclomotores, Motocicletas y Triciclos motorizados
					</option>
					<option value="automovilesCamionetas">
						Automóviles y camionetas con acoplados de hasta 750 kg
						de peso a casa rodante
					</option>
					<option value="camionesClaseB">
						Camiones sin acoplado y los comprendidos en la clase B
					</option>
					<option value="servicios-B-C">
						Los destinados al servicio de transporte de pasajeros,
						emergencias, seguridad y los de clase B o C, según caso
					</option>
					<option value="automoresDiscapacitados">
						Automotores especialmente adaptados para discapacitados
					</option>
					<option value="agricolas">
						Tractores agrícolas y maquinaria especial agrícola
					</option>
				</select>
			</div>
		</div>
	);
}
