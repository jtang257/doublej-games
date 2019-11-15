import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import Card from '../Card/Card';
import './bingoCard.scss';

class BingoCard extends React.Component {
    

    state = {
        cardData : []
    }
    
    // api call 
      cardDataPull = () => {
        axios.get('http://localhost:7700/getMyCard')
          .then(result => {
            this.setState({
                cardData: result.data
            })
            console.log(result.data)
            // this.boxGenerator();
          })
          .catch(err => {
                console.log(err);
          })
      }

    // box generator

      boxGenerator = () => {
        return this.state.cardData.map((value) => {
          return <Card value={value} />
        })
      }

    render() {
        return(
            <>
            <Header />
            <div className="bingo-card">
                <h2 className="bingo-card__title">BINGO</h2>
                <div className="bingo-card__button-container">
                    <button className="bingo-card__button" onClick={() => {this.cardDataPull()}}>✔</button>
                    <button className="bingo-card__button">X</button>
                </div>
                <div className="bingo-card__box-container">
                    <div className="bingo-card__box-rounder">
                        {this.boxGenerator()}
                    </div>
                </div>
                <h3 className="bingo-card__caption">Brought to you by: DoubleJ Games</h3>
            </div>
            </>
        )
    }
}

export default BingoCard;