function initAJAX() {
	var xmlHttpRequest;
	
	if (window.XMLHttpRequest) {
	    // code for modern browsers
		xmlHttpRequest = new XMLHttpRequest();
	 } else {
	    // code for old IE browsers
		 xmlHttpRequest = new ActiveXObject("Microsoft.XMLHTTP");
	}
	
	return xmlHttpRequest;
}

// get wheather by using zipcode
function getWeatherByZip(){	
	
	// console.log("Using The Pure JavaScript");
	
	var zipCode = document.getElementById("zipcode").value;
	var myApiKey = "eccd0cc4a2bdb575839f516d7cb31567";
	
	var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=" + myApiKey;
	console.log(url);
	
	var AJAX = initAJAX();
	AJAX.open("GET", url, true);
	AJAX.send();
	
	AJAX.onreadystatechange = processResponse;
	
	function processResponse () {
		if(AJAX.readyState == 4 && AJAX.status == 200){
			// console.log(AJAX.responseText);
			var WeatherResponse = JSON.parse(AJAX.responseText);
			console.log(WeatherResponse);
			var divTag = document.getElementById("content");
			
			var area = "<p><b>Area</b> : " + WeatherResponse.name + "</p>";
			var tempMin = "<p><b>Lowest temperature</b> : " + WeatherResponse.main.temp_min + "</p>";
			var tempMax = "<p><b>Highest temperature</b> : " + WeatherResponse.main.temp_max + "</p>";
			var weather = "<p><b>Weather</b> : " + WeatherResponse.weather[0].main + "</p>";
			var longitude = "<p><b>Longitude</b> : " + WeatherResponse.coord.lon + "</p>";
			var latitude = "<p><b>Latitude</b> : " + WeatherResponse.coord.lat + "</p>";
			
			divTag.innerHTML = area + tempMin + tempMax + weather + latitude + longitude;
		}
	}
	
}

// get nearby ten cites weather
$("document").ready(function() {
	
	// console.log("Using the JQuery getJSON function");
	
	$("#jquery-query").click(function(event) {
		var myApiKey = "eccd0cc4a2bdb575839f516d7cb31567";
		var latitude = document.getElementById("latitude").value;
		var longitude = document.getElementById("longitude").value;
		var url = "http://api.openweathermap.org/data/2.5/find?lat=" + latitude + "&lon=" + longitude + "&cnt=10&appid=" + myApiKey;
		
		console.log("The weather api get request is: ");
		console.log(url);
		
		// $("#currenturl").html(url);
		
		$.getJSON(url, function(response) {
			console.log(response);
			$("#content-jquery").html("<h3>10 nearby area weather reports based on your location:</h3>");

			var content = "<table><tr><th>Area</th><th>Latitude</th><th>Longitude</th><th>Weather</th><th>Lowest temperature</th><th>Heightest temperature</th></tr>";
			var count = 0;
			
			response.list.forEach(function(area) {
				
				count = count + 1;
				
				if (count == 10){
					content = content + "<tr><td>" + area.name + "</td><td>" + area.coord.lat + "</td><td>" + area.coord.lon + "</td><td>" + area.weather[0].description + "</td><td>" + area.main.temp_min + "</td><td>" + area.main.temp_max + "</td></tr></table>";
				} else {
					content = content + "<tr><td>" + area.name + "</td><td>" + area.coord.lat + "</td><td>" + area.coord.lon + "</td><td>" + area.weather[0].description + "</td><td>" + area.main.temp_min + "</td><td>" + area.main.temp_max + "</td></tr>";
				}
			});
			
			console.log(content)
			$("#content-jquery").append(content);
						
		});

	});
});

// help to get the user location by getting data from browser
$("document").ready(function() {
	
	// console.log("Get My Location");
	
	$("#getmylocation").click(function(event) {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(function(position) {
				$("#content-jquery").html("My Latitude: " + position.coords.latitude + "<br>My Longitude: " + position.coords.longitude);
				$("#latitude").val(position.coords.latitude);
				$("#longitude").val(position.coords.longitude);
			});
			
		} else {
			$("#content-jquery").html("Geolocation is not supported by this browser.");
		}

	});
});

// using jquery ajax function
$("document").ready(function(){
	
	// console.log("Using the JQuery ajax function");
	
	$("#ok").click(function(){
		var zipCode = $("#zipcode2").val();
		var myApiKey = "eccd0cc4a2bdb575839f516d7cb31567";
		var url = "http://api.openweathermap.org/data/2.5/weather?zip=" + zipCode + ",us&appid=" + myApiKey;
		console.log(url);
		
		$.ajax({
			url: url
		}).then(function(data){
			console.log(data);
			
			var area = "<p><b>Area</b> : " + data.name + "</p>";
			var tempMin = "<p><b>Lowest temperature</b> : " + data.main.temp_min + "</p>";
			var tempMax = "<p><b>Highest temperature</b> : " + data.main.temp_max + "</p>";
			var weather = "<p><b>Weather</b> : " + data.weather[0].main + "</p>";
			var longitude = "<p><b>Longitude</b> : " + data.coord.lon + "</p>";
			var latitude = "<p><b>Latitude</b> : " + data.coord.lat + "</p>";
			
			$("#content-jquery2").html(area + tempMin + tempMax + weather + latitude + longitude);
		})
	});
});





//$("#content-jquery").append("<table><tr><th>Area</th><th>Latitude</th><th>Longitude</th><th>Weather</th><th>Lowest temperature</th><th>Heightest temperature</th></tr>");

//$("#content-jquery").append("<tr>");
//$("#content-jquery").append("<td>" + area.name + "</td>");
//$("#content-jquery").append("<td>" + area.coord.lat + "</td>");
//$("#content-jquery").append("<td>" + area.coord.log + "</td>");
//$("#content-jquery").append("<td>" + area.weather[0].main + "</td>");
//$("#content-jquery").append("<td>" + area.main.temp_min + "</td>");
//$("#content-jquery").append("<td>" + area.main.temp_max + "</td>");
//$("#content-jquery").append("</tr>");
