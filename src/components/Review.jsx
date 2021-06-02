import React from "react";
import {Rating} from "semantic-ui-react";
import "./review.css"
import {connect} from "react-redux";
import {push_data, push_one_data} from "../actions";
import comment_icon from "./../assets/comment_icon.jpg"

class Review extends React.Component {
    constructor(props) {
        super(props);
        this.state = {login: "", text: "", rating: 1, loadDataEvent: false}
        this.onDataLoad = this.onDataLoad.bind(this)
    }

    onLoginChange = (event) => {
        this.setState({login: event.target.value});
    }
    onTextChange = (event) => {
        this.setState({text: event.target.value});
    }

    onFormSubmit(event) {
        event.preventDefault();
    }

    onFormClick = () => {
this.props.push_data(this.state.login, this.state.text,this.state.rating)
        this.props.push_one_data(this.state.login, this.state.text, this.state.rating);
        console.log(this.state);
    }

    onDataLoad() {
        console.log(this.props.reviewReducer);
    }

    renderReviews() {
        return this.props.reviewReducer.map(e => {
            return <div key={e.login} className="comments_wrapper">
                <div className="ui comments">
                    <div className="comment">
                        <a className="avatar">
                            <img src={comment_icon} alt=""/>
                        </a>
                        <div className="content">
                            <span className="author review_author">{e.login}</span>
                            <div className="metadata">
                                <div className="date">Today in {new Date().getHours()}:{new Date().getMinutes()}</div>
                                <div className="rating">
                                    <i className="star icon"></i>
                                    {e.rating} Faves
                                </div>
                            </div>
                            <div className="text">
                                {e.text}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        })
    }


    onDataLoad() {
        if (this.state.loadDataEvent === true) {
            return this.renderReviews()
        } else {
            return <span></span>
        }
    }

    CheckRating = (e, { rating }) => {
        console.log(rating)
        this.setState({rating: rating})
    }

    render() {
        return (
            <div className="review_wrapper">
                <h3 className="review_header"><i  className=" ui bookmark outline icon"></i>Оставить отзыв</h3>
                <form action="" onSubmit={this.onFormSubmit}>
                    <input onChange={this.onLoginChange} value={this.state.login} type="text" placeholder="Ваше Имя" className="review_login"/>
                    <Rating style={{backgroundColor: "#101010"}} icon='star' defaultRating={5} size='huge' maxRating={5}  onRate={ this.CheckRating }/>
                    <input onChange={this.onTextChange} value={this.state.text} type="text" placeholder="Напишите ваш отзыв" className="review_text"/>
                    <button className="review_button" onClick={this.onFormClick}>Отправить</button>
                </form>
                {this.onDataLoad()}
                <button onClick={() => this.setState({loadDataEvent: true})} className="review_load_allData">Загрузить отзывы</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {...state};
}

export default connect(mapStateToProps, {push_data, push_one_data})(Review);