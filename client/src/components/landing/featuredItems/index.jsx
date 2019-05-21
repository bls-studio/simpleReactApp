import React, { Component } from "react";
import dummyImg from "../../../../public/images/dummyImg.jpg";
import "./featuredItems.scss";
import ProductImage from '../../Vendor/ProductImage';
import {withRouter} from "react-router-dom";

class FeaturedItems extends Component {
  constructor() {
    super();

    this.featuredItems = [
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/ed3462/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/e3d187/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/26628a/#fff'},
      ],
      [ 
        { url: 'https://dummyimage.com/400x600/929ded/#fff'},
      ],
      [
        { url: 'https://dummyimage.com/400x600/ed3462/#fff'},
      ]
    ];

    this.state = {};
  }

  convertGrid (images) {  
    const item = {
      name: 'Aisley Rose',
      price: 18,
      model: 'L4777R',
      image: "https://dummyimage.com/400x600/26628a/fff"
    }

    return images.map( image => { 
        return (
          <div className="col-xs-3 col-sm-3 col-md-3" style={{ padding: '5px'}} onClick={() => {this.props.history.push("/vendor")}}>
            <ProductImage
              className="col-xs-12 col-sm-12 col-md-12" 
              name={'default'}
              images={image} 
              isViewable={false}
            />
            <div>
              <div>{item.model} / <strong>${item.price}</strong></div>
              <div>{item.name}</div>
            </div>
          </div>
        )
      
    });
  }
  

  render() {
    return (
      <div id="RNVendors">
      <div className="container">
        <h1>FEATURED ITEMS</h1>
        <div className="row">
          { this.convertGrid(this.featuredItems) }
        </div>

      </div>
    </div>
      // <div className="container" id="featuredItems_container">
      // <h1>FEATURED ITEMS</h1>
      //   <div className="row">
      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>
      //   </div>
      //   <div className="row">
      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>

      //     <div className="col-xs-3 col-sm-3 col-md-3 featured_image">
      //       <img className="img-responsive"
      //         alt=""
      //         src="https://dummyimage.com/400x600/26628a/fff"
      //       />
      //       <p>STYLE #</p>

      //       <p>COMPANY NAME</p>
      //     </div>
      //   </div>
      // </div>
    );
  }
}

export default withRouter(FeaturedItems);
