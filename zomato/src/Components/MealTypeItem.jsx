import React, { Component } from 'react'

export default class MealTypeItem extends Component {
    render() {
        const {name,content,image}=this.props.item
        return (
            <div className="col-sm-12 col-md-12 col-lg-4">
            <div className="tileContainer">
                <div className="tileComponent1">
                    <img src={require('../' + image)} height="150" width="140" />
                    <div className="componentHeading">
                        {name}
                    </div>
                    <div className="componentSubHeading">
                    {content}
                    </div>
                </div>
            </div>
        </div>
        )
    }
}
