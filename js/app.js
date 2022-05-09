const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const wheather = document.querySelector(`#weather`)





// const API = `http://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `pngwing.com.png`

const getWheather = async (city) => {
    weather.innerHTML = `<h2> Loading..... <h2>`
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
    const response = await fetch(url);
    const data = await response.json()
    return showWeather(data)
}

const showWeather = (data) => {

    if(data.cod == "404"){
        weather.innerHTML = `<h2> City NOt Found <h2>`
        return;
    }


    weather.innerHTML =`
    <div>
          <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}.png";
    </div>

    <div>
        <h2>${data.main.temp}°</h2>
        <h4>${data.weather[0].main}</h4>
    </div>
    `
}

form.addEventListener(
    "submit",
    function(event){
        getWheather(search.value)
        event.preventDefault();

    }
)




