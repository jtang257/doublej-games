import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './bingoDisplay.scss';
import presenter from '../../assets/presenter.png';

function loadCallerCard() {
axios
  .get('https://corporatebs-generator.sameerkumar.website/')
    .then(result => {
      return result;  
    })
}

class BingoDisplay extends React.Component {
    
    render() {
        return(
            <>
            <Header />
            <div className="display">
                <div className="display__container" onClick={loadCallerCard()} >
                    <img className="display__image"src={presenter} />
                    <div className="display__words">{result}</div>
                    <div className="display__words">Words</div>
                    <div className="display__words">Words</div>
                    <div className="display__words">Words</div>
                    <div className="display__words">Words</div>
                </div>
            </div>
            </>
        )
    }
}

export default BingoDisplay