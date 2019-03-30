import React from 'react'
import Layout from './layout/layout'
import Logo from '../underConstruction/logo/logo'
import Footer from './footer/footer';

let textStyle = {
    position: 'fixed',
    top: '54%',
    left: '30%',
    fontWeight: 'normal',
    fontSize: '35px',
    color: '#B6862C'
}

let lineStyle = {
    position: 'fixed',
    top: '66%',
    left: '6%',
    width: '85%',
    height: '2.5px',
    backgroundColor: '#B6862C'
}

const Main = () => {
    return (
        <Layout>
             <Logo />
                <section>
                <p style = {textStyle}> 
                    OUR WEBSITE IS UNDER CONSTRUCTION
                </p>
                <div style = {lineStyle}></div>
            </section>
             <Footer />
        </Layout>
    )
}

export default Main;