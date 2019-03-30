import React from 'react';
import LogoImage from '../../imgs/logo.png';
import './style.css';

const Logo = () => (
    <div>
        <img  
            className = 'logoStyle' 
            src = {LogoImage} 
            alt = 'AL ATTAR Parfume since 1971'
        />

        <p className = 'textStyle'> 
            The first Armenian Parfume Manufacturing
        </p>
    </div>
)

export default Logo;