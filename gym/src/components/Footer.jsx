import React from 'react'
import logo from "../assets/BILLY GYM.svg"
import number_phone from "../assets/number_icon.svg";
import "./footer.css"

const Footer = () => {

    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;

    return (
        <div className="footer_wrapper">
            <img className="footer_logo" src={logo} alt=""/>
            <button onClick={() => {scroll.scrollTo(1020)}} className="Footer_aboutBtn">О нас</button>
            <button className="Footer_priceBtn">Прайс</button>
            <button className="Footer_galleryBtn">Галерея</button>
            <button className="Footer_contactsBtn">Контакты</button>
            <p className="header_button"><img src={number_phone} alt="phone_icon"/> + 380 898 711 153</p>
            <p className="header_button"><img src={number_phone} alt="geolocation_icon"/> площа Богдана Хмельницького</p>
            <p className="header_button" ><img src={number_phone} alt="schedule_icon"/> Пн-Сб:9.00-22.00</p>
            <p><i className="instagram icon big white"></i></p>
            <p><i className="facebook icon big white"></i></p>
            <p><i className="vk icon big white"></i></p>
            <p className="telegram_plane"><i className="telegram plane big white icon"></i></p>
        </div>
    )
}

export default Footer;
