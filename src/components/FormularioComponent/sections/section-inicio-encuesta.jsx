import { useEffect } from "react";
import style from "../form.module.css";
import moment from "moment/moment";
import Consentimiento from "../components/Consentimiento";

export default function SectionInicioEncuesta({ handleChange }) {
	useEffect(() => {
		const FHelement = document.getElementById("fechahora");
		const date = moment().format("yyyy-MM-DDThh:mm");
		FHelement.value = date;
	}, []);
	return (
		<>
			<section id="inicioEncuesta">
				<Consentimiento handleChange={handleChange} />
				<div className={style.divPar}>
					<label
						htmlFor="codigoEncuestador"
						className={[style.labelTitulo]}
					>
						Código Encuestador
					</label>
					<input
						className={style.inputText}
						type="number"
						max={100000000}
						min={0}
						maxLength={8}
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
