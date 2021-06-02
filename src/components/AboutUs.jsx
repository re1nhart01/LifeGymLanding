import React from "react"
import "./aboutUs.css"
import preview_photo1 from "./../assets/gym_photo1.png"
import preview_photo2 from "./../assets/gym_photo2.png"
class AboutUs extends React.Component {
    constructor(props) {
        super(props);
        this.anyRef = React.createRef();
    }
    render() {
        return (
            <main ref={this.anyRef} className="wrapper">
                <div className="grid">
                <div className="t1">
                <h3 className="about_header">О НАС</h3>
                <span className="about_inline_header"><span style={{color: "#c90404"}}>Комфортный</span> <br/>тренажерный зал.</span>
                <span className="about_text">Разнообразный и богатый опыт новая модель организационной
                      <br/>деятельности обеспечивает широкому круг
                      у (специалистов) участие в формировании форм развития. </span>
                <span className="about_text">Повседневная практика показывает, что постоянное
                      информационно-пропагандистское обеспечение 
                      нашей деятельности влечет за собой процесс
                      внедрения и модернизации модели развития.</span>
                      <button className="submit_button about_button">Подробнее</button>
                </div>
                    <div>
                    <img className="p1 preview_photo" src={preview_photo1} alt=""/>
                    </div>
                    <div className="p2">
                        <img src={preview_photo2} alt=""/>
                    </div>
                    <div className="t2">
                        <h3 className="about_header">НАШИ ТРЕНЕРЫ</h3>
                        <span className="about_inline_header"><span style={{color: "#c90404"}}>Мастеры спорта</span> <br/>с большим опытом</span>
                        <span className="about_text">Разнообразный и богатый опыт новая модель организационной
                      деятельности обеспечивает широкому круг
                      у (специалистов) участие в формировании форм развития. </span>
                        <span className="about_text">Повседневная практика показывает, что постоянное
                      информационно-пропагандистское обеспечение
                      нашей деятельности влечет за собой процесс
                      внедрения и модернизации модели развития.</span>
                        <button className="submit_button about_button">Подробнее</button>
                    </div>
                </div>
            </main>
        )
    }
}

export default AboutUs;