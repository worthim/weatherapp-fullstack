const {getWeather} = require('./getWeather')
const {getLocation} = require('./getLocation')



const main = async (place) => {
    const location = await getLocation(place)
    const weather = await getWeather(location)
    return { weatherData : weather,
        placeData: location.name}
}

module.exports = {
    main
}




















// request({url:`https://api.darksky.net/forecast/${apikey}/37.8267,-122.4233`,json:true},(error, response)=> {
//     if (error){
//         console.log(error)
//      } else {
//                 const data = response.body
//                 console.log({temp:data.currently.temperature})
                
            
//         }
// })