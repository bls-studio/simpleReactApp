import React, { Component } from 'react';
import './vendorList.scss';


// Icons
import { Icon, withBaseIcon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'

const VendorList = () => (
  <div className="vendorList__container">
    <button className="tabPayment__button-close">
      <Icon icon={ic_close} size={16}/>
    </button>
    <div className="vendorList__searchBar__container">
      <h1>Find Vendor</h1>
      <select value="Select Vendor">
        <option value=""></option>
      </select>
      <button>View All Vendors</button>
    </div>
    <div className="vendorList__list__container">

    </div>
    <button className="tabPayment__button-close">Close</button>
  </div>
);
export default VendorList;