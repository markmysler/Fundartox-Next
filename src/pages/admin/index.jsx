import MainAdmin from "@/components/MainAdmin/MainAdmin";
import { firestore } from "../../firebase/clientApp";
import { auth } from "../../firebase/clientApp";
import { useAuthState } from "react-firebase-hooks/auth";
import Header from "@/components/Header/Header";

export default function Admin() {
	const [user] = useAuthState(auth);
	return (
		<>
			<Header user={user} />
			<MainAdmin firestore={firestore} />
		</>
	);
}
