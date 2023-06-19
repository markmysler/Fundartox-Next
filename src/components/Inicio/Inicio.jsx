import style from "./inicio.module.css";
import fundartox from "../../images/FUNDARTOX.png";
import seguridadVial from "../../images/SeguridadVial.png";
import titulo from "../../images/tituloInvestigacion.png";
import inicieSesion from "../../images/InicieSesion.png";
import { googleSignIn } from "../../app-functions/googleLogin.js";

export default function Inicio() {
	return (
		<div className={style.inicioContainer}>
			<div className={style.tresLogos}>
				<img src={fundartox.src} alt="Logo Fundartox" />
				<img src={seguridadVial.src} alt="Logo Seguridad Vial" />
				<img src={titulo.src} alt="Titulo Investigacion" />
			</div>
			<div className={style.inicieSesion}>
				<img
					src={inicieSesion.src}
					alt="Inicie sesion para ver el formulario"
					onClick={googleSignIn}
				/>
			</div>
		</div>
	);
}
