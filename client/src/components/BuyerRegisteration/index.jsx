import React, { Component } from 'react';

import './buyerRegisteration.scss';

import PersonalInformation from './SubComponents/PersonalInfo';
import Address from './SubComponents/Address';
import BusinessInformation from './SubComponents/BusinessInfo';
import CreateAccount from './SubComponents/CreateAccount';
import Verify from './SubComponents/EmailVerify';

class BuyerRegistration extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      view: 'personalInfo',
      check1: false,
      check2: false,
      check3: false,
      check4: false
    }
    this.changeView = this.changeView.bind(this);
  }
  changeView(option, active) {
    console.log(option, active)
    this.setState({
      view: option, 
    })
    if (this.state.view === 'personalInfo') {
      this.setState({check1: active})
    }
    else if (this.state.view === 'address') {
      this.setState({check2: active})
    }
    else if (this.state.view === 'businessInfo') {
      this.setState({check3: active})
    }
    else if (this.state.view === 'createAccount') {
      this.setState({check4: active})
    }
  }
  renderView(option) {
    if (this.state.view === 'personalInfo') {
      return <PersonalInformation viewPost={this.changeView}/>
    }
    else if (this.state.view === 'address') {
      return <Address viewPost={this.changeView} />
    }
    else if (this.state.view === 'businessInfo') {
      return <BusinessInformation viewPost={this.changeView}/>
    }
    else if (this.state.view === 'createAccount'){
      return <CreateAccount viewPost={this.changeView}/>
    }
    else if (this.state.view === 'verify') {
      return <Verify />
    }
  }
  _check1() {
    return this.state.check1 ? <span className="progress__icon progress__icon--check">✓</span> : <span className="progress__icon">1</span>
  }
  _check2() {
    return this.state.check2 ? <span className="progress__icon progress__icon--check">✓</span> : <span className="progress__icon">2</span>
  }
  _check3() {
    return this.state.check3 ? <span className="progress__icon progress__icon--check">✓</span> : <span className="progress__icon">3</span>
  }
  _check4() {
    return this.state.check4 ? <span className="progress__icon progress__icon--check">✓</span> : <span className="progress__icon">4</span>
  }
  render() {
    return (
      <div className="registration__container">
        <div className="registration__header">
          <h1>Buyer Registration</h1>
          <div className="registration__container__language--btn">
            <button>English</button>
            <button>Spanish</button>
          </div>
        </div>
        <p className="registration__subText">Join the premier online shopping mall for wholesale fashion and lifestyle brands</p>
        <p className="registration__subText">A community of 900+ wholesale vendors & nearly half a million buyers.</p>
        <div className="registration__progress">
          <h3 className={'registration__progress__item' + (this.state.view === 'personalInfo' ? '--active' : '')}>{this._check1()}Personal Information</h3>
          <h3 className={'registration__progress__item' + (this.state.view === 'address' ? '--active' : '')}>{this._check2()}Company Address</h3>
          <h3 className={'registration__progress__item' + (this.state.view === 'businessInfo' ? '--active' : '')}>{this._check3()}Business Information</h3>
          <h3 className={'registration__progress__item' + (this.state.view === 'createAccount' ? '--active' : '')}>{this._check4()}Verification</h3>
        </div>
        <div className="registrationComponent__container">
          {this.renderView()}
        </div>
      </div>
    )
  }
}

export default BuyerRegistration;
// {this.state.visited ? <span className="progress__icon">✓</span> : <span className="progress__icon">2</span> }