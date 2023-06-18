import { auth } from "@/firebase/clientApp";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { signOut } from "firebase/auth";
import style from "./Header.module.css";
import logo from "@/images/isoFundartox.png";

export default function Header({ user }) {
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
	const handleLogout = () => {
		signOut(auth);
	};
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
							Iniciar sesion
						</button>
					</>
				) : (
					<>
						<p>Has iniciado sesión como {user.displayName}</p>
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
