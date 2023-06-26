import { useEffect, useState } from "react";
import style from "./admin.module.css";

export default function TableRow({ item, index, reciveData }) {
	const [receivedData, setReceivedData] = useState(null);

	useEffect(() => {
		async function fetchData() {
			const data = await reciveData(
				item.entries[item.entries.length - 1].id
			);
			setReceivedData(data);
		}
		fetchData();
	}, [item.entries]);

	return (
		<tr className={style.tr} key={item.displayName}>
			<td>{index}</td>
			<td>
				{item.displayName
					.split(" ")
					.map((i) => `${i[0].toUpperCase() + i.slice(1)} `)}
			</td>
			<td>{receivedData[0]}</td>
			<td>{receivedData[1]}</td>
			<td>{item.entries.map((i) => i.id).length}</td>
		</tr>
	);
}
