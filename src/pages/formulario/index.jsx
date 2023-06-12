import { useEffect } from "react";
import { auth } from "../../firebase/clientApp";

import { useAuthState } from "react-firebase-hooks/auth";
import { router } from "next/router";
import Header from "@/components/Header/Header";
import FormularioComponent from "@/components/FormularioComponent/FormularioComponent";

export default function Formulario() {
	const [user] = useAuthState(auth);

	useEffect(() => {
		if (!user) {
			router.push("/");
		}
	}, [user]);
	return (
		<>
			<Header user={user} />
			<FormularioComponent user={user} />
		</>
	);
}
