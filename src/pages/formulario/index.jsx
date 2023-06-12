import { useEffect } from "react";
import { auth } from "../../firebase/clientApp";

import { useAuthState } from "react-firebase-hooks/auth";
import { router } from "next/router";
import Header from "@/components/Header/Header";
import FormularioComponent from "@/components/FormularioComponent/FormularioComponent";
import style from "../index.module.css";

export default function Formulario() {
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (!user) {
			router.push("/");
		}
	}, [user]);
	return (
		<div className={style.body}>
			<Header user={user} />
			<FormularioComponent user={user} />
		</div>
	);
}
