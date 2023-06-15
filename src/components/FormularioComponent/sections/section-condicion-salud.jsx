import style from "../form.module.css";

export default function SectionCondicionSalud({ handleChange }) {
	return (
		<>
			<section id="condicionSaludPaciente">
				<h2 className={style.h2}>Condición de Salud del Paciente</h2>
				<div>
					<h3 className={style.h3}>
						¿Toma alguna medicación recetada?
					</h3>
					<div className={style.divPreguntaRadio}>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="medicacionResetada"
								value="si"
								type="radio"
								id="medicacionRecetadaSi"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.label}
								htmlFor="medicacionRecetadaSi"
							>
								Sí
							</label>
						</div>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="medicacionResetada"
								value="no"
								type="radio"
								id="medicacionRecetadaNo"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.label}
								htmlFor="medicacionRecetadaNo"
							>
								No
							</label>
						</div>
					</div>
					<h3 className={style.h3}>¿Toma algún psicofarmaco?</h3>
					<div className={style.divPreguntaRadio}>
						<div className={style.divDosRadio}>
							<input
								className={style.inputRadio}
								name="psicofarmaco"
								value="si"
								type="radio"
								id="psicofarmacoSi"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.label}
								htmlFor="psicofarmacoSi"
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
								id="psicofarmacoNo"
								onChange={(e) => handleChange(e)}
							/>
							<label
								className={style.label}
								htmlFor="psicofarmacoNo"
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
