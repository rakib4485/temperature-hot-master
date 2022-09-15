const api_key = '0f6176594696793234e947e11e75f8b8';

const loadTemprature = city => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`)
        .then(res => res.json())
        .then(data => setTemperature(data))
}

const setInnerTextById = (id, text) => {
    document.getElementById(id).innerText = text;
}

const setTemperature = data => {
    console.log();
    setInnerTextById('temparature', data.main.temp);
    setInnerTextById('lead', data.weather[0].main);

}

const searchinProcess = () => {
    const searchField = document.getElementById('search-field').value;
    console.log(searchField)
    setInnerTextById('location', searchField);
    loadTemprature(searchField);
}

document.getElementById('search-btn').addEventListener('click', function () {
    searchinProcess();
})
document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === "Enter") {
     searchinProcess();
    }
})

loadTemprature('dhaka')