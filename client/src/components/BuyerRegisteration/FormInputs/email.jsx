import React from 'react';

const Email = props => {

    let formControl = "validation__rule";

    if (props.touched && !props.valid) {
        formControl = 'validation__rule validation__rule--active';
    }
    return (
        <div className={props.classNames}>
          <label>{props.label} <span className="asterisk">*</span></label>
          <input type="email" {...props} />
          <p className={formControl}>Must be a valid email address.</p>
        </div>
    );
}

export default Email;