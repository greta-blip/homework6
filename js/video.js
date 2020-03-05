var video;

function getVid(){
	video = document.querySelector("#myVideo");

}

function playVid() {
	video.play();
	let vol= document.querySelector("#volume").innerHTML
	vol.innerHTML= video.volume *100+ "%";
	console.log("Play Video");
}

function pauseVid() {
	video.pause();
	console.log("Pause Video");
}

function decreaseSpeed() {
	var slow_speed  = document.querySelector("#myVideo");
	slow_speed.playbackRate -=.2;
  console.log("Speed is "+ video.playbackRate);

}

function increaseSpeed() {
	var increase_speed  = document.querySelector("#myVideo");
	increase_speed.playbackRate +=.25;
	console.log("Speed is "+ video.playbackRate);
}

function skipAhead() {
	var move_foward = document.querySelector("#myVideo")
	if (video.ended){
		video.pause();
		video.currentTime = 0;
		video.play();
	}
	else {

	move_foward.currentTime +=60;
}
	console.log("Current location is "+ video.currentTime);
}

function mute() {
	if (video.muted){
		video.muted = false;
		document.querySelector("#mute").innerHTML = "mute";
		console.log("mute");
	}
	else{
		  video.muted = true;
		  document.querySelector("#mute").innerHTML = "Unmuted";
			console.log("Unmuted");}

}

function changeVolume() {
	video.volume = volumeSlider.value/100;
	document.querySelector("#volume").innerHTML= volumeSlider.value + "%";
	console.log("Volume is" + volumeSlider.value);
}


function gray() {
	var gray_vid = document.getElementById("myVideo");
  gray_vid.classList.toggle("grayscale");
	console.log("In grayscale")
}

function color() {
	var color_vid = document.getElementById("myVideo");
  color_vid.classList.toggle("grayscale");
	/**document.getElementById("myVideo").style.filter = "grayscale(100%)";**/
	console.log("In color")
}

/** resources all taken from w3schools and  from lecture  videos
it  was brutal,  it took me all weekend to get my video to play and I couldn't
get my buttons to show up**/
