//console.log("hello")

const title = document.getElementById('title')
const button = document.getElementById('sendMe')
const input = document.getElementById('location')
const summary = document.getElementById('summary')
const temp = document.getElementById('temp')
const loc = document.getElementById('loc')

button.addEventListener('click', async () => {

  summary.textContent= "Loading..."  
  temp.textContent= ""

let response = await fetch (`http://localhost:3004/weather?location=${input.value}`)
let data = await response.json()

loc.textContent = data.placeData
summary.textContent = data.weatherData.summary;
temp.textContent = `${Math.floor((data.weatherData.temperature -32) *5/9)} °C`
})


