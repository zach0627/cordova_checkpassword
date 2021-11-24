import '../css/index.css'

let correctColor = "#e0ffe0";
let wrongColor = "#ffe0e0";
let secretsRevealed = false;
const passwordField = document.getElementById('password');
const secretsArea = document.getElementById('secrets');


// 先load startLoad function 增加監聽器
window.onload = (event) => {
	startLoad()
};

function startLoad() {
	//增加監聽
	document.addEventListener('deviceready', onDeviceReady, false);
}

function onDeviceReady() {
	passwordField.focus();
	checkPassword();

}

//oninput會觸發check
passwordField.addEventListener('input', checkPassword, true);

// 檢查是否為secret
function checkPassword() {
	var password = passwordField.value;
	if (password === "secret") {
		passwordField.style.backgroundColor = correctColor;
		revealSecrets();
	}
	else {
		passwordField.style.backgroundColor = wrongColor;
		if (secretsRevealed) clearSecrets();
	}
}

function revealSecrets() {
	secretsArea.value = "Correct Password";
	secretsRevealed = true;
}

function clearSecrets() {
	secretsArea.value = "";
	secretsRevealed = false;
}

