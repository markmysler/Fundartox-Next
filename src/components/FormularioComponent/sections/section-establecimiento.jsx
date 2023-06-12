export default function SectionEstablecimiento() {
	return (
		<>
			<section id="establecimiento-sanitario">
				<h2>Establecimiento sanitario</h2>
				<label htmlFor="nombre-hospital">Nombre</label>
				<select id="nombre-hospital" name="nombre-hospital" required>
					<option value="">Seleccione</option>
					<option value="hospital-santojanni">
						Hospital Santojanni
					</option>
					<option value="hospital-fernandez">
						Hospital Fernández
					</option>
				</select>
				<label htmlFor="fecha-hora">Fecha y Horario de Atención</label>
				<input
					type="datetime-local"
					id="fecha-hora"
					name="fecha-hora"
				/>
			</section>
		</>
	);
}
