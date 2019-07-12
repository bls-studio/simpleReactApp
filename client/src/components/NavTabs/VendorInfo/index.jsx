import React, { Component } from 'react';
import './vendorInfo.scss';

// Components
import SideNavContents from './SideNavContents';

// Icons
import { Icon } from 'react-icons-kit';
import {ic_close} from 'react-icons-kit/md/ic_close'
import {ic_keyboard_arrow_right} from 'react-icons-kit/md/ic_keyboard_arrow_right';
import {plus} from 'react-icons-kit/fa/plus'



const data = [
  { 
    "company info": {
      name: "Aisly Rose",
      description_1: "Young Contemporary",
      address: "149 Catalina St",
      phone: '1232143243',
      email: "john@gmail.com",
      description_2: "blah blah blah"    
    },
    FAQ: [
      {
        header: "Account",
        content: "1 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        header: "Member Center",
        content: "2 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        header: "Order",
        content: "3 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Order Status",
        content: "4 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
      },
      {
        header: "Payment",
        content: "5 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Shipping",
        content: "6 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Return & Exchanges",
        content: "7 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      },
      {
        header: "Refunds",
        content: "8 policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."

      }
    ],
    "Show Schedule": [
      {
        name: "Atlanta Americasmart1",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart2",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart3",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart4",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart5",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
      {
        name: "Atlanta Americasmart6",
        booth: '#123213',
        date: 'Jan 26 1993',
        city: 'Los Angeles'
      },
    ],
    "Return & Cancellation Policy": {
      policy: " policdy Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Promotion": {
      promotion: "promotio Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    },
    "Size Info": {
      "size info": "size Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
    }
  }

]

export default class VendorInfo extends Component {
  constructor(props) {
    super(props);

    this.state = { 
      selected: [],
      header: '',
      subheader: [],
      subHeaderContent: '',
      default: {
        name: "",
        description_1: "",
        address: "",
        phone: '',
        email: '',
        description_2: '',
      },
      showSubheader: {
        display: "",
      },
      animate: {
        height: 0,
        top: 0,
      },
    }
  }
  componentWillMount() {
    let infos = data[0]['company info'];
    this.setState({
      default: {
        name: infos.name,
        description_1: infos.description_1,
        address: infos.address,
        phone: infos.description_2,
        email: infos.email,
        description_2: infos.description_2
      }
    })
  }
  pushVendorInfo(info, infos) {
    for (let key in infos) {
      if (key === info) {
        this.setState({
          selected: infos[key],
          header: info,
          showSubheader: { display: 'none' },
        })
      }
      if (key === "FAQ" && info === "FAQ") {
        this.setState({
          subheader: infos[key],
          showSubheader: { display: "flex" }, 
        })
      }
    }
  }
  pushSubHeaderContent(header) {
    this.setState({
      subHeaderContent: header
    })
  }
  closePopup(event) {
    console.log('clicked')
  }
  renderVendorInfoNav(vendorInfo){   
    return vendorInfo.map(infos => {    
      return Object.keys(infos).map((info, i) => {
        return (
          <div className={ 'sidePanel__container sidePanel__container' + (this.state.header === info ? "--active" : '')}>
            <ul onClick={() => this.pushVendorInfo(info, infos)} key={i}>
              {info}
                {
                  this.state.subheader.map((subHeaders, j) => {
                    return <li style={info ==="FAQ" ? this.state.showSubheader : {display: 'none'}}  
                    className={ 'sidePanel__subheader_item sidePanel__subheader_item' + (this.state.subHeaderContent.header === subHeaders.header ? "--active" : '')}
                    onMouseEnter={() => this.pushSubHeaderContent(subHeaders)}
                    key={j}
                    >
                    {subHeaders.header}</li>
                  })
                }
            </ul>
            <div style={{width: 'fit-content', alignSelf: 'baseline'}}>
              <Icon icon={ic_keyboard_arrow_right} size={24} className="arrow__right"/>
            </div>
          </div>
        )
      })
    }) 
  }

  render() {
    return(
      <div id="tabInfo__container">
        <div className="tabInfo__sidePanel">
          {this.renderVendorInfoNav(data)}
        </div>
        <div className="tabInfo__content__container">
          <div className="tabInfo__content__container-format">
            <h3 className="tabInfo__content-header">{(this.state.header === "FAQ") ? this.state.subHeaderContent.header : this.state.header || "Company Info"}</h3>
            <button className="tabInfo__btn-x">
              <Icon icon={ic_close} size={16}/>
            </button>
          </div>
          <SideNavContents contents={this.state  || this.state.default}/>
          <button className="tabInfo__btn-close" onClick={(e) => this.closePopup(e)}>Close</button>
        </div>
      </div>
    )
  }
}

