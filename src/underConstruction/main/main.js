import React from 'react'
import Layout from '../layout/layout'
import Logo from '../logo/logo'
import Footer from '../footer/footer'
import './style.css'

const Main = () => {
    return (
        <Layout>
             <Logo />
            <section>
                <p className = 'text'> 
                    OUR WEBSITE IS UNDER CONSTRUCTION
                </p>
                <div className = 'lineStyle'></div>
            </section>
             <Footer />
        </Layout>
    )
}

export default Main;