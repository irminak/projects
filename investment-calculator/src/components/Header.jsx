import React from 'react';

import HeaderPic from '../assets/investment-calculator-logo.png';

const Header = () => {
    return (
        <header id='header'>
            <img
                src={HeaderPic}
                alt='Website icon'
            />
            <h1>Investment Calculator</h1>
        </header>
    );
};

export default Header;
