import Header from "@/components/Header/Header";
import router from "next/router";
import { useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/clientApp";
import Inicio from "@/components/Inicio/Inicio";
import Head from "next/head";
import favicon from "../images/favicon.ico";

export default function Home() {
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (user) {
			router.push("/formulario");
		}
	}, [user]);
	return (
		<>
			<Head>
				<title>Fundartox - Inicio</title>
				<link rel="icon" href={favicon.src} type="image/x-icon" />
			</Head>
			<Header user={user} />
			<Inicio />
		</>
	);
}
