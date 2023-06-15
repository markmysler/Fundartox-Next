import { auth } from "@/firebase/clientApp";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import getUsersWithEntries from "@/app-functions/getUsersWithEntries";

export default function MainAdmin({ firestore }) {
	const [user] = useAuthState(auth);
	const [resData, setResData] = useState([]);
	const [data, setData] = useState(null);

	function getData() {
		if (user) {
			setData(getUsersWithEntries(firestore));
		}
	}
	useEffect(() => {
		getData();
	}, [user]);

	useEffect(() => {
		if (data !== null) {
			data.then(function (res) {
				for (let i = 0; i < res.length; i++) {
					const element = res[i];
					setResData([...resData, element]);
				}
			});
		}
	}, [data]);

	return (
		<>
			<h1>Admin view</h1>
			<div>
				{resData.map((item) => (
					<div key={item.displayName}>
						<p>Usuario: {item.displayName}</p>
						<p>Entries: {item.entries.map((i) => i.id).length}</p>
						<p>IDs: {item.entries.map((i) => i.id).join(" , ")}</p>
					</div>
				))}
			</div>
		</>
	);
}
