import style from "../form.module.css";

export default function SectionEstablecimiento() {
	return (
		<>
			<section
				id="establecimiento-sanitario"
				className={style.establecimientoSanitario}
			>
				<h2 className={style.h2}>Establecimiento sanitario</h2>
				<label className={style.label} htmlFor="nombre-hospital">
					Nombre
				</label>
				<select
					className={style.select}
					id="nombre-hospital"
					name="nombre-hospital"
					required
				>
					<option value="">Seleccione</option>
					<option value="hospital-santojanni">
						Hospital Santojanni
					</option>
					<option value="hospital-fernandez">
						Hospital Fernández
					</option>
				</select>
				<label className={style.label} htmlFor="fecha-hora">
					Fecha y Horario de Atención
				</label>
				<input
					className={style.inputDatetime}
					type="datetime-local"
					id="fecha-hora"
					name="fecha-hora"
					required
				/>
			</section>
		</>
	);
}
