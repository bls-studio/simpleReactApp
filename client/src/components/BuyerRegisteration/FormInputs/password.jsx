import React from 'react';

const Password = props => {

    let formControl = "validation__rule";

    if (props.touched && !props.valid) {
        formControl = 'validation__rule validation__rule--active';
    }
    return (
        <div className={props.classNames}>
            <label htmlFor="">{props.label} <span className="asterisk">*</span></label>
            <input type="password" {...props} />
            <p className={formControl}>Must be at least 8 characters long.</p>
        </div>
    );
}

export default Password;