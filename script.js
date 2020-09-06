setInterval(setClock, 1000);

const hourHand = document.querySelector("[data-hour-hand]");
const minuteHand = document.querySelector("[data-minute-hand]");
const secondHand = document.querySelector("[data-second-hand]");

function setClock() {
	const currentDate = new Date();

	const secondsRatio = currentDate.getSeconds() / 60;

	const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
	const hoursRatio = (minutesRatio + currentDate.getHours()) / 12;

	setRotation(secondHand, secondsRatio);
	setRotation(minuteHand, minutesRatio);
	setRotation(hourHand, hoursRatio);
}

function setRotation(element, rotationRatio) {
	element.style.setProperty("--rotation", rotationRatio * 360);
}

function checkAMPM() {
	var hours = new Date().getHours();
	var hours = (hours + 24 - 2) % 24;
	var mid = "am";
	if (hours == 0) {
		//At 00 hours we need to show 12 am
		hours = 12;
	} else if (hours > 12) {
		hours = hours % 12;
		mid = "pm";
	}
	if (mid == "pm") {
		//images loading
		document.getElementById("dayNight").src = "sun.png";
	} else {
		document.getElementById("dayNight").src = "moon.png";
	}
}

setClock();
checkAMPM();
