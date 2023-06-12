import style from "../form.module.css";

export default function SectionCondicionSalud() {
	return (
		<>
			<section id="condicion-salud-paciente">
				<h2 className={style.h2}>Condición de Salud del Paciente</h2>
				<div>
					<h3 className={style.h3}>
						¿Toma alguna medicación recetada?
					</h3>
					<div>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="medicacion-resetada"
								value="si"
								type="radio"
								id="medicacion-recetada-si"
							/>
							<label
								className={style.label}
								htmlFor="medicacion-recetada-si"
							>
								Sí
							</label>
						</div>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="medicacion-resetada"
								value="no"
								type="radio"
								id="medicacion-recetada-no"
							/>
							<label
								className={style.label}
								htmlFor="medicacion-recetada-no"
							>
								No
							</label>
						</div>
					</div>
					<h3 className={style.h3}>¿Toma algún psicofarmaco?</h3>
					<div>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="psicofarmaco"
								value="si"
								type="radio"
								id="psicofarmaco-si"
							/>
							<label
								className={style.label}
								htmlFor="psicofarmaco-si"
							>
								Sí
							</label>
						</div>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="psicofarmaco"
								value="no"
								type="radio"
								id="psicofarmaco-no"
							/>
							<label
								className={style.label}
								htmlFor="psicofarmaco-no"
							>
								No
							</label>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
