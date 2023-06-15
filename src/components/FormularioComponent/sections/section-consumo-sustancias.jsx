import style from "../form.module.css";

export default function SectionComsumoSustancias({ handleChange }) {
	return (
		<>
			<section id="consumoSustanciasPsicoactivas">
				<h2 className={style.h2}>Consumo de sustancias psicoactivas</h2>
				<p>
					¿Consumió alguna de estas sustancias en las últimas 6 horas?
					LEER TODAS LAS FILAS.
				</p>
				<h3 className={style.h3}>Alcohol</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="alcohol"
							id="alcoholSi"
							value="alcoholSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="alcoholSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="alcohol"
							id="alcoholNo"
							value="alcoholNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="alcoholNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="alcohol"
							id="alcoholNsNc"
							value="alcoholNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="alcoholNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Tabaco</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="tabaco"
							id="tabacoSi"
							value="tabacoSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="tabacoSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="tabaco"
							id="tabacoNo"
							value="tabacoNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="tabacoNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="tabaco"
							id="tabacoNsNc"
							value="tabacoNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="tabacoNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Marihuana</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="Marihuana"
							id="MarihuanaSi"
							value="MarihuanaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="MarihuanaSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="Marihuana"
							id="MarihuanaNo"
							value="MarihuanaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="MarihuanaNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="Marihuana"
							id="MarihuanaNsNc"
							value="MarihuanaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="MarihuanaNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Solventes o Inhalables</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="solventesInhalables"
							id="solventesInhalablesSi"
							value="solventesInhalablesSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="solventesInhalablesSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="solventesInhalables"
							id="solventesInhalablesNo"
							value="solventesInhalablesNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="solventesInhalablesNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="solventesInhalables"
							id="solventesInhalablesNsNc"
							value="solventesInhalablesNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="solventesInhalablesNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Alucinógenos</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="alucinogenos"
							id="alucinogenosSi"
							value="alucinogenosSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="alucinogenosSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="alucinogenos"
							id="alucinogenosNo"
							value="alucinogenosNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="alucinogenosNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="alucinogenos"
							id="alucinogenosNsNc"
							value="alucinogenosNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="alucinogenosNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Heroína</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="heroina"
							id="heroinaSi"
							value="heroinaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="heroinaSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="heroina"
							id="heroinaNo"
							value="heroinaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="heroinaNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="heroina"
							id="heroinaNsNc"
							value="heroinaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="heroinaNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Opio o Morfina sin prescripción médica
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="opioMorfinaSinPMedica"
							id="opioMorfinaSinPMedicaSi"
							value="opioMorfinaSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="opioMorfinaSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="opioMorfinaSinPMedica"
							id="opioMorfinaSinPMedicaNo"
							value="opioMorfinaSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="opioMorfinaSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="opioMorfinaSinPMedica"
							id="opioMorfinaSinPMedicaNsNc"
							value="opioMorfinaSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="opioMorfinaSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Opio o Morfina con prescripción médica
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="opioMorfinaConPMedica"
							id="opioMorfinaConPMedicaSi"
							value="opioMorfinaConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="opioMorfinaConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="opioMorfinaConPMedica"
							id="opioMorfinaConPMedicaNo"
							value="opioMorfinaConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="opioMorfinaConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="opioMorfinaConPMedica"
							id="opioMorfinaConPMedicaNsNc"
							value="opioMorfinaConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="opioMorfinaConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Cocaína</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cocaina"
							id="cocainaSi"
							value="cocainaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="cocainaSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cocaina"
							id="cocainaNo"
							value="cocainaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="cocainaNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cocaina"
							id="cocainaNsNc"
							value="cocainaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="cocainaNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Cocaína fumables</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cocainaFumables"
							id="cocainaFumablesSi"
							value="cocainaFumablesSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="cocainaFumablesSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cocainaFumables"
							id="cocainaFumablesNo"
							value="cocainaFumablesNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="cocainaFumablesNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cocainaFumables"
							id="cocainaFumablesNsNc"
							value="cocainaFumablesNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="cocainaFumablesNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Cristales (metanfetaminas)</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cristalesMetanfetaminas)"
							id="cristalesMetanfetaminas)Si"
							value="cristalesMetanfetaminas)Si"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="cristalesMetanfetaminas)Si"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cristalesMetanfetaminas)"
							id="cristalesMetanfetaminas)No"
							value="cristalesMetanfetaminas)No"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="cristalesMetanfetaminas)No"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="cristalesMetanfetaminas)"
							id="cristalesMetanfetaminas)NsNc"
							value="cristalesMetanfetaminas)NsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="cristalesMetanfetaminas)NsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Crack</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="crack"
							id="crackSi"
							value="crackSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="crackSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="crack"
							id="crackNo"
							value="crackNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="crackNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="crack"
							id="crackNsNc"
							value="crackNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="crackNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Ketamina</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ketamina"
							id="ketaminaSi"
							value="ketaminaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="ketaminaSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ketamina"
							id="ketaminaNo"
							value="ketaminaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="ketaminaNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ketamina"
							id="ketaminaNsNc"
							value="ketaminaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="ketaminaNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Éxtasis (MDMA) u otras sintéticas</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ExtasisMDMAOtrasSinteticas"
							id="ExtasisMDMAOtrasSinteticasSi"
							value="ExtasisMDMAOtrasSinteticasSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ExtasisMDMAOtrasSinteticasSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ExtasisMDMAOtrasSinteticas"
							id="ExtasisMDMAOtrasSinteticasNo"
							value="ExtasisMDMAOtrasSinteticasNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ExtasisMDMAOtrasSinteticasNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ExtasisMDMAOtrasSinteticas"
							id="ExtasisMDMAOtrasSinteticasNsNc"
							value="ExtasisMDMAOtrasSinteticasNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ExtasisMDMAOtrasSinteticasNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Anfetaminas sin prescripción médica
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anfetaminasSinPMedica"
							id="anfetaminasSinPMedicaSi"
							value="anfetaminasSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anfetaminasSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anfetaminasSinPMedica"
							id="anfetaminasSinPMedicaNo"
							value="anfetaminasSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anfetaminasSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anfetaminasSinPMedica"
							id="anfetaminasSinPMedicaNsNc"
							value="anfetaminasSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anfetaminasSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Anfetaminas con prescripción médica
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anfetaminasConPMedica"
							id="anfetaminasConPMedicaSi"
							value="anfetaminasConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anfetaminasConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anfetaminasConPMedica"
							id="anfetaminasConPMedicaNo"
							value="anfetaminasConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anfetaminasConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anfetaminasConPMedica"
							id="anfetaminasConPMedicaNsNc"
							value="anfetaminasConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anfetaminasConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Hipnóticos sin prescripción médica (Rohypnol, luminol, etc.)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hipnoticosSinPMedica"
							id="hipnoticosSinPMedicaSi"
							value="hipnoticosSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hipnoticosSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hipnoticosSinPMedica"
							id="hipnoticosSinPMedicaNo"
							value="hipnoticosSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hipnoticosSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hipnoticosSinPMedica"
							id="hipnoticosSinPMedicaNsNc"
							value="hipnoticosSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hipnoticosSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Hipnóticos con prescripción médica (Rohypnol, luminol, etc.)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hipnoticosConPMedica"
							id="hipnoticosConPMedicaSi"
							value="hipnoticosConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hipnoticosConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hipnoticosConPMedica"
							id="hipnoticosConPMedicaNo"
							value="hipnoticosConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hipnoticosConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hipnoticosConPMedica"
							id="hipnoticosConPMedicaNsNc"
							value="hipnoticosConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hipnoticosConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Ansiolíticos, Sedantes y Tranquilizante sin prescripción
					médica (Alplaz, Rivotril, Lexotanil, Valium, etc)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ansioliticosSedantesTranquilizanteSinPMedica"
							id="ansioliticosSedantesTranquilizanteSinPMedicaSi"
							value="ansioliticosSedantesTranquilizanteSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ansioliticosSedantesTranquilizanteSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ansioliticosSedantesTranquilizanteSinPMedica"
							id="ansioliticosSedantesTranquilizanteSinPMedicaNo"
							value="ansioliticosSedantesTranquilizanteSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ansioliticosSedantesTranquilizanteSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ansioliticosSedantesTranquilizanteSinPMedica"
							id="ansioliticosSedantesTranquilizanteSinPMedicaNsNc"
							value="ansioliticosSedantesTranquilizanteSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ansioliticosSedantesTranquilizanteSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Ansiolíticos, Sedantes y Tranquilizante con prescripción
					médica (Alplaz, Rivotril, Lexotanil, Valium, etc)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ansioliticosSedantesTranquilizanteConPMedica"
							id="ansioliticosSedantesTranquilizanteConPMedicaSi"
							value="ansioliticosSedantesTranquilizanteConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ansioliticosSedantesTranquilizanteConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ansioliticosSedantesTranquilizanteConPMedica"
							id="ansioliticosSedantesTranquilizanteConPMedicaNo"
							value="ansioliticosSedantesTranquilizanteConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ansioliticosSedantesTranquilizanteConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="ansioliticosSedantesTranquilizanteConPMedica"
							id="ansioliticosSedantesTranquilizanteConPMedicaNsNc"
							value="ansioliticosSedantesTranquilizanteConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="ansioliticosSedantesTranquilizanteConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>

				<h3 className={style.h3}>
					Antidepresivos sin prescripción médica (Foxetin, Prozac,
					Zoloft, etc)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="antidepresivosSinPMedica"
							id="antidepresivosSinPMedicaSi"
							value="antidepresivosSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="antidepresivosSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="antidepresivosSinPMedica"
							id="antidepresivosSinPMedicaNo"
							value="antidepresivosSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="antidepresivosSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="antidepresivosSinPMedica"
							id="antidepresivosSinPMedicaNsNc"
							value="antidepresivosSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="antidepresivosSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Antidepresivos con prescripción médica (Foxetin, Prozac,
					Zoloft, etc)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="antidepresivosConPMedica"
							id="antidepresivosConPMedicaSi"
							value="antidepresivosConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="antidepresivosConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="antidepresivosConPMedica"
							id="antidepresivosConPMedicaNo"
							value="antidepresivosConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="antidepresivosConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="antidepresivosConPMedica"
							id="antidepresivosConPMedicaNsNc"
							value="antidepresivosConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="antidepresivosConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Anticolinérgicos sin prescripción médica
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anticolinergicosSinPMedica"
							id="anticolinergicosSinPMedicaSi"
							value="anticolinergicosSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anticolinergicosSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anticolinergicosSinPMedica"
							id="anticolinergicosSinPMedicaNo"
							value="anticolinergicosSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anticolinergicosSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anticolinergicosSinPMedica"
							id="anticolinergicosSinPMedicaNsNc"
							value="anticolinergicosSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anticolinergicosSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Anticolinérgicos con prescripción médica
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anticolinergicosConPMedica"
							id="anticolinergicosConPMedicaSi"
							value="anticolinergicosConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anticolinergicosConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anticolinergicosConPMedica"
							id="anticolinergicosConPMedicaNo"
							value="anticolinergicosConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anticolinergicosConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="anticolinergicosConPMedica"
							id="anticolinergicosConPMedicaNsNc"
							value="anticolinergicosConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="anticolinergicosConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>Hongos Alucinógenos</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hongosAlucinogenos"
							id="hongosAlucinogenosSi"
							value="hongosAlucinogenosSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hongosAlucinogenosSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hongosAlucinogenos"
							id="hongosAlucinogenosNo"
							value="hongosAlucinogenosNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hongosAlucinogenosNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="hongosAlucinogenos"
							id="hongosAlucinogenosNsNc"
							value="hongosAlucinogenosNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="hongosAlucinogenosNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>LSD</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="lsd"
							id="lsdSi"
							value="lsdSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="lsdSi">
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="lsd"
							id="lsdNo"
							value="lsdNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="lsdNo">
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="lsd"
							id="lsdNsNc"
							value="lsdNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label className={style.label} htmlFor="lsdNsNc">
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Estimulantes sin prescripción médica (Akatinol, Neuroactil,
					Ritalina, etc)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="estimulantesSinPMedica"
							id="estimulantesSinPMedicaSi"
							value="estimulantesSinPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="estimulantesSinPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="estimulantesSinPMedica"
							id="estimulantesSinPMedicaNo"
							value="estimulantesSinPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="estimulantesSinPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="estimulantesSinPMedica"
							id="estimulantesSinPMedicaNsNc"
							value="estimulantesSinPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="estimulantesSinPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Estimulantes con prescripción médica (Akatinol, Neuroactil,
					Ritalina, etc)
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="estimulantesConPMedica"
							id="estimulantesConPMedicaSi"
							value="estimulantesConPMedicaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="estimulantesConPMedicaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="estimulantesConPMedica"
							id="estimulantesConPMedicaNo"
							value="estimulantesConPMedicaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="estimulantesConPMedicaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="estimulantesConPMedica"
							id="estimulantesConPMedicaNsNc"
							value="estimulantesConPMedicaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="estimulantesConPMedicaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Según su presunción, ¿el paciente consumió alguna sustancia
					psicoactiva?
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="presuncionPacienteConsumioSustanciaPsicoactiva"
							id="presuncionPacienteConsumioSustanciaPsicoactivaSi"
							value="presuncionPacienteConsumioSustanciaPsicoactivaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="presuncionPacienteConsumioSustanciaPsicoactivaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="presuncionPacienteConsumioSustanciaPsicoactiva"
							id="presuncionPacienteConsumioSustanciaPsicoactivaNo"
							value="presuncionPacienteConsumioSustanciaPsicoactivaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="presuncionPacienteConsumioSustanciaPsicoactivaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="presuncionPacienteConsumioSustanciaPsicoactiva"
							id="presuncionPacienteConsumioSustanciaPsicoactivaNsNc"
							value="presuncionPacienteConsumioSustanciaPsicoactivaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="presuncionPacienteConsumioSustanciaPsicoactivaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
				<h3 className={style.h3}>
					Según su presunción, ¿el consumo de sustancias psicoativas
					por parte del paciente tiene realción con el motivo de
					consulta?
				</h3>
				<div className={style.divTresRadio}>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsulta"
							id="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaSi"
							value="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaSi"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaSi"
						>
							Sí
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsulta"
							id="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNo"
							value="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNo"
							type="radio"
							checked
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNo"
						>
							No
						</label>
					</div>
					<div className={style.divDosRadio}>
						<input
							className={style.inputRadio}
							name="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsulta"
							id="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNsNc"
							value="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNsNc"
							type="radio"
							onChange={(e) => handleChange(e)}
						/>
						<label
							className={style.label}
							htmlFor="presuncionConsumoSustanciasPsicoactivasRelacionMotivoConsultaNsNc"
						>
							NS/NC
						</label>
					</div>
				</div>
			</section>
		</>
	);
}
