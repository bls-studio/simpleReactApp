import React from 'react';
import './NavPayment.scss';

// Icons
import { Icon, withBaseIcon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'
import {ic_mail} from 'react-icons-kit/md/ic_mail'
import {ic_location_on} from 'react-icons-kit/md/ic_location_on'
import {ccVisa} from 'react-icons-kit/fa/ccVisa'
import {ccMastercard} from 'react-icons-kit/fa/ccMastercard'
import {ccDiscover} from 'react-icons-kit/fa/ccDiscover'
import {ccAmex} from 'react-icons-kit/fa/ccAmex'
import {creditCard} from 'react-icons-kit/fa/creditCard'
import {ic_local_shipping} from 'react-icons-kit/md/ic_local_shipping'

const PaymentIcons = withBaseIcon({ size: 40, style: {color: '#168cc9'}})
const OtherIcons = withBaseIcon({ size: 24, style: {padding: '0 .5em'}})

const NavPayment = () => (
  <div className="NavPayment">
    <button className="tabPayment__button-close">
      <Icon icon={ic_close} size={16}/>
    </button>
    <div className="tabPayment__container">
      <div className="payment__item payment__item-border__bottom">
        <h1 className="payment__header">Contact: <span>Hans Kim</span></h1>
        <div className="payment__item-flex">
          <p className="payment__header">Tel: <span> 323-482-0091</span></p>
          <h1 className="payment__header">Email <OtherIcons icon={ic_mail}/></h1>
        </div>
      </div>
      <div className="payment__item payment__item-border__bottom payment__item-border__left">
        <h1 className="payment__header">Location</h1>
        <p>149 N. Catalina St., Los Angeles, CA 90004 <OtherIcons icon={ic_location_on}/></p>
      </div>
      <div className="payment__item">
        <h1 className="payment__header">Payment</h1>
        <p>Min Order: None</p>
        <div className="payment__icons">
          <PaymentIcons icon={ccVisa} />
          <PaymentIcons icon={ccMastercard} />
          <PaymentIcons icon={ccDiscover} />
          <PaymentIcons icon={ccAmex} />
          <PaymentIcons icon={creditCard} />
        </div>
      </div>
      <div className="payment__item payment__item-border__left">
        <h1 className="payment__header">Shipping</h1>
        <p>Over $50: Free Shipping <OtherIcons icon={ic_local_shipping}/></p>
      </div>
    </div>
    <button className="tabPayment__button-close">Close</button>
  </div>
);
export default NavPayment;