import React from 'react';
import Background from '../../imgs/backgroundImage.jpg';
import './style.css';

let layoutStyle = {
    backgroundImage: `url(${Background})`
}

const Layout = props => {
    return (
        <div>
            <div className = 'imageContainer'>
                <img  
                    className = 'backgroundImage'
                    src = {Background} 
                    alt = 'background image'
                />
            </div>
            {props.children}
        </div>
    )
}

export default Layout;