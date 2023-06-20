import MainAdmin from "@/components/MainAdmin/MainAdmin";
import { firestore } from "../../firebase/clientApp";
import { auth } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "@/components/Header/Header";
import Head from "next/head";
import favicon from "../../images/favicon.ico";

export default function Admin() {
	const [user] = useAuthState(auth);
	return (
		<>
			<Head>
				<title>Fundartox - Admin</title>
				<link rel="icon" href={favicon.src} type="image/x-icon" />
			</Head>
			<Header user={user} />
			<MainAdmin firestore={firestore} />
		</>
	);
}
