import style from "../form.module.css";

export default function SectionEstablecimiento({ handleChange }) {
	return (
		<>
			<section
				id="establecimientoSanitario"
				className={style.establecimientoSanitario}
			>
				<h2 className={style.h2}>Establecimiento sanitario</h2>
				<label className={style.label} htmlFor="nombrehospital">
					Nombre
				</label>
				<select
					className={style.selectLargo}
					id="nombrehospital"
					name="nombrehospital"
					required
					onChange={(e) => handleChange(e)}
				>
					<option value="">Seleccione</option>
					<option value="bsAsHospitalHeroesMalvinas">
						Bs As Hospital Héroes de Malvinas
					</option>
					<option value="bsAsHospitalInterzonalGeneralAgudosSanMartin">
						Bs As Hospital Interzonal General de Agudos General José
						de San Martín
					</option>
					<option value="bsAsHospitalInterzonalAgudosEvita">
						Bs As Hospital Interzonal de Agudos Evita
					</option>
					<option value="bsAsHospitalZonalAgudosParoissien">
						Bs AsHospital Zonal General de Agudos Dr. Paroissien
					</option>
					<option value="bsAsHospitalZonalAgudosDomingoMercante">
						Bs As Hospital Zonal de Agudos Gdor. Domingo Mercante
					</option>
					<option value="bsAsHospitalZonalAgudosDescentralizadoEvita">
						Bs As Hospital Zonal General de Agudos Descentralizado
						Evita Pueblo
					</option>
					<option value="cabaHospitalGeneralAgudosJuanFernandez">
						CABA Hospital General de Agudos Dr. Juan A. Fernández
					</option>
					<option value="cabaHospitalDonacionSantojanni">
						CABA Hospital Donación Francisco Santojanni
					</option>
					<option value="catamarcaBospitalInterzonalSanJuanBautista">
						Catamarca Hospital Interzonal San Juan Bautista
					</option>
					<option value="chacoospitalJulioPerrando">
						Chaco Hospital Julio C. Perrando
					</option>
					<option value="chubutHospitalZonalTrelewAdolfoLargara">
						Chubut Hospital zonal Trelew Dr. Adolfo Márgara
					</option>
					<option value="cordobaHospitalSanRoque">
						Córdoba Hospital San Roque
					</option>
					<option value="cordobaHospitalRioCuartoSanAntonioPadua">
						Córdoba Hospital Río Cuarto San Antonio de Padua
					</option>
					<option value="corrientesHospitalEscuelaJoseSanMartin">
						Corrientes Hospital Escuela José de San Martín
					</option>
					<option value="entreRiosHospitalSanMartin">
						Entre Ríos Hospital San Martín
					</option>
					<option value="formosaHospitalCentral">
						Formosa Hospital Central
					</option>
					<option value="jujuyHospitalPabloSoria">
						Jujuy Hospital Pablo Soria
					</option>
					<option value="laPampaHospitalLucioMolas">
						La Pampa Hospital Dr. Lucio Molas
					</option>
					<option value="laRiojaHospitalRegionalEnriqueBarros">
						La Rioja Hospital Regional Dr. Enrique Vera Barros
					</option>
					<option value="mendozaHospitalCentral">
						Mendoza Hospital Central
					</option>
					<option value="misionesHospitalEscuelaAgudosRamonMadariaga">
						Misiones Hospital Escuela de Agudos Dr. Ramón Madariaga
					</option>
					<option value="neuquenHospitalProvincialNeuquenCastroRendon">
						Neuquén Hospital Provincial Neuquén Dr. Castro Rendon
					</option>
					<option value="rioNegroHospitalArtemidesZatti">
						Río Negro Hospital Artémides Zatti
					</option>
					<option value="saltaHospitalSanBernardo">
						Salta Hospital San Bernardo
					</option>
					<option value="sanJuanHospitalRawson">
						San Juan Hospital Rawson
					</option>
					<option value="sanLuiscomplejoSanitarioSanLuis">
						San Luis Complejo Sanitario de San Luis
					</option>
					<option value="santaCruzHospitalRegionalRioGallegos">
						Santa Cruz Hospital Regional de Río Gallegos
					</option>
					<option value="santaFeHospitalProvincialJoseMariaCullen">
						Santa Fé Hospital Provincial Dr. José María Cullén
					</option>
					<option value="santaFeHospitalEmergenciasClementeAlvarez">
						Santa Fé Hospital de Emergencias Dr. Clemente Álvarez
					</option>
					<option value="santiagoDelEsteroospitalRegionalRamonCarrillo">
						Santiago del Estero Hospital Regional "Dr. Ramón
						Carrillo"
					</option>
					<option value="tierraDelFuegoHospitalRegionalUshuaiaErnestoCampos">
						Tierra del Fuego Hospital Regional Ushuaia Gobernador
						Ernesto Campos
					</option>
					<option value="tucumanHospitalAngelPadilla">
						Tucumán Hospital Ángel C. Padilla
					</option>
				</select>
			</section>
		</>
	);
}
