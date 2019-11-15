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
                return this.displayWord(result.data)
            })
        }

    displayWord = (data) => {
        let words = data;
        return words;
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
                        <div className="display__words">☕ {this.state.phrase}</div>
                    </div>
                </div>
                <div className="display__presenter">
                    <img className="display__presenter-image" src={displayScreen} />
                    <div className="display__presenter-word-container">
                        <p className="display__presenter-word" ref="word">WORD MORE WORDS MORE WORDS</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}

export default BingoDisplay