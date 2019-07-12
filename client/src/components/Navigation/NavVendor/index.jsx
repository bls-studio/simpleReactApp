import React, { Component } from 'react';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_favorite_border} from 'react-icons-kit/md/ic_favorite_border';


const data = [
  {
    "manufacturer_id": 8,
    "name": "Apple",
    "sort_order": 0,
    "image": "",
    "original_image": ""
  },
  {
    "manufacturer_id": 9,
    "name": "Canon",
    "sort_order": 0,
    "image": "http://opencart3-simple.api.opencart-api.com/image/cache/catalog/demo/canon_logo-100x100.jpg",
    "original_image": "http://opencart3-simple.api.opencart-api.com/image/catalog/demo/canon_logo.jpg"
  },
];
const images = ["https://dummyimage.com/400x600/26628a/fff", 'https://dummyimage.com/400x600/26628a/fff']

export default class NavVendor extends Component {
  constructor() {
    super();

    this.state = {
      vendor_id: [],
      letters: []
    }
    this.matchVendor = this.matchVendor.bind(this);
    this.renderVendor = this.renderVendor.bind(this);
  }

  componentDidMount() {
    this.renderVendor();
  }
  renderVendor() {
    let alphabet, letters = [], chunk = 8, temp = [];
    for (let i = 0; i < 26; i++) {
      alphabet = String.fromCharCode(i + 65)
        letters.push(alphabet);
      }
      letters.push('0-9', <Icon icon={ic_favorite_border}/>, "All Vendor List")
    for (let k = 0, j = letters.length; k < j; k += chunk) {
      temp.push(letters.slice(k, k+chunk));
      this.setState({
        letters: temp
      })
    }
  }
  
  matchVendor(alphabet) {
    // console.log(alphabet)
    let vendorLetter;
    data.map(vendor => {
      vendorLetter = vendor.name.slice(0, 1);
      vendorLetter === alphabet ?
      this.setState({ vendor_id: [vendor.manufacturer_id]}, console.log('vendor matched!')) 
      :
      console.log('vendor doesnt exist')
    })
  }

  getVendor() {

  }

  render() {
    return(
      <div className="navigation__container">
        <h1 className="navigation__title--vendor">Find Vendor</h1>
        <div className="navigation__content">
          <div className="navigation__content__left--vendor">
            <select name="" id="" className="navigation__content--select"><option value="">Select Vendor</option></select>
            <div >
              {
                this.state.letters.map((letter, j) => {
                  return <ul className="navigation__content--alphabet" key={j}>
                    {
                      letter.map((alphabet, i) => {
                        return <li className="navigation__content--letters" key={letter[i]} onClick={() => this.matchVendor(alphabet)}>{alphabet}</li>
                      })
                    }</ul>
                })
              }
            </div>
          </div>
          <div className="navigation__content__right">
            <div className="navigation__container--image">
              {
                images.map( (image, i ) => (
                  <div key={i + image} className="col-xs-6 navigation__content--image">
                    <img className={`${i === 0 ? `image__left` : `image__right`}`} src={image} alt=""/>
                  </div>
                ))
              }              
            </div>
            <div className="navigation__description__container">
              <div className="navigation__description navigation__description--itemCode">T12048</div>
              <button className="navigation__description__btn">Shop Now</button>
              <div className="navigation__description navigation__description--name">Bluelemon</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
};