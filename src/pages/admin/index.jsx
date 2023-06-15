import MainAdmin from "@/components/MainAdmin/MainAdmin";
import { firestore } from "../../firebase/clientApp";

export default function Admin() {
	return (
		<>
			<MainAdmin firestore={firestore} />
		</>
	);
}
