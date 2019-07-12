import React from 'react';

const TextInput = props => {

    let formControl = "validation__rule";

    if (props.touched && !props.valid) {
        formControl = 'validation__rule validation__rule--active';
    }
    return (
        <div className={props.classNames}>
            <label htmlFor="">{props.label} <span className="asterisk">*</span></label>
            <input type="text" {...props} />
            <p className={formControl}>Must be at least 2 letters.</p>
        </div>
    );
}

export default TextInput;