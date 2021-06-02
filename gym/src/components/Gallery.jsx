import React from "react"
import "./carousel.css"
import carousel1 from "./../assets/carousel/carousel1.png"
import carousel2 from "./../assets/carousel/carousel2.jpg"
import carousel3 from "./../assets/carousel/carousel3.jpg"
import carousel4 from "./../assets/carousel/carousel4.jpg"
import {Divider, Transition} from "semantic-ui-react";

 const photoArray = [
    {id: 1, source:carousel1},
    {id: 2, source:carousel2},
    {id: 3, source:carousel3},
    {id: 4, source:carousel4}
]


class Gallery extends React.Component {
    constructor(props) {
        super(props);
        this.renderImage = this.renderImage.bind(this)
        this.onPreviousClick = this.onPreviousClick.bind(this);
        this.onNextClick = this.onNextClick.bind(this);
        this.renderButton = this.renderButton.bind(this);
        this.state = {carouselIndex: 0}
    }

    renderImage() {
       return photoArray.map((e,index) => {
           const active = index === this.state.carouselIndex ? 'active' : 'hidden';
           const visible = index === this.state.carouselIndex ? 'hide' : '';
                return (
                    <React.Fragment key={e.id}>
                        <Divider hidden />
                    <Transition visible={visible} animation="pulse" duration={500}><div key={e.id} className={`carousel item ${active}`}>
                    <img src={e.source} className="d-block w-100" alt="photo_gym"/>
                </div>
                </Transition>
                    </React.Fragment>)
           }
        )
    }
    componentDidMount() {
        this.Interval();
    }

    Interval() {
        setInterval(this.onNextClick, 4000);
    }

    onPreviousClick() {
        this.setState({carouselIndex: this.state.carouselIndex -= 1});
if (this.state.carouselIndex < 0) {
    this.setState({carouselIndex:0})
}
}
onNextClick() {
    this.setState({carouselIndex: this.state.carouselIndex += 1});
    if (this.state.carouselIndex > 3) {
        this.setState({carouselIndex:0})
    }
}
    renderButton() {
    return photoArray.map((e,index) => {
            const active = index === this.state.carouselIndex ? 'active' : '';
            return <button key={e.id} type="button" onClick={() => this.setState({carouselIndex: index})} data-bs-target="#carouselExampleIndicators" className={`${active}`} data-bs-slide-to="1" aria-label="Slide 2"></button>
        }
    )
}
    render() {
    return (
        <div className="carousel54">
            <h2 className="carousel_header">Галерея</h2>
            <div className="carousel_wrapper">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
            </div>
            <div className="carousel-inner">
                {this.renderImage()}
            </div>
            <button className="carousel-control-prev" type="button" onClick={this.onPreviousClick} data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" onClick={this.onNextClick} data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            <div className="carousel-indicators">
                {this.renderButton()}
            </div>
            </div>
        </div>
    )
    }}






    export default Gallery;