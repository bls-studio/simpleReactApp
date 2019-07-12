import React from 'react';

import { Icon } from 'react-icons-kit';
import {ic_account_circle} from 'react-icons-kit/md/ic_account_circle'
import {ic_explicit} from 'react-icons-kit/md/ic_explicit'


import Verify from './EmailVerify';
// import './verification.scss';

const CreateAccount = (props) => (
  <div>
    <div className="registration__subtitle registration__subtitle--verification">
      <div className="registration__subtitle__item registration__subtitle__item--black"><Icon icon={ic_account_circle} size={36} style={{display: 'inline', margin: '0 5px'}}/>Create Account</div>
      <div className="registration__subtitle__item registration__subtitle__item--grey registration__subtitle__item--bar"><Icon icon={ic_explicit} size={36} style={{display: 'inline', margin: '0 5px'}}/>Email Verify</div>
    </div>
    <div className="registration__container--verification">
      <p className="service_agreement">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <label htmlFor="">
        <input type="checkbox"/>
        <span> I agree to the Vast e Tech Terms of Use</span>
      </label>
      <p className="service_agreement">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).</p>
      <label htmlFor="">
        <input type="checkbox"/>
        <span> I agree to the Buyer Serives Agreement</span>
      </label>
      <label htmlFor="" style={{margin: '20px 0'}}>
        <input type="checkbox"/>
        <span> I agree to receive special offers and product & service update emails from Vast e Tech</span>
      </label>
      {/* <span className="full serviceAgreement_checkbox" id="checkbox1"><input type="checkbox"/><p className="inputField_checkbox"> I agree to receive special offers and product & service update emails from Vast e Tech</p></span> */}
    </div>
    <div className="registration__container--btn">
      <button className="serviceAgreement_btn btn" onClick={() => props.viewPost('verify', true)}>Create Account</button>
    </div>
    {/* <Verify /> */}
  </div>
);
export default CreateAccount;