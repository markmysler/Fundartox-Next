import style from "./Header.module.css";
import logo from "@/images/isoFundartox.png";
import { googleSignIn, handleLogout } from "../../app-functions/googleLogin.js";

export default function Header({ user }) {
	return (
		<header className={style.header}>
			<div className={style.divIsologo}>
				<img src={logo.src} alt="isologo" />
			</div>
			<div className={style.login}>
				{!user ? (
					<>
						<p>Inicia sesión para ver el formulario</p>
						<button
							className={style.btnHeader}
							onClick={googleSignIn}
						>
							Iniciar sesión
						</button>
					</>
				) : (
					<>
						<p>
							Has iniciado sesión como{" "}
							{user.displayName.split(" ").map(
								(i) =>
									`
										${i[0].toUpperCase() + i.slice(1)}
										`
							)}
						</p>
						<button
							className={style.btnHeader}
							onClick={handleLogout}
						>
							Cerrar Sesion
						</button>
					</>
				)}
			</div>
		</header>
	);
}
