import { auth } from "@/firebase/clientApp";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { signOut } from "firebase/auth";
import styles from "./Header.module.css";

export default function Header({ user }) {
	const googleSignIn = () => {
		const provider = new GoogleAuthProvider();
		signInWithRedirect(auth, provider);
	};
	const handleLogout = () => {
		signOut(auth);
	};
	return (
		<header className={styles.header}>
			<h1 className={styles.headerTitle}>Fundartox</h1>
			<div className={styles.login}>
				{!user ? (
					<>
						<p>Inicia sesion para ver el formulario</p>
						<button onClick={googleSignIn}>Iniciar sesion</button>
					</>
				) : (
					<>
						<p>Has iniciado sesion como {user.displayName}</p>
						<button onClick={handleLogout}>Cerrar Sesion</button>
					</>
				)}
			</div>
		</header>
	);
}
