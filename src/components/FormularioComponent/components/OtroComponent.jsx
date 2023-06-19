import style from "../form.module.css";

export default function OtroComponent({
	handleChange,
	otroChecked = () => {
		const otro = document.getElementById("comoFueSiniestroOtro");
	},
}) {
	return (
		<>
			<div>
				<input
					className={style.inputCorto}
					type="text"
					id="comoFueSiniestroOtroEspecifique"
					placeholder="..."
					required
					onChange={(e) => (handleChange(e), otroChecked())}
				/>
			</div>
		</>
	);
}
