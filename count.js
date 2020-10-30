window.onload = function() {
	countDownFromTime('Mar 8, 2021 00:00:00', 'countdownId');
};

function countDownFromTime(countDownDate, id) {
	countDownDate = new Date(countDownDate).getTime();

	let now = new Date(),
		timeDifference = countDownDate - now;

	let secondsInADay = 60 * 60 * 1000 * 24,
		secondsInAHour = 60 * 60 * 1000;

	days = Math.floor(timeDifference / secondsInADay * 1);
	hours = Math.floor((timeDifference % secondsInADay) / secondsInAHour * 1);
	mins = Math.floor(((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000) * 1);
	secs = Math.floor((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000 * 1);

	let idEl = document.querySelector('#countdownId');
	idEl.querySelectorAll('.days')[0].innerHTML = days;
	idEl.querySelectorAll('.hours')[0].innerHTML = hours;
	idEl.querySelectorAll('.minutes')[0].innerHTML = mins;
	idEl.querySelectorAll('.seconds')[0].innerHTML = secs;

	clearTimeout(countDownFromTime.intervel);
	countDownFromTime.intervel = setTimeout(function() {
		countDownFromTime(countDownDate, id);
	}, 1000);
}
