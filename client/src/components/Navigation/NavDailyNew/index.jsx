import React, { Component } from 'react';
import {withRouter} from "react-router-dom";

const data = [
  {
    "category_id": 1,
    "parent_id": 0,
    name: 'women',
    categories: [
      {
        "category_id": 10,
        "parent_id": 1,
        name: "tops",
        categories: [
          {
            "category_id": 20,
            "parent_id": 10,
            name: "bodysuits",
            categories: []
          },
          {
            "category_id": 21,
            "parent_id": 10,
            name: "casual",
            categories: []
          },
          {
            "category_id": 22,
            "parent_id": 10,
            name: 'dressy tops',
            categories: []
          },
        ]
      },
      {
        "category_id": 11,
        "parent_id": 1,
        name: "denim",
        categories: [
          {
            "category_id": 23,
            "parent_id": 11,
            name: "jackets & outerwear",
            categories: []
          },
          {
            "category_id": 24,
            "parent_id": 11,
            name: "jeans",
            categories: []
          },
          {
            "category_id": 25,
            "parent_id": 1,
            name: 'jumpsuit & romper',
            categories: []
          },
        ]
      }
    ]
  },
  {
  "category_id": 2,
    "parent_id": 0,
    name: 'shoes',
    categories: [
      {
        "category_id": 12,
        "parent_id": 2,
        name: 'booties',
        categories: [
        ]
      },
      {
        "category_id": 13,
        "parent_id": 2,
        name: 'boots',
        categories: [
        ]
      },
    ]
  },
  {
    "category_id": 3,
      "parent_id": 0,
      name: 'accessories',
      categories: []
  }
]
const images = ["https://dummyimage.com/400x600/26628a/fff", 'https://dummyimage.com/400x600/26628a/fff'];


class NavDailyNew extends Component {
  constructor(props) {
    super(props);
  }
  renderCategories(category) {
    console.log(this.props, "this is props")
    return category.map(categories => {
      return <li onClick={()=> {this.props.history.push(`/${categories.name}/dailyNew`)}} className="navigation__sidePanel__title" key={categories.category_id}>{categories.name} <span className="navigation__itemCount">(500)</span></li>
    })
  }

  render() {
    return(
      <div className="navigation__container">
        <h1 className="navigation__title--daily">NEW Items <span className="navigation__itemCount">(1,500)</span></h1>
        <div className="navigation__content">
          <div className="navigation__content__left">
            <ul >
              {this.renderCategories(data)}
            </ul>
          </div>
          <div className="navigation__content__right">
            <div className="navigation__container--image">
              {
                images.map( (image, i ) => (
                  <div key={i + image} className="navigation__content--image">
                    <img className={`${i === 0 ? `image__left` : `image__right`}`} src={image} alt=""/>
                  </div>
                ))
              }              
            </div>
            <div className="navigation__description__container">
              <button className="navigation__description__btn">Shop Now</button>
              <div className="navigation__description navigation__description--itemCode">T12048</div>
              <div className="navigation__description navigation__description--name">Bluelemon</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavDailyNew);