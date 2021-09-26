import React from 'react';
import './Header.css';

const Header = () => {
    return (
        <div>
            <div className='header-contaier'>
                <h1 className='main-heading'>Welcome Singer's World</h1>
                <p>Come Here to find world best singers.Too soothing music you will experience</p>
            
                <p className='resonable-salary-main'>Salary : <span className='resonable-salary'>20000</span> </p>
            </div>
        </div>
    );
};

export default Header;