import React from 'react';
import LogoImage from '../../imgs/logo.png';
import './style.css';

const Logo = () => (
    <center>
        <img  
            className = 'logoStyle' 
            src = {LogoImage} 
            alt = 'AL ATTAR Parfume since 1971'
        />
    </center>
)

export default Logo;