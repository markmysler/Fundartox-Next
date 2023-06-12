import style from "../form.module.css";

export default function SectionGeo() {
	return (
		<>
			<section
				id="section-geolocalizacion"
				className={style.sectionGeolocalizacion}
			>
				<h3 className={style.h3}>Geolocalización</h3>
				<div className={style.parent}>
					<div className={style.div1}>
						<p>Latitud</p>
					</div>
					<div className={style.div2}>
						<p>0</p>
					</div>
					<div className={style.div3}>
						<p>Longitud</p>
					</div>
					<div className={style.div4}>
						<p>0</p>
					</div>
				</div>
			</section>
		</>
	);
}
