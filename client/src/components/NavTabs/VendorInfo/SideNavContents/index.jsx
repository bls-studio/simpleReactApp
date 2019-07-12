import React, { Component } from 'react';

class SideNavContents extends Component {
  constructor(props) {
    super(props);
  
  }
  renderContent(contents) {
    if (contents.header === "company info") {
      return this.companyInfo(contents.selected || contents.default)
    }
    else if (contents.header === 'FAQ') {
      return this.faq(contents.subHeaderContent)
    }
    else if (contents.header === 'Show Schedule') {
      return this.schedule(contents.selected);
    }
    else {
      return this.else(contents.selected);
    }
  }
  else (info) {
    for (let key in info) {
      return (
        <div className="content__container">
          <p className="content__description">{info[key]}</p>
        </div>
      )
    }
  }
  companyInfo(info) {
    return (
      <div className="content__container">
        <h1 className="content__header">{info.name}</h1>
        <p className="content__description">{info.description_1}</p>
        <div className="content__details">
          <p>{info.address}</p>
          <p>Tel: {info.phone}</p>
          <p>Fax: {info.phone}</p>
          <p>Email: {info.email}</p>
        </div>
        <p className="content__description">{info.description_2}</p>
      </div>
    )
  }
 
  faq(info) {
    return (
      <div className="content__container">
        <p className="content__description">{info.content}</p>
      </div>
    )
  }
  schedule(info) {
    return(
      <ul className="content__container content__container-grid">
        {info.map((schedules, i) => {
          return (
            <li key={i}>
              <h1 className="content__header">{schedules.name}</h1>
              <div className="content__details">
                <p>Booth {schedules.booth}</p>
                <p>{schedules.date}</p>
                <p>{schedules.city}</p>
              </div>
            </li>
          )
        })}
      </ul>
    )
  }
  render() {
    return(
      <div className="tabInfo__content__subContainer">
        {this.renderContent(this.props.contents) || this.companyInfo(this.props.contents.default)}
      </div>
    )
  }
}
    
export default SideNavContents;