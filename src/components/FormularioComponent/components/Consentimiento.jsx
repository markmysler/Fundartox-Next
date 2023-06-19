import style from "../form.module.css";

export default function Consentimiento() {
	return (
		<>
			<div className={style.divConsentimiento}>
				<p className={style.pConsentimiento}>
					CONSENTIMIENTO INFORMADO
				</p>
				<p className={style.pConsentimiento}>
					Hemos tomado contacto con usted para la realización de un
					cuestionario dirigido a pacientes que asisten a las salas de
					emergencias de Hospitales Públicos a nivel nacional, en el
					marco del "Estudio de Pacientes en Salas de Emergencias
					2023", del Observatorio Vial dependiente del Ministerio de
					Transporte de la Nación. El objetivo de la investigación es
					estudiar el consumo de alcohol y otras sustancias
					psicoactivas en vinculación con la seguridad vial. Antes de
					empezar, necesitamos que manifieste si está de acuerdo con
					participar, luego de notificarse de algunas cuestiones que
					le aclaramos a continuación: Su participación en este
					cuestionario es totalmente voluntaria y gratuita, y no le
					causará beneficio ni riesgo alguno. No implicará para usted
					ningún tipo de perjuicio si decide no participar, así como
					tampoco implicará un perjuicio si decide interrumpir su
					participación en cualquier momento una vez comenzada la
					actividad, si usted así lo desea. La confidencialidad de sus
					datos está garantizada por la Declaración de Helsinki y
					todas sus enmiendas, y por la ley de Habeas Data Nª 25.326 y
					sus modificaciones de protección de datos personales, de
					modo tal que no pueda identificarse lo que usted plantee con
					su nombre. Si hay algo que no le quedó claro o tiene alguna
					duda puede comunicarse con el equipo técnico de Fundartox en
					el siguiente correo:{" "}
					<a href="mailto:abarrionuevo@fundartox.org">
						abarrionuevo@fundartox.org
					</a>
					.
				</p>
			</div>
			<div className={style.divCheckboxConsentimiento}>
				<input
					id="aceptaConsentimientoInformado"
					type="checkbox"
					required
					className={style.checkboxConsentimiento}
				/>
				<label
					htmlFor="aceptaConsentimientoInformado"
					className={style.labelConsentimiento}
				>
					Acepto los términos y condiciones
				</label>
			</div>
		</>
	);
}
