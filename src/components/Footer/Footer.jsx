import style from "./footer.module.css";

export default function Footer() {
	return (
		<>
			<div className={style.divFooter}>
				<p className={style.pFooter}>
					Desarrollado por: Mark Mysler y Emilio Bensignor
				</p>
			</div>
		</>
	);
}
