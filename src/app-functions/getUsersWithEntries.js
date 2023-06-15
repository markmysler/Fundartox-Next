import { collection, getDocs } from "firebase/firestore";

export default async function getUsersWithEntries(firestore) {
	try {
		const usersWithEntries = [];
		const usersRef = collection(firestore, "users");
		const usersSnapshot = await getDocs(usersRef);

		for (const userDoc of usersSnapshot.docs) {
			const user = userDoc.data();
			const entriesRef = collection(userDoc.ref, "entries");
			const entriesSnapshot = await getDocs(entriesRef);
			if (!entriesSnapshot.empty) {
				const entries = entriesSnapshot.docs.map((doc) => doc.data());
				usersWithEntries.push({
					displayName: user.displayName,
					entries,
				});
			}
		}
		return usersWithEntries;
	} catch (error) {
		console.error(error);
		throw error; // re-throw the error so it can be handled by the calling code
	}
}
