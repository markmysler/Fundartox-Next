import { useEffect } from "react";
import { auth } from "../../firebase/clientApp";

import { useAuthState } from "react-firebase-hooks/auth";
import { router } from "next/router";
import Header from "@/components/Header/Header";
import FormularioComponent from "@/components/FormularioComponent/FormularioComponent";
import style from "../index.module.css";
import Footer from "@/components/Footer/Footer";
import favicon from "../../images/favicon.ico";
import Head from "next/head";

export default function Formulario() {
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (!user) {
			router.push("/");
		}
	}, [user]);
	return (
		<>
			<Head>
				<title>Fundartox - Formulario</title>
				<link rel="icon" href={favicon.src} type="image/x-icon" />
			</Head>
			<div className={style.body}>
				<Header user={user} />
				<FormularioComponent user={user} />
			</div>
			<Footer />
		</>
	);
}
