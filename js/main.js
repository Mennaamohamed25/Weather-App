

//FIRST CARD
let today =document.getElementById('day');
let month =document.getElementById('month');
let currentLocation =document.getElementById('currentLocation');
let todayDgree =document.getElementById('todayDgree');
let weatherIcon = document.getElementById('weatherIcon');
let weatherText =document.getElementById('weatherText');
let humidity = document.getElementById('humidity');
let wind = document.getElementById('wind');
let compass = document.getElementById('compass');
let days = ['Sunday' , 'Monday' , 'Tuesday' , 'Wednesday' , 'Thursday' , 'Friday' ,'Saturday' ];
let months = ['Jan' , 'Feb' , 'March' , 'April', 'May' , 'June' , 'July' , 'Aug' , 'Sep' , 'Oct' ,'Nov' , 'Dec'];
 let date = new Date();


 
//NEXT CARDS
let nextDay = document.getElementsByClassName('nextDay');
let nextIcone = document.getElementsByClassName('nextIcone');
let nextDegree = document.getElementsByClassName('nextDegree');
let smallDegree = document.getElementsByClassName('smallDegree');
let nextDesc = document.getElementsByClassName('nextDesc');



//SEARCH

let search = document.getElementById('search');

currentCity = 'cairo';


//GET API
//FIRST CARD

async function apiWeatherData() {
     apiResponse=await fetch(`https://api.weatherapi.com/v1/forecast.json?key=7d77b96c972b4d119a3151101212704&q=${currentCity}&days=4`)
     responseData = await apiResponse.json()
     console.log(responseData);
     displayTodayWeather();
     displayNextDays();
}
apiWeatherData();

//DAYS
function displayTodayWeather() {
    today.innerHTML=days[date.getDay()];
    month.innerHTML=`${date.getDate()} ${months[date.getMonth()]}`;
    currentLocation.innerHTML = responseData.location.name;
    todayDgree.innerHTML = responseData.current.temp_c;
    weatherIcon.setAttribute('src' , `https:${responseData.current.condition.icon}`);
    weatherText.innerHTML = responseData.current.condition.text;
    humidity.innerHTML = responseData.current.humidity;
    wind.innerHTML = responseData.current.wind_kph;
    compass.innerHTML = responseData.current.wind_dir;
   
}


//FIRST CARD
function displayNextDays() {
    for (let i = 0; i < nextDay.length; i++) {
        nextDay[i].innerHTML=days[new Date(responseData.forecast.forecastday[i+1].date).getDay()] ;
        nextIcone[i].setAttribute('src',`https:${responseData.forecast.forecastday[i+1].day.condition.icon}`);
        nextDegree[i].innerHTML = responseData.forecast.forecastday[i+1].day.maxtemp_c;
        smallDegree[i].innerHTML = responseData.forecast.forecastday[i+1].day.mintemp_c;
        nextDesc[i].innerHTML = responseData.forecast.forecastday[i+1].day.condition.text;
       
    }
}



//SEARCH

search.addEventListener('keyup',function name() {
    currentCity = search.value
    console.log(currentCity);
    apiWeatherData(currentCity);
})
