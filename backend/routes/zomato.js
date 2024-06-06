//imports
const express=require('express')
const Router=express.Router()
const restaurantcontroller= require('../controllers/restaurant')
const locationController= require('../controllers/location')
const mealtypeController= require('../controllers/mealtype')

//configure all routes
Router.get('/restaurants',restaurantcontroller.getAllRestaurants)
Router.get('/restaurants/:city',restaurantcontroller.getAllRestaurantsBycity)
Router.post('/restaurants/filter/:pageNo',restaurantcontroller.getAllRestaurantsByFilter)
Router.get('/restaurantDetails/:name',restaurantcontroller.getAllRestaurantDetails)

//location route
Router.get('/locations',locationController.getAllLocations)

//mealType route
Router.get('/mealtype',mealtypeController.getAllMealtypes)

module.exports=Router