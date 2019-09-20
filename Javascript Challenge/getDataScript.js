// Create a request variable and assign a new XMLHttpRequest object to it.
var request = new XMLHttpRequest();

// Open a new connection, using the GET request on the URL endpoint
request.open('GET', 'https://api.nasa.gov/planetary/apod?api_key=jT9a9djmlXvr6QGYLXet52uTP4ycNUGYnqdQeCA7', true);


request.onload = function(){
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	var title = data.title;
	var description = data.explanation;
	var img = data.url;
	var index = img.lastIndexOf("/")+1;
	var imageName = img.substr(index);
	var copyright = data.copyright;
	
	console.log(data);
	
	// update html page with the data
	document.getElementById("title").innerHTML = title;
	document.getElementById("description").innerHTML = description;
	document.getElementById("theImg").src = img;
	document.getElementById("imageName").innerHTML = imageName;
	document.getElementById("copyright").innerHTML = copyright;
}
// send request
request.send();

function requestDate(){
	// requested date
	var reqDate = document.getElementById("inputDate").value;

	// Create a request variable and assign a new XMLHttpRequest object to it.
	var req = new XMLHttpRequest();
	
	// API url
	var url = "https://api.nasa.gov/planetary/apod?api_key=jT9a9djmlXvr6QGYLXet52uTP4ycNUGYnqdQeCA7&date="+reqDate;
	
	// alter url
	//url += "&date="+reqDate;

	// Open a new connection, using the GET request on the URL endpoint
	req.open('GET', url, true);
	
	req.onload = function(){
	// Begin accessing JSON data here
	var data = JSON.parse(this.response);
	var title = data.title;
	var description = data.explanation;
	var img = data.url;
	var index = img.lastIndexOf("/")+1;
	var imageName = img.substr(index);
	var copyright = data.copyright;
	
	// update html page with the data
	document.getElementById("title").innerHTML = title;
	document.getElementById("description").innerHTML = description;
	document.getElementById("theImg").src = img;
	document.getElementById("imageName").innerHTML = imageName;
	document.getElementById("copyright").innerHTML = copyright;
}
// send request
req.send();
}