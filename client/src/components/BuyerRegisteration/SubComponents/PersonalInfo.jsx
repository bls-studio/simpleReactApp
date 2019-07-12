import React, { Component } from 'react';
import ReactTelephoneInput from 'react-telephone-input/lib/withStyles';

// import flags from '../../../../public/dist/flags.png'
// SubComponents
import validate from '../FormInputs/validation';
import TextInput from '../FormInputs/textInput';
import Email from '../FormInputs/email';
import Password from '../FormInputs/password';

export default class PersonalInformation extends Component {
  constructor (props) {
    super(props);

    this.state = {
      formIsValid: false,
      formControls: {
        firstName: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2,
            isRequired: true,
          }
        },
        lastName: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 2,
            isRequired: true,
          }
        },
        email: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 3,
            isRequired: true,
          }
        },
        password: {
          value: '',
          valid: false,
          touched: false,
          validationRules: {
            minLength: 8,
            isRequired: true,
          }
        }
      }
    }

    this.baseState = this.state;

    this.handleInput = this.handleInput.bind(this);
    // this._nextBtn = this._nextBtn.bind(this);
    this._resetBtn = this._resetBtn.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }
  handleInputChange(telNumber, selectedCountry) {
    console.log('input changed. number: ', telNumber, 'selected country: ', selectedCountry)
  }
  handleInputBlur(telNumber, selectedCountry) {
    console.log(
      'Focus off the ReactTelephoneInput component. Tel number entered is: ',
      telNumber,
      ' selected country is: ',
      selectedCountry
    )
  }
  handleInput(e) {
    e.preventDefault();
    const name = e.target.name, value = e.target.value;
    // console.log(this.state.firstName)
    const updatedControls = {
      ...this.state.formControls
        };
    const updatedFormElement = {
      ...updatedControls[name]
        };
        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);
    
        updatedControls[name] = updatedFormElement;

        let formIsValid = true;
        for (let inputIdentifier in updatedControls) {
          formIsValid = updatedControls[inputIdentifier].valid && formIsValid;
        }
    
        this.setState({
          formControls: updatedControls,
          formIsValid: formIsValid
        });
      
  }
  _resetBtn(e) {
    e.preventDefault();
    this.setState(this.baseState)
  }
  
  // _nextBtn(e) {
  //   e.preventDefault();
  //   console.dir(this.state.formControls);
  //   this.props.viewPost('Company Address')
  // }

  render() {
    return (
      <div className="personalInfo_container">
        <div className="registration__subtitle registration__subtitle--personalInfo">
          <h1>Personal Information</h1>
          <p><span className="asterisk">*</span> Required field</p>
        </div>
        <form action="">
          <div className="registration__container--personalInfo">
            <TextInput name="firstName" 
            label={"First Name"}
            value={this.state.formControls.firstName.value}
            onChange={this.handleInput}
            classNames="registration__input"
            valid={this.state.formControls.firstName.valid}
            touched={this.state.formControls.firstName.touched}
            />
            <TextInput name="lastName"
            label={"Last Name"}
            value={this.state.formControls.lastName.value}
            onChange={this.handleInput}
            classNames="registration__input"
            valid={this.state.formControls.lastName.valid}
            touched={this.state.formControls.lastName.touched}
            />
            <Email name="email"
            label={"Email Address"}
            value={this.state.formControls.email.value}
            onChange={this.handleInput}
            classNames="registration__input registration__input--email"
            valid={this.state.formControls.email.valid}
            touched={this.state.formControls.email.touched}
            />
            <Password name="password"
            label="Password"
            value={this.state.formControls.password.value}
            onChange={this.handleInput}
            classNames="registration__input registration__input--password" 
            valid={this.state.formControls.password.valid}
            touched={this.state.formControls.password.touched}
            />
            <div className="registration__input registration__input--phone">
              <h3>Phone Number <span className="asterisk">*</span></h3>
              <ReactTelephoneInput
                defaultCountry="us"
                onChange={this.handleInputChange}
                onBlur={this.handleInputBlur}
              />
            </div>
          </div>
          <div className="registration__container--btn">
            <div className=""></div>
            <button className="reset btn" onClick={this._resetBtn} type="submit">Reset</button>
            <input className="next btn" value="Next >" type="submit" onClick={() => this.props.viewPost('address', true)}
            />
          </div>
        </form>
      </div>
    )
  }
};
// preferredCountries={[ 'us', 'gb', 'kr']}
// flagsImagePath={flags}

{/* disabled={!this.state.formIsValid} */}