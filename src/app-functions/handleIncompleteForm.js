function saveIncompleteForm(object) {
	let existing = Object.entries(localStorage);
	let RESArr = existing.filter((item) => item[0] === "INC-RES");
	if (RESArr.length === 0) {
		window.localStorage.setItem("INC-RES", JSON.stringify(object));
	}
}
function getIncompleteForm() {
	let existing = Object.entries(localStorage);
	let RESArr = existing.filter((item) => item[0] === "INC-RES");
	if (RESArr.length !== 0) {
		return JSON.parse(RESArr[0][1]);
	}
}
function deleteIncompleteForm() {
	localStorage.removeItem("INC-RES");
}

export { saveIncompleteForm, getIncompleteForm, deleteIncompleteForm };
