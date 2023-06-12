import router from "next/router";
import { GoogleAuthProvider, signInWithRedirect } from "firebase/auth";
import { auth } from "../firebase/clientApp";
import { ToastContainer, toast } from "react-toastify";
import { useAuthState } from "react-firebase-hooks/auth";
import { useEffect } from "react";
import Header from "@/components/Header/Header";

export default function Home() {
	const [user] = useAuthState(auth);
	useEffect(() => {
		if (user) {
			router.push("/formulario");
		}
	}, [user]);
	return (
		<>
			<Header user={user} />
			<main>
				<h1>Inicia sesion para ver el formulario</h1>
			</main>
		</>
	);
}
