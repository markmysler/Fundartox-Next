export default function addMultipleSelectOptions() {
	const selectedOptions = Array.from(
		document.getElementById("diagnosticosPresuntivos").selectedOptions
	).map(({ value }) => value);
	return selectedOptions;
}
