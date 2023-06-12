export default function SectionDatosPersonales() {
	return (
		<>
			<section id="datos-personales">
				<h2>Datos personales</h2>
				<h3>Nombre</h3>
				<div className="dos-divs-juntos">
					<div>
						<label htmlFor="nombre" className="label-text">
							Nombre
						</label>
						<input type="text" id="nombre" />
					</div>
					<div>
						<label htmlFor="apellido" className="label-text">
							Apellido
						</label>
						<input type="text" id="apellido" />
					</div>
				</div>
				<h3>Fecha de nacimiento</h3>
				<div className="fecha-nacimiento">
					<label htmlFor="fecha-de-nacimiento" className="label-text">
						Fecha
					</label>
					<input type="date" id="fecha-de-nacimiento" />
				</div>
				<h3>Dirección particular</h3>
				<div className="div-largo">
					<label htmlFor="direccion-linea-1" className="label-text">
						Dirección de la calle
					</label>
					<input type="text" id="direccion-linea-1" />
				</div>
				<div className="div-largo">
					<label htmlFor="direccion-linea-2" className="label-text">
						Dirección de la calle Linea 2
					</label>
					<input type="text" id="direccion-linea-2" />
				</div>
				<div className="dos-divs-juntos">
					<div>
						<label htmlFor="ciudad" className="label-text">
							Ciudad
						</label>
						<input type="text" id="ciudad" />
					</div>
					<div>
						<label
							htmlFor="estado-provincia"
							className="label-text"
						>
							Estado / Provincia
						</label>
						<input type="text" id="estado-provincia" />
					</div>
				</div>
				<div className="div-largo">
					<label htmlFor="codigo-postal" className="label-text">
						Código Postal
					</label>
					<input type="text" id="codigo-postal" />
				</div>
				<h3>Sexo</h3>
				<select id="sexo" name="sexo" required>
					<option value="">Seleccione</option>
					<option value="masculino">Masculino</option>
					<option value="femenino">Femenino</option>
					<option value="o">O</option>
					<option value="x">X</option>
				</select>
				<h3>Situación Conyugal</h3>
				<select
					id="situacion-conyugal"
					name="situacion-conyugal"
					required
				>
					<option value="">Seleccione</option>
					<option value="con-pareja">Con pareja</option>
					<option value="sin-pareja">Sin pareja</option>
					<option value="no-responde">No responde</option>
				</select>
				<h3>Nivel Educativo</h3>
				<select id="nivel-educativo" name="nivel-educativo" required>
					<option value="">Seleccione</option>
					<option value="sin-instruccion">
						Sin instrucción (SI)
					</option>
					<option value="primaria-completa">
						Primaria Incompleta (PI)
					</option>
					<option value="primaria-incompleta">
						Primaria Completa (PC)
					</option>
					<option value="secundaria-completa">
						Secundaria Incompleta (SI)
					</option>
					<option value="secundaria-incompleta">
						Secundaria Completa (SC)
					</option>
					<option value="tu-incompleta">
						Terciaria o Universidad Incompleta (TUI)
					</option>
					<option value="tu-completa">
						Terciaria o Universidad Completa (TUC)
					</option>
					<option value="nosabe-nocontesta">
						No sabe o no contesta (NSNC)
					</option>
				</select>
				<h3>Situación Laboral</h3>
				<select
					id="situacion-laboral"
					name="situacion-laboral"
					required
				>
					<option value="">Seleccione</option>
					<option value="tiempo-completo">
						Trabaja a tiempo completo (más de 35 horas)
					</option>
					<option value="tiempo-parcial">
						Trabaja a tiempo parcial (menos de 35 horas)
					</option>
					<option value="trabaja-esporadicamente">
						Trabaja esporádicamente
					</option>
					<option value="desempleado">Desempleado</option>
					<option value="dedicado-al-estudio">
						Dedicado al estudio
					</option>
					<option value="notrabaja-nobusca">
						No trabaja y no busca trabajo
					</option>
					<option value="trabajador-familiar">
						Trabajador familiar
					</option>
					<option value="jubilado-pensionado-rentista">
						Jubilado / pensionado / rentista
					</option>
					<option value="incapacitado-para-trabajar">
						Incapacitado para trabajar
					</option>
					<option value="nosabe-nocontesta">
						No sabe o no contesta (NSNC)
					</option>
				</select>
				<h3>Ocupación</h3>
				<select id="ocupacion" name="ocupacion" required>
					<option value="">Seleccione</option>
					<option value="como-propio">
						Para su propio negocio / empresa / actividad
					</option>
					<option value="como-empleado">
						Como obrero o empleado para un patrón / empresa /
						institución
					</option>
					<option value="como-servicio-domestico">
						Como servicio doméstico
					</option>
				</select>
				<h3>¿Tiene licencia de conducir en estado vigente?</h3>
				<select
					id="licencia-conducir"
					name="licencia-conducir"
					required
				>
					<option value="">Seleccione</option>
					<option value="si">Si</option>
					<option value="no">No</option>
					<option value="nosabe-nocontesta">
						No sabe o no contesta
					</option>
				</select>
				<h3>
					¿Qué tipo de vehículo lo habilita a conducir esta licencia?
				</h3>
				<select
					id="tipo-licencia-conducir"
					name="tipo-licencia-conducir"
					required
				>
					<option value="">Seleccione</option>
					<option value="ciclomotores">
						Ciclomotores, Motocicletas y Triciclos motorizados
					</option>
					<option value="automoviles-camionetas">
						Automóviles y camionetas con acoplados de hasta 750 kg
						de peso a casa rodante
					</option>
					<option value="camiones-claseB">
						Camiones sin acoplado y los comprendidos en la clase B
					</option>
					<option value="servicios-B-C">
						Los destinados al servicio de transporte de pasajeros,
						emergencias, seguridad y los de clase B o C, según caso
					</option>
					<option value="automores-discapacitados">
						Automotores especialmente adaptados para discapacitados
					</option>
					<option value="agricolas">
						Tractores agrícolas y maquinaria especial agrícola
					</option>
				</select>
				<h3>Dirección del siniestro</h3>
				<div className="div-largo">
					<label htmlFor="direccion-siniestro" className="label-text">
						Dirección de la calle
					</label>
					<input type="text" id="direccion-siniestro" />
				</div>
				<div className="div-largo">
					<label
						htmlFor="direccion-siniestro-2"
						className="label-text"
					>
						Dirección de la calle Línea 2
					</label>
					<input type="text" id="direccion-siniestro-2" />
				</div>
				<div className="dos-divs-juntos">
					<div>
						<label
							htmlFor="ciudad-siniestro"
							className="label-text"
						>
							Ciudad
						</label>
						<input type="text" id="ciudad-siniestro" />
					</div>
					<div>
						<label
							htmlFor="estado-provincia-siniestro"
							className="label-text"
						>
							Estado / Provincia
						</label>
						<input type="text" id="estado-provincia-siniestro" />
					</div>
				</div>
			</section>
		</>
	);
}
