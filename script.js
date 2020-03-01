// dom elements
var clockText = document.getElementById("timeEvent");
var clockImage = document.getElementById("lolcat");
var partyButton = document.getElementById("partyTimeButton");
var wakeUpTimeSelector = document.getElementById("wakeUpTimeSelector");
var lunchTimeSelector = document.getElementById("lunchTimeSelector");
var napTimeSelector = document.getElementById("napTimeSelector");

// default image settings
var wakeupImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat1.jpg";
var napImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat3.jpg";
var lunchImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat2.jpg";
var partyImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat4.jpg";
var normalImage = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/cat5.jpg";

// working variables
var messageText;
var image = normalImage;
var time = new Date().getHours();

// default clock settings
var noon = 12;
var evening = 18; // 6PM
var wakeupTime = 9; // 9AM
var lunchTime = 12; // 12PM
var partyTime = 17; // 5PM
var napTime = lunchTime + 2; // 2PM
var isPartyTime = false;

var updateClock = function()
{
	if (time == partyTime){
		messageText = "IZ PARTEE TIME!!";
		image = partyImage;
	} else if (time == napTime) {
		messageText = "IZ NAP TIME...";
		image = napImage;
	} else if (time == lunchTime) {
		messageText = "IZ NOM NOM NOM TIME!!";
		image = lunchImage;
	} else if (time == wakeupTime) {
		messageText = "IZ TIME TO GETTUP.";
		image = wakeupImage;
	} else if (time < noon) {
		messageText = "Good morning!";
		image = normalImage;
	} else if (time > evening) {
		messageText = "Good Evening!";
		image = normalImage;
	} else {
		messageText = "Good afternoon!";
		image = normalImage;
	}

	clockText.innerText = messageText;
	clockImage.src = image;
	
	showCurrentTime();
};

var showCurrentTime = function()
{
    // display the string on the webpage
    var clock = document.getElementById('clock');
 
    var currentTime = new Date();
 
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var meridian = "AM";
 
    // Set hours 
    if (hours >= noon) 
    { 
        meridian = "PM"; 
    }  
    if (hours > noon) 
    { 
        hours = hours - 12; 
    }
 
    // Set Minutes
    if (minutes < 10)
    {
        minutes = "0" + minutes;
    }
 
    // Set Seconds
    if (seconds < 10)
    {
        seconds = "0" + seconds;
    }
 
    // put together the string that displays the time
    var clockTime = hours + ":" + minutes + ":" + seconds + " " + meridian + "!";
 
    clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

var partyEvent = function() {
   console.log("partyEvent fired!");
   if (isPartyTime === false) {
		isPartyTime = true;
		time = partyTime;
	   	partyButton.innerText = "Party Over :(";
		partyButton.style.backgroundColor = "#0A8DAB";  
   }
   else {
		isPartyTime = false;
		time = new Date().getHours();
		partyButton.innerText = "PARTY TIME!";
		partyButton.style.backgroundColor = "#222"; 
   }
	updateClock();
};
partyButton.addEventListener("click", partyEvent);

var setWakeUpTime = function() {
	wakeupTime = wakeUpTimeSelector.value;
};
wakeUpTimeSelector.addEventListener("change", setWakeUpTime);

var setLunchTime = function() {
	lunchTime = lunchTimeSelector.value;
};
lunchTimeSelector.addEventListener("change", setLunchTime);

var setNapTime = function() {
	napTime = napTimeSelector.value;
};
napTimeSelector.addEventListener("change", setNapTime);