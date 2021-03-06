import React from 'react'
import Logo from '../logo/logo'
import Footer from '../footer/footer'
import './style.css';

const Container = () => (
    <div className = 'textAndLine'>
        <Logo />

        <p className = 'textStyle'> 
            The first Armenian Parfume Manufacturing
        </p>

        <div className = 'FirstLineStyle'></div>

        <p className = 'text'> 
            OUR WEBSITE IS UNDER CONSTRUCTION
        </p>
        
        <div className = 'SecondLineStyle'></div>

        <Footer />
    </div>
)

export default Container;