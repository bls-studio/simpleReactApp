import React from 'react';
// import './verification.scss';

import ReactCodeInput from 'react-verification-code-input';

import { Icon } from 'react-icons-kit';
import {ic_account_circle} from 'react-icons-kit/md/ic_account_circle'
import {ic_explicit} from 'react-icons-kit/md/ic_explicit'

const EmailVerify = () => (
  <div>
  <div className="registration__subtitle registration__subtitle--verification">
      <div className="registration__subtitle__item registration__subtitle__item--black"><Icon icon={ic_account_circle} size={36} style={{display: 'inline', margin: '0 5px'}}/>Create Account</div>
      <div className="registration__subtitle__item registration__subtitle__item--black registration__subtitle__item--bar"><Icon icon={ic_explicit} size={36} style={{display: 'inline', margin: '0 5px'}}/>Email Verify</div>
    </div>
    <div className="registration__container--verification">
      <h1 className="serviceAgreement_header">Verify your email to complete registration</h1>
      <p style={{lineHeight: '1.7'}}>Please enter the 5 digit from the email that we sent to <span><a href="">hanthss@gmail.com</a></span></p>
      <p style={{lineHeight: '1.7'}}>Didn't recieve a code?<span><a href=""> Resend Code</a></span></p>
      <ReactCodeInput fields={5} className="codeInput"/>
      <div className="serviceAgreement_customerService">
        <p>If you have not recieved an email with a verification code,</p>
        <p>please call 213-745-2667 for customer service assistance.</p>
      </div>
    </div>
    <div className="registration__container--btn">
      <button className="serviceAgreement_btn btn">Verify</button>
    </div>
  </div>
);
export default EmailVerify;