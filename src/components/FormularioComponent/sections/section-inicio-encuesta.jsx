import style from "../form.module.css";

export default function SectionInicioEncuesta({ handleChange }) {
	return (
		<>
			<section id="inicioEncuesta">
				<div className={style.divPar}>
					<label
						htmlFor="codigoEncuestador"
						className={[style.labelTitulo, style.label]}
					>
						Código Encuestador
					</label>
					<input
						className={style.inputText}
						type="text"
						id="codigoEncuestador"
						required
						onChange={(e) => handleChange(e)}
					/>
				</div>
				<div className={style.divPar}>
					<label className={style.label} htmlFor="fechahora">
						Fecha y Hora de la Encuesta
					</label>
					<input
						className={style.inputDateTime}
						type="datetime-local"
						id="fechahora"
						name="fechahora"
						required
						onChange={(e) => handleChange(e)}
					/>
				</div>
			</section>
		</>
	);
}
