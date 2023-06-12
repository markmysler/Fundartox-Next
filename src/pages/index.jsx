import Header from "@/components/Header/Header";
import router from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import style from "./index.module.css";

export default function Home() {
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			router.push("/formulario");
		}
	}, [user]);
	return (
		<div className={style.body}>
			<Header user={user} />
			<main>
				<h1>Inicia sesion para ver el formulario</h1>
			</main>
		</div>
	);
}
