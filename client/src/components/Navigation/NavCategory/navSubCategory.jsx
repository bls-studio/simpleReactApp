import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './navCategory.scss';

class NavSubCategory extends Component {
  constructor(props) {
    super(props);

  }
  pushSubCategories(category) {
    let childCat = [];
    category.map(subCategory => {
      childCat.push(subCategory);    
    })
    return childCat;
  }
  renderSubCategories() {
    let category = this.pushSubCategories(this.props.subItems);
    return category.map(subCategory => {
      return (
        <ul onClick={()=> { this.props.history.push(`/category/${subCategory.parent}/${subCategory.name}`)}} className={"category__content__title" + (subCategory.categories.length > 0  ? '--group' : '') }>
          <ul key={subCategory.category_id}>{subCategory.name}
          {subCategory.categories.map(child => {
            return <li key={child.category_id} className="category__content__subContainer">{child.name}</li>
          })}
          </ul>
        </ul>
      )
    })
  }

  render() {
    let subCat, category = this.pushSubCategories(this.props.subItems);
    for (let i = 0; i < category.length; i++) {
      subCat = category[i].categories.length;
    }
    return(
      <div className={"category__content__container" + (subCat > 0 ? '--group' : '')}>
       {this.renderSubCategories()}
      </div>
    )
  }
}

export default withRouter(NavSubCategory);