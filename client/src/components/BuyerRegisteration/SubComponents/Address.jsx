import React, { Component } from 'react';
import { CountryDropdown } from 'react-country-region-selector';

// subcompinents
import validate from '../FormInputs/validation';
import TextInput from '../FormInputs/textInput';


export default class Address extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      country: '', 
      formControls: {
        name: {
          value: '',
        },
        permitNumber: {
          value: '',

        },
        address: {
          value: '',

        },
        unit: {
          value: '',

        },
        zipCode: {
          value: '',

        },
        city: {
          value: '',
        },
        state: {
          value: '',
        }
      }
    };
    this.baseState = this.state;

    this._resetBtn = this._resetBtn.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  selectCountry (val) {
    this.setState({ country: val });
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
  // _nextBtn(e) {
  //   e.preventDefault();
  //   this.props.viewPost('Business Information')
  // }
  _resetBtn(e) {
    e.preventDefault();
    this.setState(this.baseState)
  }
  render() {
    const { country, formControls } = this.state;

    return(
      <div>
        <div>
          <div className="registration__subtitle registration__subtitle--address">
            <h1>Company Address</h1>
            <p style={{textAlign: 'end'}}><span className="asterisk">*</span> Required field</p>
            <CountryDropdown
              className="country__dropdown"
              value={country}
              onChange={(val) => this.selectCountry(val)} />
          </div>
          <form action="">
            <div className="registration__container--address">
              <TextInput name="name"
              label="Company Name"
              value={formControls.name.value}
              classNames="registration__input registration__input--name"
              onChange={this.handleInput}
              required
              />
              <TextInput name="permitNumber"
              label="Seller Permit No."
              value={formControls.permitNumber.value}
              classNames="registration__input registration__input--permit"
              onChange={this.handleInput}
              required
              />
              <TextInput name="address"
              label="Address"
              value={formControls.address.value}
              classNames="registration__input registration__input--address"
              onChange={this.handleInput}
              required
              />
              <TextInput name="unit"
              label="Unit #"
              value={formControls.unit.value}
              classNames="registration__input registration__input--unit"
              onChange={this.handleInput}
              required
              />
              <TextInput name="zipCode"
              label="Zip Code"
              value={formControls.zipCode.value}
              classNames="registration__input registration__input--zip"
              onChange={this.handleInput}
              required
              />
              <TextInput name="city"
              label="City"
              value={formControls.city.value}
              classNames="registration__input registration__input--city"
              onChange={this.handleInput}
              required
              />
              <TextInput name="state"
              label="State"
              value={formControls.state.value}
              classNames="registration__input registration__input--city"
              onChange={this.handleInput}
              required
              />
            </div>
            <div className="registration__container--btn">
              <button className="back btn" onClick={() => this.props.viewPost('personalInfo', false)}>&#60; Back</button>
              <button className="reset btn" onClick={this._resetBtn}>Reset</button>
              <button className="next btn" onClick={() => this.props.viewPost('businessInfo', true)}>Next ></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

