import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './bingoCard.scss';

class BingoCard extends React.Component {
    
    render() {
        return(
            <>
            <Header />
            <div className="bingo-card">
                <h2 className="bingo-card__title">BINGO</h2>
                <div className="bingo-card__button-container">
                    <button className="bingo-card__button">✔</button>
                    <button className="bingo-card__button">X</button>
                </div>
                <div className="bingo-card__box-container">
                    <div className="bingo-card__box-rounder">
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box "></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                        <div className="bingo-card__box"></div>
                    </div>
                </div>
                <h3 className="bingo-card__caption">Brought to you by: DoubleJ Games</h3>
            </div>
            </>
        )
    }
}

export default BingoCard;