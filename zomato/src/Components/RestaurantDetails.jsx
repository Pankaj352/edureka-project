import React,{useState,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import '../Styles/Details.css' 

export default function RestaurantDetails() {

    const{rName}=useParams()
    const[restaurant,setRestaurant]=useState({})


    useEffect(() => {
        fetch(`http://localhost:3001/zomato/restaurantDetails/${rName}`,{method:'GET'})
        .then(response=>response.json())
        .then(data=>setRestaurant(data.data))
  
        }
    , [])
    
    
    const{name,thumb,cost,address,Cuisine}=restaurant
    const cuisineValues= !(Cuisine==undefined ) && Cuisine.length && Cuisine.map((item)=><div class="value">{item.name}</div>)
    return (
        <div>
        <div>
            {/* Showcasing the First Image and rest will be showed in the Carousal  */}
            <img src={thumb} width="100%" height="500px" />
            <button class="gallery-button">Click to see Image </button>
        </div>
        <button className="btn btn-danger" style={{ float: 'right', margin: '15px', backgroundColor: '#ce0505' }}>Place Online Order</button>
        {/* Showing 2 Tabs on screen as Overview and Contact with details in respective sections*/}
        <div class="heading">{name}</div>
        <div class="tabs">
            {/* Tab-1 */}
            <div class="tab">
                <input type="radio" id="tab-1" name="tab-group-1" checked />
                <label for="tab-1">Overview</label>

                <div class="content">
                    <div class="about">About the place</div>
                    <div class="head">Cuisine</div>
                    {cuisineValues}
                    <div class="head">Average Cost</div>
                    <div class="value">&#8377; {cost}</div>
                </div>
            </div>
            {/* Tab-2 */}
            <div class="tab">
                <input type="radio" id="tab-2" name="tab-group-1" />
                <label for="tab-2">Contact</label>
                <div class="content">
                    <div class="head">Phone Number</div>
                    <div class="value">+91-9876543217</div>
                    <div class="head">{name}</div>
                    <div class="value">{address}</div>
                </div>
            </div>
        </div>
    </div>
    )
}
