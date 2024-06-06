import React, { Component } from "react";
import "../Styles/Wallpaper.css";
import homepageimg from "../Assets/homepageimg.png";
import { Link } from "react-router-dom";

export default class Wallpaper extends Component {
  constructor() {
    super();
    console.log(" wallpaper constructor getting called...");
    this.state = {
      locations: [],
      restaurants: [],
    };
  }

  componentDidMount() {
    //call my api
    fetch("http://localhost:3001/zomato/locations", { method: "GET" })
      .then((response) => response.json())
      .then((data) => this.setState({ locations: data.data }));
  }

  fetchRestaurants = (event) => {
    fetch(`http://localhost:3001/zomato/restaurants/${event.target.value}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        this.setState({ restaurants: data.data });
        console.log(data.data);
      });
  };

  render() {
    let locationOptions =
      this.state.locations.length &&
      this.state.locations.map((item) => (
        <option key={item.name} value={item.city_id}>
          {item.name}
        </option>
      ));
    let restaurantsList = this.state.restaurants.length && (
      <ul>
        {this.state.restaurants.map((item) => (
          <li key={item.name}>
            <Link to={`/restaurantDetails/${item.name}`}>{item.name}</Link>
          </li>
        ))}
      </ul>
    );
    return (
      <div>
        <div>
          <img src={homepageimg} width="100%" height="450" />

          <div className="logo">
            <p>e!</p>
          </div>
          <div className="headings">Find the best restaurants, cafes, bars</div>
          <div className="locationSelector">
            <select
              className="locationDropdown"
              onChange={this.fetchRestaurants}
            >
              <option value="0">Select</option>
              {locationOptions}
            </select>
            <div id="notebooks">
              <input
                className="restaurantsinput"
                type="text"
                placeholder="Search Restaurant"
              />
              {restaurantsList}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
