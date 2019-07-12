import React, { Component } from 'react';
import './navigation.scss';
import { slide as Menu} from "react-burger-menu";
import ReactTooltip from 'react-tooltip';
import Popup from "reactjs-popup";
import {withRouter} from "react-router-dom";


// Components
import NavCategory from './NavCategory';
import NavVendor from './NavVendor';
import NavDailyNew from './NavDailyNew';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right'
import {ic_arrow_drop_down} from 'react-icons-kit/md/ic_arrow_drop_down';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {lettersFinal: []}
  }  
  render () {
    return (
      <div>
        <div id="navbar-desktop">
          <ul className="navbar-item">
            <Popup arrow={false}  offsetY={10}
            trigger={<li className="bm-item-list">Categories<Icon icon={ic_arrow_drop_down}/></li>} position="bottom center" className="navbar_tooltip">
              <NavCategory />
            </Popup>
            <Popup trigger={<li className="bm-item-list">Vendors<Icon icon={ic_arrow_drop_down}/></li>} position="bottom center" className="navbar--vendor">
              <NavVendor />
            </Popup>
            <Popup trigger={<li className="bm-item-list">Daily New<Icon icon={ic_arrow_drop_down}/></li>} position="bottom center" className="navbar_tooltip">
              <NavDailyNew />
            </Popup>
            <li onClick={() => {this.props.history.push("/bestSeller")}} className="bm-item-list">Best Seller</li>
            <li onClick={() => {this.props.history.push("/sale")}} className="bm-item-list">Sale</li>
            <li className="bm-item-list">Look Book</li>
          </ul>
        </div>
      </div>
    );
  }
};

export default withRouter(Navigation);