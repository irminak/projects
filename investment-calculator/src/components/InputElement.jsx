import React from 'react';

const InputElement = ({ name, label, value, onChange }) => {
    return (
        <p>
            <label htmlFor=''>{label}</label>
            <input
                name={name}
                value={value}
                onChange={onChange}
                type='number'
                required
            />
        </p>
    );
};

export default InputElement;
