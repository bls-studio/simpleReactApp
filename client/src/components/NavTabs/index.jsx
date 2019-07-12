import React from 'react';
import './navTabs.scss';
import Popup from 'reactjs-popup'


import NavCat from './NavCat/';
import VendorInfo from './VendorInfo';
import NavPayment from './NavPayment';
import Reviews from '../ItemDetails/Reviews';
import VendorList from './VendorList';
// import Reviews from '../Reviews';


const NavTabs = () => (
  <div id="navTabs">
    <Popup trigger={<button> Vendor Category</button>} position="bottom center" className="navTab_container1"
    arrow={false}>
      <NavCat />
    </Popup>
    <Popup trigger={<button> Payment & Contact</button>} position="bottom center" className="navTab_container3" arrow={false}>
      <NavPayment />
    </Popup>
    <Popup trigger={<button> Vendor Info</button>} position="bottom center" className="navTab_container2"
    arrow={false}>
      <VendorInfo />
    </Popup>
    <Popup trigger={<button> Review</button>} position="bottom center" className="navTab_container" arrow={false}>
      <Reviews />
    </Popup>
    <Popup trigger={<button> VendorList</button>} position="bottom center" className="navTab_container4" arrow={false}>
      <VendorList />
    </Popup>
  </div>
);
export default NavTabs;
