import React from 'react';
import './card.scss';


class Card extends React.Component {

    state = {
        checked : false
    }

    render() {

        return(
            <div className={`bingo-card__box ${this.state.checked ? "checked" : "" }`} onClick={() => {this.setState({checked : !this.state.checked})}}>{this.props.value}</div>

        )
    }

}

export default Card