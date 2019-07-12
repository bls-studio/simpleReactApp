import React, { Component } from 'react';
import './navCategory.scss';
import NavSubCategory from './navSubCategory.jsx'
import { withRouter } from 'react-router-dom';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'


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
      },
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
      },
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
      },
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
      },
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

class NavCategory extends Component {
  constructor() {
    super();
    this.state = {
      selectedIds: [],
    };
  }  

  handleSelectedId(selected, depthLevel) {
    return () => {
      const updatedArray = this.state.selectedIds.slice(0);

      updatedArray[depthLevel] = selected;

      this.setState({
        selectedIds: updatedArray,
      })
    }
  }

  pushCategories(categories, depthLevel = 0) {
    let subCat = [];
    categories.map(title => {
      title.categories.map(subCategories => {
      if((this.state.selectedIds[depthLevel] === subCategories.parent_id)) {
        subCategories.parent = title.name;
        subCat.push(subCategories);
        }
      })
    })
    return subCat
  }

  renderCategories(categories, depthLevel = 0) {
    return categories.map(title => {
      return <ul onClick={() => {this.props.history.push(`/category/${title.name}`)}} onMouseEnter={this.handleSelectedId(title.category_id, depthLevel)} 
        className={"category__sidePanel__title category__sidePanel__title" + (title.category_id === this.state.selectedIds[depthLevel] ? "--active" : '')} key={title.category_id}
        >
        {title.name}
        <div style={{width: 'fit-content', alignSelf: 'baseline'}}>
          <Icon icon={ic_keyboard_arrow_right} size={24} className="arrow__right"/>
        </div>
      </ul>
    })
  }

  render() {
    return(
      <div className="navigationCategory__container">
        <div className="category__sidePanel">
          <div className="navigationCategory__caret"/>
          {this.renderCategories(data)}
        </div>
        <div className="navigationCategory__content">
          <NavSubCategory subItems={this.pushCategories(data)}/>
        </div>
      </div>
    )
  }
};

export default withRouter(NavCategory);