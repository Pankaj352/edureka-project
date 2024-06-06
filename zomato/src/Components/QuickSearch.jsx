import React, { Component } from "react";
import "../Styles/Wallpaper.css";

import MealTypeItem from "./MealTypeItem";

export default class QuickSearch extends Component {
  constructor() {
    super();
    this.state = {
      mealtypes: [],
    };
  }

  componentDidMount() {
    fetch("http://localhost:3001/zomato/mealtype", { method: "GET" })
      .then((response) => response.json())
      .then((data) => this.setState({ mealtypes: data.data }));
  }

  render() {
    let quickSearchList =
      this.state.mealtypes.length &&
      this.state.mealtypes.map((item) => (
        <MealTypeItem item={item} key={item.name}></MealTypeItem>
      ));
    return (
      <div>
        <div className="quicksearch">
          <p className="quicksearchHeading">Quick Searches</p>
          <p className="quicksearchSubHeading">
            Discover restaurants by type of meal
          </p>
          <div className="container-fluid">
            <div className="row">{quickSearchList}</div>
          </div>
        </div>
      </div>
    );
  }
}
