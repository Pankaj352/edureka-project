import React from "react";
import "../Styles/Filter.css";
const Filter = () => {
  return (
    <div>
      <div id="myId" className="heading-filter">
        Breakfast Places in Delhi
      </div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3 col-md-3 col-lg-3">
            <div className="filter-options">
              <span
                className="glyphicon glyphicon-th-list toggle-span"
                data-toggle="collapse"
                data-target="#demo"
              ></span>
              <div id="demo" className="collapse show">
                <div className="filter-heading">Filters</div>
                <div className="Select-Location">Select Location</div>
                <select className="Rectangle-2236">
                  <option>Select</option>
                </select>
                <div className="Cuisine">Cuisine</div>
                <div>
                  <input type="checkbox" name="North Indian" />
                  <span className="checkbox-items">North Indian</span>
                </div>
                <div>
                  <input type="checkbox" name="South Indian" />
                  <span className="checkbox-items">South Indian</span>
                </div>
                <div>
                  <input type="checkbox" name="Chineese" />
                  <span className="checkbox-items">Chineese</span>
                </div>
                <div>
                  <input type="checkbox" name="Fast Food" />
                  <span className="checkbox-items">Fast Food</span>
                </div>
                <div>
                  <input type="checkbox" name="Street Food" />
                  <span className="checkbox-items">Street Food</span>
                </div>
                <div className="Cuisine">Cost For Two</div>
                <div>
                  <input type="radio" name="cost" />
                  <span className="checkbox-items">Less than &#8377; 500</span>
                </div>
                <div>
                  <input type="radio" name="cost" />
                  <span className="checkbox-items">
                    &#8377; 500 to &#8377; 1000
                  </span>
                </div>
                <div>
                  <input type="radio" name="cost" />
                  <span className="checkbox-items">
                    &#8377; 1000 to &#8377; 1500
                  </span>
                </div>
                <div>
                  <input type="radio" name="cost" />
                  <span className="checkbox-items">
                    &#8377; 1500 to &#8377; 2000
                  </span>
                </div>
                <div>
                  <input type="radio" name="cost" />
                  <span className="checkbox-items">&#8377; 2000 +</span>
                </div>
                <div>
                  <input type="radio" name="cost" />
                  <span className="checkbox-items">All</span>
                </div>
                <div className="Cuisine">Sort</div>
                <div>
                  <input type="radio" name="sort" />
                  <span className="checkbox-items">Price low to high</span>
                </div>
                <div>
                  <input type="radio" name="sort" />
                  <span className="checkbox-items">Price high to low</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-sm-9 col-md-9 col-lg-9 scroll">
            <div className="Item">
              <div className="row pl-1">
                <div className="col-sm-4 col-md-4 col-lg-4">
                  <img
                    className="img"
                    src={require("../Assets/breakfast.jpg")}
                  />
                </div>
                <div className="col-sm-8 col-md-8 col-lg-8">
                  <div className="rest-name">Empire Restaurant</div>
                  <div className="res-location">Rajajinagar</div>
                  <div className="rest-address">Bangalore</div>
                </div>
              </div>
              <hr />
              <div className="row padding-left">
                <div className="col-sm-12 col-md-12 col-lg-12">
                  <div className="rest-address">CUISINES : </div>
                  <div className="rest-address">COST FOR TWO : </div>
                </div>
              </div>
            </div>
            {/* <div className="noData"> No Data Found</div> */}
          </div>
          <div>
            <div className="pagination">
              <a href="#">&laquo;</a>

              <a href="#">&raquo;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Filter;
