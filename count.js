window.onload = function() {
	countUpFromTime('Feb 29, 2020 23:57:00', 'countup1');
};

function countUpFromTime(countFrom, id) {
	countFrom = new Date(countFrom).getTime();

	var now = new Date(),
		countFrom = new Date(countFrom),
		timeDifference = now - countFrom;

	var secondsInADay = 60 * 60 * 1000 * 24,
		secondsInAHour = 60 * 60 * 1000;

	days = Math.floor(timeDifference / secondsInADay * 1);
	hours = Math.floor((timeDifference % secondsInADay) / secondsInAHour * 1);
	mins = Math.floor(((timeDifference % secondsInADay) % secondsInAHour) / (60 * 1000) * 1);
	secs = Math.floor((((timeDifference % secondsInADay) % secondsInAHour) % (60 * 1000)) / 1000 * 1);

	let idEl = document.querySelector('#countup1');
	idEl.querySelectorAll('.days')[0].innerHTML = days;
	idEl.querySelectorAll('.hours')[0].innerHTML = hours;
	idEl.querySelectorAll('.minutes')[0].innerHTML = mins;
	idEl.querySelectorAll('.seconds')[0].innerHTML = secs;

	clearTimeout(countUpFromTime.intervel);
	countUpFromTime.intervel = setTimeout(function() {
		countUpFromTime(countFrom, id);
	}, 1000);
}
