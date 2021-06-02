import React from "react";
import "./contacts.css"



const Contacts = (props) => {
    return (
        <div className="contacts_wrapper">
            <h1 className="contacts_header">ГДЕ НАС НАЙТИ</h1>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2637.418810763614!2d22.288384201579316!3d48.620967211276366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4739184d4d890d8d%3A0x5493845cd83f37b8!2z0J7RgtC10LvRjCAi0KPQttCz0L7RgNC-0LQi!5e0!3m2!1sru!2sua!4v1622326737872!5m2!1sru!2sua"
                width="715px" height="550px" allowFullScreen="" title="da" className="contacts_map" loading="lazy"></iframe>
            <div className="contacts_info">
            <h2 className="contacts_info_header">Контакты</h2>
            <span className="contacts_info_address">Площа Богдана Хмельницького,г.Ужгород,Украина</span>
            <span className="contacts_info_number">Телефон: + 380 898 711 153</span>
            <span className="contacts_info_email">Email: billygym@gmail.com</span>
            <span className="contacts_info_time">Время Работы: Пн-Вс 9.00-19.00</span>
            <i className="instagram icon big white"></i>
            <i className="facebook icon big white"></i>
            <i className="vk icon big white"></i>
            <i className="telegram icon big white"></i>
                </div>
                </div>

    )
}

export default Contacts