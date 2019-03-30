import React from 'react';

let footerStyle = {
    position: 'absolute',
    fontSize: '24px',
    fontWeight: '100',
    color: '#2C2E2B',
    wordSpacing: '3px',
    top: '70%',
    left: '35%',
}

let pStyle = {
    margin: '5px'
}

const Footer = () => (
    <div style = {footerStyle}>
        <p style = {pStyle} >27/17 Roubinyans Street, Yerevan 0035, Armenia</p>
        <p style = {pStyle} >E-mail address: ifo@alattarparfume.com</p>
        <p style = {pStyle} >Phone number: +374 11250050, +374 441250050</p>
    </div>
)

export default Footer;