import { firestore } from "@/firebase/clientApp";
import { doc, getDoc } from "firebase/firestore";

export default async function getUserData(id) {
	const docRef = doc(firestore, "entries", id);
	const docSnap = await getDoc(docRef);
	let res = [];
	if (docSnap.exists()) {
		const data = docSnap.data();
		for (const key in data) {
			if (data[key].Q === "codigoEncuestador") {
				res[0] = data[key].A;
			}
			if (data[key].Q === "nombrehospital") {
				res[1] = data[key].A.split(" ").map(
					(i) =>
						`${(i[0].toUpperCase() + i.slice(1)).replace(
							/([a-z])([A-Z])/g,
							"$1 $2"
						)} `
				);
			}
		}
		return res;
	} else {
		console.error("getUserData error");
	}
}
