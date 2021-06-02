import React, {useRef} from "react"
import logo from "../assets/BILLY GYM.svg"
import number_phone from "../assets/number_icon.svg"
import header_background from "../assets/Header_background.svg"
import "./Header.css"

const Header = (props) => {
    const ref = useRef(null)
    let Scroll = require('react-scroll');
    let scroll = Scroll.animateScroll;



    return (
<header className="header">
    <img src={header_background} className="header_background_template" alt=""/>
    <div className="header_anchors">
    <button className="header_button logo_button">
        <img src={logo} alt="Logo_IMG"/>
    </button>
    <button onClick={() => {scroll.scrollTo(1020)}} className="header_button">О нас</button>
    <button onClick={() => {scroll.scrollTo(3250)}} className="header_button">Прайс</button>
    <button onClick={() => {scroll.scrollTo(2310)}} className="header_button">Галерея</button>
    <button onClick={() => {scroll.scrollTo(3900)}} className="header_button">Контакты</button>
    <span className="header_button"><img src={number_phone} alt="phone_icon"/> + 380 898 711 153</span>
    <span className="header_button"><img src={number_phone} alt="geolocation_icon"/> площа Богдана Хмельницького</span>
    <span className="header_button" ><img src={number_phone} alt="schedule_icon"/> Пн-Сб:9.00-22.00</span>
    </div>
    <div className="presentation_item">
        <div>
            <span className="presentation_header">ТРЕНАЖЕРНЫЙ  <br/> ЗАЛ В <span style={{color: "#c90404"}}>УЖГОРОДЕ</span></span>
            <span className="presentation_text">Запишитесь онлайн и получите бесплатно <span className="presentation_text2">первую тренировку</span></span>
            <button className="submit_button thar-three animated-button">Записаться</button>
        </div>
        <div>
            <span className="presentation_info info1"><span style={{fontSize: "64px", display: "inline", borderBottom: "6px solid #c90404"}}>3</span><span className="dp">Спортивные </span><br/><span className="op">зоны</span></span>
            <span className="presentation_info info2"><span style={{fontSize: "64px", display: "inline", borderBottom: "6px solid #c90404"}}>80</span><span className="dp">Современных </span><br/><span className="op1">Тренажеров</span></span>
            <span ref={ref} className="presentation_info info3"><span style={{fontSize: "64px", display: "inline", borderBottom: "6px solid #c90404"}}>1000 м²</span><span className="dp">Пространства </span><br/><span className="op2">для тренировок</span></span>
        </div>
    </div>
</header>
    )
}




export default Header;