import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Prices.css"



const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 2
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 2
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const carouselData = [
    {id:1, header: "1 Месяц", type:"КЛУБНОЕ ЧЛЕНСТВО",
        tag1: "Тренажерная зона",
        tag2: "Групповые занятия",
        tag3: "Бесплатные полотенца",
        tag4: "Бассейн",
        tag5: "Кардио-зона",
        tag6: "Заморозка абонимента",
    price: "600₴",
    color:"linear-gradient(0deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34)), linear-gradient(99.07deg, #778DFF 22.04%, #C492C2 74.37%)"},
    {id:2, header: "1 Месяц", type:"8 занятий",
        tag1: "Тренажерная зона",
        tag2: "Групповые занятия",
        tag3: "Бесплатные полотенца",
        tag4: "Бассейн",
        tag5: "Кардио-зона",
        tag6: "Заморозка абонимента",
    price: "350₴",
    color: "linear-gradient(0deg, rgba(0, 0, 0, 0.34), rgba(0, 0, 0, 0.34)), linear-gradient(105.48deg, #84FFE1 25.3%, #FE8399 76.02%)"},
    {id:3, header: "1 День", type:"Разовое занятие",
        tag1: "Тренажерная зона",
        tag2: "Групповые занятия",
        tag3: "Бесплатные полотенца",
        tag4: "Бассейн",
        tag5: "Кардио-зона",
        tag6: "Заморозка абонимента",
        price: "70₴",
    color:"radial-gradient(circle, rgba(63,94,251,1) 0%, rgba(252,70,107,1) 100%)"}
]


class Prices extends React.Component {
constructor(props) {
    super(props);
    this.state = {modalShow: false}
}
    renderList() {
return carouselData.map (e => {
    return (
        <div key={e.id} className="price_item" style={{background:e.color}}>
       <h1 className="price_item_header">{e.header}</h1>
            <p className="price_item_type">{e.type}</p>
            <div className="price_grid">
            <span className="tag1 tag"><i className="ui icon angle up"></i>{e.tag1}</span>
            <span className="tag2 tag"><i className="ui icon angle up"></i>{e.tag2}</span>
            <span className="tag3 tag"><i className="ui icon angle up"></i>{e.tag3}</span>
            <span className="tag4 tag"><i className="ui icon angle up"></i>{e.tag4}</span>
            <span className="tag5 tag"><i className="ui icon angle up"></i>{e.tag5}</span>
            <span className="tag6 tag"><i className="ui icon angle up"></i>{e.tag6}</span>
            </div>
            <p className="price_item_price">{e.price}</p>
            <p className="cc"><button onClick={() => {this.setState({modalShow: true})}} className="price_item_submit_button">Купить Онлайн</button></p>
        </div>
    )
})
    }
    render() {
        return (
            <div className="price_wrapper">
                <h2 className="price_header">ТАРИФЫ И АБОНЕМЕНТЫ</h2>
                <Carousel infinite={true} responsive={responsive}>
                    {this.renderList()}
                </Carousel>
            </div>
        )
    }
}
// <ModalWindow show={this.state.modalShow} onHide={() => this.setState({modalShow: false})}/>
export default Prices