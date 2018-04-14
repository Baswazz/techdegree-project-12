// Media element player settings
$('video').mediaelementplayer({
	features: ['playpause', 'current', 'progress', 'duration', 'volume', 'fullscreen'], 
	stretching: 'responsive',
});

// Define variables
const video   = document.getElementsByTagName('video')[0];
const caption = document.querySelectorAll('p.caption span');

// Listen for time updates in the video
video.addEventListener('timeupdate', () => {
	// Loop through the caption items
	for (let i = 0; i < caption.length; i += 1) {
		let startTime = parseFloat(caption[i].dataset.start);
		let endTime = parseFloat(caption[i].dataset.end);

		// If the start/end times match highlight caption
		if (video.currentTime > startTime && video.currentTime < endTime) {
			caption[i].classList.add('highlight');
		} else {
			caption[i].classList.remove('highlight');
		}

		// Listen for clicks and move to caption startTime
		caption[i].addEventListener('click', () => {
			video.currentTime = startTime;
			video.play();
		});
	}
});