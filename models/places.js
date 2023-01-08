const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
name: {String, required: true},
pic: String,
cuisines: {String, required: true},
city: {String, default: 'Anytown'},
state: {String, default: 'USA'},
founded: {Number}

})

module.exports = mongoose.model('Place', placeSchema)

























// module.exports =  [
//     {
//         name:'Indian Food Place',
//         city:'Mohali',
//         state:'Panjab',
//         cuisines:'Chicken Tikka',
//         image:'/images/indianFood.jpg'

//     },

//     {
//         name:'Chinese Food Place',
//         city:'Yonkers',
//         state:'New York',
//         cuisines:'Orange Chicken',
//         image:'/images/orangeChicken.jpg'
//     },
//     {
//         name:'Burger Food Place',
//         city:'Bronx',
//         state:'New York',
//         cuisines:'Burger',
//         image:'/images/burgerImage.webp'
//     }
// ]