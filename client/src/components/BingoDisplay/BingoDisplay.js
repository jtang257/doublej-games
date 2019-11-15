import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './bingoDisplay.scss';
import presenter from '../../assets/presenter.png';
import bingoSpinner from '../../assets/bingo-spinner.png';
import displayScreen from '../../assets/display-screen.png';


class BingoDisplay extends React.Component {

    state = {
        phrase : ""
    }
    
    loadCallerCard = () => {
        axios.get('https://corporatebs-generator.sameerkumar.website/')
            .then(result => {
                this.setState({
                    phrase : result.data.phrase
                })
            })
        }
 
    render() {
        return(
            <>
            <Header />
            <div className="display">
                <div className="display__container" onClick={() => {this.loadCallerCard()}}>
                    <div className="display__image-container">
                        <img className="display__image" src={bingoSpinner} />
                    </div>
                    <div className="display__words-container">
                        <div className="display__words">{this.state.phrase}</div>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default BingoDisplay