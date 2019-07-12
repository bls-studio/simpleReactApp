
import React, { Component } from 'react';
import './tabCategory.scss';

// components
import NavCategory from '../../Navigation/NavCategory';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'
 
const colors = [
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
  'https://www.iconsdb.com/icons/preview/blue/circle-xxl.png',
]

export default class NavCat extends Component {
  constructor() {
    super();

    // this.state = { checked: false }
    this.state = {
      checkboxes: [],
      isChecked: false,
    }
    this.formatCircle = this.formatCircle.bind(this);
    this.handleCheckboxChange = this.handleCheckboxChange.bind(this);
    this._submit = this._submit.bind(this);
  }

  // handleCheckboxChange(label) {
  //   let labelBox = {}, array = [];
  //   labelBox[label] = this.state.isChecked;
  //   array.push(labelBox);
  //   this.setState((prevState, props) => ({
  //     isChecked: !this.state.isChecked,
  //     checkboxes: [labelBox]
  //   }), console.log(this.state.checkboxes))  
  // };
  // handleCheckboxChange(e, label = e.target.name, checked = e.target.checked, checkbox = {}, array = [], labels) {
    handleCheckboxChange(e, label, labels, checked = e.target.checked) {
      // labels.forEach(label )
    console.log(labels,)
   let checkbox = {}, array = [];
   checkbox[label] = checked;
   array.push(checkbox);
   console.log(array)
    // if (checked) {
    //   this.setState({
    //     checkboxes: [labels]
    //   }, () => console.log(this.state.checkboxes))
    //   // array.push(label)
    // }
    // console.log(array)
    // checkbox[label] = checked;
    // array.push(checkbox);
    // this.setState({ checkboxes: array }, () => console.log(this.state.checkboxes))
  }
  _submit(formSubmitEvent) {
    console.log('submitted', this.state.checkboxes)
    formSubmitEvent.preventDefault();

    // Object.keys(this.state.checkboxes)
    //   .filter(checkbox => this.state.checkboxes[checkbox])
    //   .forEach(checkbox => {
    //     console.log(checkbox, "is selected.");
    //   });
  }

  formatCheckbox(header, labels) {
    return (
      <div>
        <h1 className="checkbox__header">{header}</h1>
        <div className={'checkbox__container' + (labels.length > 8 ? '--double' : '')}>
          {
            labels.map(label => {
              return (
                <div className="checkbox__format">
                  <label className="checkbox__item">  
                    <input type="checkbox" checked={this.state.checkboxes[label]} name={label} onClick={(e) => this.handleCheckboxChange(e, label, labels)} className="checkbox__input"/>
                    <span> {label}</span>
                  </label>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
  formatCircle() {
    return (
      <div className="checkbox__circle">
        { colors.map(color => {
          return <img src={color} alt=""/>
        })
        }
      </div>
    )
  }
  render() {
    return(
      <div className="tabCategory__container">
        <div className="tabCategory__sidePanel__container">
          <NavCategory />
        </div>
        <form className="tabCategory__content__container" onSubmit={this._submit}>
          <button className="tabInfo__btn-x">
            <Icon icon={ic_close} size={16}/>
          </button>
          <div className="tabCategory__content__items">
            {this.formatCheckbox('style', ['active (500)', 'fashion (500)', 'streetwear (500)', 'casual (500)', 'formal (500)'])}
            {this.formatCheckbox('Size', ['One Size', 'Xs','S', 'M','L', 'Xl','2xl','3xl', '4xl', '5xl'])}
            <div>
              <h1 className="checkbox__header">Search</h1>
              <form action="">
                <input type="search" placeholder="Style No." className="checkbox__type"/>
              </form>
              <h1 className="checkbox__header">Price Range</h1>
              <form action="" className="checkbox__container double">
                <input type="text" placeholder="PRICE MIN" className="checkbox__type"/>
                <input type="text" placeholder="PRICE MAX" className="checkbox__type"/>
              </form>
            </div>
            {this.formatCheckbox('Clothing Length', ['Short (500)', 'Regular (500)', 'Long (500)', 'X-long (500)'])}
            {this.formatCheckbox('Body Type', ['Junior', 'Young Contemporary', 'Missy', 'Plus Size', 'Maternity'])}
            <div>
              <h1 className="checkbox__header">Color</h1>
              {this.formatCircle()}
            </div>
          </div>
          <button className="tabInfo__btn-close">Close</button>
          <button className="tabInfo__btn-close" type="submit">Submit</button>
        </form>
      </div>
    )
  }
};
