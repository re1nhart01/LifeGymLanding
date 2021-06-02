import React from "react"
import carousel1 from "./assets/carousel/carousel1.png"
import carousel2 from "./assets/carousel/carousel2.jpg"
import carousel3 from "./assets/carousel/carousel3.jpg"
import carousel4 from "./assets/carousel/carousel4.jpg"
export const photoArray = [
    {id: 1, source:carousel1},
    {id: 2, source:carousel2},
    {id: 3, source:carousel3},
    {id: 4, source:carousel4}
    ]


const Carousel_Photo = (props) => {
    return (
        <div className="carousel-item active">
            <img src={props.source} className="d-block w-100" alt="photo_gym"/>
        </div>
    )
}


export default Carousel_Photo;