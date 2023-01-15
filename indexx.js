
function showMessage(input, message, type,) {
	
	const msg = input.parentNode.querySelector("small");
	msg.innerText = message;
	
	input.className = type ? "success" : "error";
	return type;
}

function showError(input, message) {
	return showMessage(input, message, false);
}

function showSuccess(input) {
	return showMessage(input, "", true);
}

function hasValue(input, message) {
	if (input.value.trim() === "") {
		return showError(input, message);
	}
	return showSuccess(input);
}

function validatePhone(input, requiredMsg, invalidMsg) {
	
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	const phoneRegex = /^[6-9][0-9]{9}$/;
	const phone = input.value.trim();
	if (!phoneRegex.test(phone)) {
		return showError(input, invalidMsg);    
	}
	return true;
}
function validateID(input, requiredMsg, invalidMsg) {
	
	if (!hasValue(input, requiredMsg)) {
		return false;
	}
	const bitsidRegex = /^20[12][127890]([BD][1-5])?[ABD][1-8AB][PT]S[0-9]{4}P$/;
	const bitsid = input.value.trim();
	if (!bitsidRegex.test(bitsid)) {
		return showError(input, invalidMsg);
	}
	return true;
}

const form = document.querySelector("#myForm");

const ID_REQUIRED = "Please enter your BITS ID";
const ID_INVALID = "Please enter a correct BITS ID";
const PHONE_REQUIRED = "Please enter your Contact No.";
const PHONE_INVALID = "Please enter a correct phone no.";


function validateDate(d1,d2)
{
    if (d1.value > d2.value)
    {
        d2.style.border = "red solid 2px";
        return false;
    }
    return true;
}


form.addEventListener("submit", function (event) {

	event.preventDefault();

	
	let phoneValid = validatePhone(form.elements["c"], PHONE_REQUIRED, PHONE_INVALID);
    let idValid = validateID(form.elements["bitsid"], ID_REQUIRED, ID_INVALID);
    let dateValid = validateDate(form.elements["date1"],form.elements["date2"]);
    if (idValid && phoneValid && dateValid)
    {
        form.submit()
    }
});

