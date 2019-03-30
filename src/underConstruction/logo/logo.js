import React from 'react';
import LogoImage from '../../imgs/logo.png';

let logoStyle = {
    widht : '200px',
    height: '250px',
    position: 'absolute',
    top: '30%',
    left: '50%',
    transform: 'translate(-50%, -50%)'
}

let textStyle = {
    position: 'absolute',
    fontSize: '24px',
    fontWeight: '100',
    color: '#2C2E2B',
    wordSpacing: '3px',
    top: '48%',
    left: '35%'
    
}

const Logo = () => (
    <div>
        <img  
            style = {logoStyle} 
            src = {LogoImage} 
            alt = 'AL ATTAR Parfume since 1971'
        />

        <p style = {textStyle}> 
            The first Armenian Parfume Manufacturing
        </p>
    </div>
)

export default Logo;