import Header from "@/components/Header/Header";
import router from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import style from "./index.module.css";
import Inicio from "@/components/Inicio/Inicio";

export default function Home() {
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			router.push("/formulario");
		}
	}, [user]);
	return (
		// <div className={style.body}>

		// </div>
		<>
			<Header user={user} />
			<Inicio />
		</>
	);
}
