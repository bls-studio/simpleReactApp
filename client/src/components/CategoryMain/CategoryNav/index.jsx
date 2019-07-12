import React, { Component } from 'react';

import Popup from 'reactjs-popup';

// Popup components
import NavCat from '../../NavTabs/NavCat'

import './categoryNav.scss';


class CategoryNav extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { category } = this.props;
    return (
      <div id="categoryNav">
        <div className="container">
          <div className="category-title">
            <h1>{category}</h1>
            <Popup trigger={<button className="btn btn-default">{category} Category</button>} position="bottom center" className="navTab_container1"
              arrow={false}>
                <NavCat />
              </Popup>

            <div className="btn-group btn-group-justified" role="group" aria-label="...">
              <div className="asdf btn-group" role="group">
                <button type="button" className="btn btn-default dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Middle</button>
                <ul className="dropdown-menu dropdown-menu-center">
                  <li><a href="#">Look Book</a></li>
                </ul>
              </div>
              <div className="asdf btn-group" role="group">
                <button type="button" className="btn btn-default dropdown-toggle"  data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Right</button>
                <ul className="dropdown-menu dropdown-menu-right" >
                  <li><a href="#">Look Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk Booasdfk</a></li>
                </ul>
              </div>
            </div>
          
   
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryNav;