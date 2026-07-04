const apiKey = "81cb51ef84c42b4bfa2d0e4b0a98a8d2";

async function getWeather(){

const city=document.getElementById("city").value;

if(city===""){

alert("Please enter city");

return;

}

const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

try{

const response=await fetch(url);

const data=await response.json();

if(data.cod=="404"){

document.getElementById("weather").innerHTML=

"<h3>City Not Found</h3>";

return;

}

const weather=`

<h2>${data.name}</h2>

<img src="c:\Users\padma\OneDrive\Pictures\Screenshots\Screenshot (7).png">

<p><b>Temperature:</b> ${data.main.temp} °C</p>

<p><b>Humidity:</b> ${data.main.humidity}%</p>

<p><b>Condition:</b> ${data.weather[0].description}</p>

`;

document.getElementById("weather").innerHTML=weather;

}

catch(error){

document.getElementById("weather").innerHTML=

"<h3>Error fetching data</h3>";

}

}