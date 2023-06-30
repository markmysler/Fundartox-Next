import { auth } from "@/firebase/clientApp";
import { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import getUsersWithEntries from "@/app-functions/getUsersWithEntries";
import style from "./admin.module.css";
import icon from "../../images/icon-hs.png";
import getUserData from "@/app-functions/getUserData";
import TableRow from "./TableRow";

export default function MainAdmin({ firestore }) {
	const [user] = useAuthState(auth);
	const [resData, setResData] = useState([]);
	const [data, setData] = useState(null);

	async function getData() {
		if (user) {
			const usersWithEntries = await getUsersWithEntries(firestore);
			setData(usersWithEntries);
		}
	}
	useEffect(() => {
		getData();
	}, [user]);

	useEffect(() => {
		if (data !== null) {
			setResData(data);
		}
	}, [data]);

	async function reciveData(id) {
		const data = await getUserData(id);
		return data;
	}

	return (
		<>
			<div className={style.contenido}>
				<div className={style.divH1}>
					<h1>Encuestas enviadas</h1>
				</div>
				<div className={style.iconoEncuesta}>
					<img
						className={style.iconoHs}
						src={icon.src}
						alt="icon-hs"
					/>
					<h2>
						Encuestas totales:{" "}
						<span>
							{resData
								.map((i) => i.entries.length)
								.reduce((partialSum, a) => partialSum + a, 0)}
						</span>
					</h2>
				</div>
				<div>
					<div className={style.iconoEncuesta}>
						<img
							className={style.iconoHs}
							src={icon.src}
							alt="icon-hs"
						/>
						<h3>Encuestas por usuario:</h3>
					</div>
					<div className={style.divTable}>
						<table className={style.table}>
							<tbody>
								<tr className={style.tr}>
									<th></th>
									<th>Nombre</th>
									<th>Código del encuestador</th>
									<th>Hospital</th>
									<th>Encuestas enviadas</th>
								</tr>
								{resData.length > 0 ? (
									resData.map((item, index) => (
										<TableRow
											key={item.displayName}
											item={item}
											index={index}
											reciveData={reciveData}
										/>
									))
								) : (
									<></>
								)}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		</>
	);
}
