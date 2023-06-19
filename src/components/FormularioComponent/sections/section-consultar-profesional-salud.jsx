import style from "../form.module.css";

export default function SectionConsultarProfesionalSalud({ handleChange }) {
	return (
		<section id="consultarProfesionalSalud">
			<h2 className={style.h2}>Consultar a profesional de la salud:</h2>
			<h3 className={style.h3}>
				Según su presunción, ¿el paciente consumió alguna sustancia
				psicoactiva?
			</h3>
			<div className={style.divTresRadio}>
				<div className={style.divDosRadio}>
					<input
						className={style.inputRadio}
						name="presuncionPacienteConsumioSustanciaPsicoactiva"
						id="presuncionPacienteConsumioSustanciaPsicoactivaSi"
						value="presuncionPacienteConsumioSustanciaPsicoactivaSi"
						type="radio"
						onChange={(e) => handleChange(e)}
					/>
					<label
						className={style.label}
						htmlFor="presuncionPacienteConsumioSustanciaPsicoactivaSi"
					>
						Sí
					</label>
				</div>
				<div className={style.divDosRadio}>
					<input
						className={style.inputRadio}
						name="presuncionPacienteConsumioSustanciaPsicoactiva"
						id="presuncionPacienteConsumioSustanciaPsicoactivaNo"
						value="presuncionPacienteConsumioSustanciaPsicoactivaNo"
						type="radio"
						checked
						onChange={(e) => handleChange(e)}
					/>
					<label
						className={style.label}
						htmlFor="presuncionPacienteConsumioSustanciaPsicoactivaNo"
					>
						No
					</label>
				</div>
				<div className={style.divDosRadio}>
					<input
						className={style.inputRadio}
						name="presuncionPacienteConsumioSustanciaPsicoactiva"
						id="presuncionPacienteConsumioSustanciaPsicoactivaNsNc"
						value="presuncionPacienteConsumioSustanciaPsicoactivaNsNc"
						type="radio"
						onChange={(e) => handleChange(e)}
					/>
					<label
						className={style.label}
						htmlFor="presuncionPacienteConsumioSustanciaPsicoactivaNsNc"
					>
						NS/NC
					</label>
				</div>
			</div>
			<h3 className={style.h3}>
				Según su presunción, ¿el consumo de sustancias psicoativas por
				parte del paciente tiene relación con el motivo de la consulta?
			</h3>
			<div className={style.divTresRadio}>
				<div className={style.divDosRadio}>
					<input
						className={style.inputRadio}
						name="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsulta"
						id="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaSi"
						value="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaSi"
						type="radio"
						onChange={(e) => handleChange(e)}
					/>
					<label
						className={style.label}
						htmlFor="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaSi"
					>
						Sí
					</label>
				</div>
				<div className={style.divDosRadio}>
					<input
						className={style.inputRadio}
						name="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsulta"
						id="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNo"
						value="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNo"
						type="radio"
						checked
						onChange={(e) => handleChange(e)}
					/>
					<label
						className={style.label}
						htmlFor="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNo"
					>
						No
					</label>
				</div>
				<div className={style.divDosRadio}>
					<input
						className={style.inputRadio}
						name="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsulta"
						id="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNsNc"
						value="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNsNc"
						type="radio"
						onChange={(e) => handleChange(e)}
					/>
					<label
						className={style.label}
						htmlFor="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNsNc"
					>
						NS/NC
					</label>
				</div>
			</div>
		</section>
	);
}
