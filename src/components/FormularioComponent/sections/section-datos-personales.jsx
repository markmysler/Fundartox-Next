import style from "../form.module.css";

export default function SectionDatosPersonales() {
	return (
		<>
			<section id="datos-personales">
				<h2 className={style.h2}>Datos personales</h2>
				<h3 className={style.h3}>Nombre</h3>
				<div className={style.dosDivsJuntos}>
					<div>
						<label
							htmlFor="nombre"
							className={[style.labelText, style.label]}
						>
							Nombre
						</label>
						<input
							className={style.inputText}
							type="text"
							id="nombre"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="apellido"
							className={(style.labelText, style.label)}
						>
							Apellido
						</label>
						<input
							className={style.inputText}
							type="text"
							id="apellido"
							required
						/>
					</div>
				</div>
				<h3 className={style.h3}>Fecha de nacimiento</h3>
				<div className={style.fechaNacimiento}>
					<label
						htmlFor="fecha-de-nacimiento"
						className={(style.labelText, style.label)}
					>
						Fecha
					</label>
					<input
						className={style.inputDate}
						type="date"
						id="fecha-de-nacimiento"
						required
					/>
				</div>
				<h3 className={style.h3}>Dirección particular</h3>
				<div className={style.divLargo}>
					<label
						htmlFor="direccion-linea-1"
						className={(style.labelText, style.label)}
					>
						Dirección de la calle
					</label>
					<input
						className={style.inputText}
						type="text"
						id="direccion-linea-1"
						required
					/>
				</div>
				<div className={style.divLargo}>
					<label
						htmlFor="direccion-linea-2"
						className={(style.labelText, style.label)}
					>
						Dirección de la calle Linea 2
					</label>
					<input
						className={style.inputText}
						type="text"
						id="direccion-linea-2"
						required
					/>
				</div>
				<div className={style.dosDivsJuntos}>
					<div>
						<label
							htmlFor="ciudad"
							className={(style.labelText, style.label)}
						>
							Ciudad
						</label>
						<input
							className={style.inputText}
							type="text"
							id="ciudad"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="estado-provincia"
							className={(style.labelText, style.label)}
						>
							Estado / Provincia
						</label>
						<input
							className={style.inputText}
							type="text"
							id="estado-provincia"
							required
						/>
					</div>
				</div>
				<div className={style.divLargo}>
					<label
						htmlFor="codigo-postal"
						className={(style.labelText, style.label)}
					>
						Código Postal
					</label>
					<input
						className={style.inputText}
						type="text"
						id="codigo-postal"
						required
					/>
				</div>
				<div className={style.divSeparacion}>
					<label
						htmlFor="sexo"
						className={(style.labelSelect, style.label)}
					>
						Sexo
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="sexo"
							name="sexo"
							required
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
						htmlFor="situacion-conyugal"
						className={(style.labelSelect, style.label)}
					>
						Situación Conyugal
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="situacion-conyugal"
							name="situacion-conyugal"
							required
						>
							<option value="">Seleccione</option>
							<option value="con-pareja">Con pareja</option>
							<option value="sin-pareja">Sin pareja</option>
							<option value="no-responde">No responde</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="nivel-educativo"
						className={(style.labelSelect, style.label)}
					>
						Nivel Educativo
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="nivel-educativo"
							name="nivel-educativo"
							required
						>
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
					</div>
				</div>
				<div>
					<label
						htmlFor="situacion-laboral"
						className={(style.labelSelect, style.label)}
					>
						Situación Laboral
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
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
							className={style.select}
							id="ocupacion"
							name="ocupacion"
							required
						>
							<option value="">Seleccione</option>
							<option value="como-propio">
								Para su propio negocio / empresa / actividad
							</option>
							<option value="como-empleado">
								Como obrero o empleado para un patrón / empresa
								/ institución
							</option>
							<option value="como-servicio-domestico">
								Como servicio doméstico
							</option>
						</select>
					</div>
				</div>
				<div>
					<label
						htmlFor="licencia-conducir"
						className={(style.labelSelect, style.label)}
					>
						¿Tiene licencia de conducir en estado vigente?
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
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
					</div>
				</div>
				<div>
					<label
						htmlFor="tipo-licencia-conducir"
						className={(style.labelSelect, style.label)}
					>
						¿Qué tipo de vehículo lo habilita a conducir esta
						licencia?
					</label>
					<div className={style.divSelect}>
						<select
							className={style.select}
							id="tipo-licencia-conducir"
							name="tipo-licencia-conducir"
							required
						>
							<option value="">Seleccione</option>
							<option value="ciclomotores">
								Ciclomotores, Motocicletas y Triciclos
								motorizados
							</option>
							<option value="automoviles-camionetas">
								Automóviles y camionetas con acoplados de hasta
								750 kg de peso a casa rodante
							</option>
							<option value="camiones-claseB">
								Camiones sin acoplado y los comprendidos en la
								clase B
							</option>
							<option value="servicios-B-C">
								Los destinados al servicio de transporte de
								pasajeros, emergencias, seguridad y los de clase
								B o C, según caso
							</option>
							<option value="automores-discapacitados">
								Automotores especialmente adaptados para
								discapacitados
							</option>
							<option value="agricolas">
								Tractores agrícolas y maquinaria especial
								agrícola
							</option>
						</select>
					</div>
				</div>
				<h3 className={style.h3}>Dirección del siniestro</h3>
				<div className={style.divLargo}>
					<label
						htmlFor="direccion-siniestro"
						className={(style.labelText, style.label)}
					>
						Dirección de la calle
					</label>
					<input
						className={style.inputText}
						type="text"
						id="direccion-siniestro"
						required
					/>
				</div>
				<div className={style.divLargo}>
					<label
						htmlFor="direccion-siniestro-2"
						className={(style.labelText, style.label)}
					>
						Dirección de la calle Línea 2
					</label>
					<input
						className={style.inputText}
						type="text"
						id="direccion-siniestro-2"
						required
					/>
				</div>
				<div className={style.dosDivsJuntos}>
					<div>
						<label
							htmlFor="ciudad-siniestro"
							className={(style.labelText, style.label)}
						>
							Ciudad
						</label>
						<input
							className={style.inputText}
							type="text"
							id="ciudad-siniestro"
							required
						/>
					</div>
					<div>
						<label
							htmlFor="estado-provincia-siniestro"
							className={[style.labelText, style.label]}
						>
							Estado / Provincia
						</label>
						<input
							className={style.inputText}
							type="text"
							id="estado-provincia-siniestro"
							required
						/>
					</div>
				</div>
			</section>
		</>
	);
}
