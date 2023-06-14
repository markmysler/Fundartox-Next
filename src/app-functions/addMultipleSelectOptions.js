export default function addMultipleSelectOptions() {
	const selectedOptions = Array.from(
		document.getElementById("codigos-cie-10").selectedOptions
	).map(({ value }) => value);
	return selectedOptions;
}
