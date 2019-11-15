import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import './bingoDisplay.scss';
import presenter from '../../assets/presenter.png';

class BingoDisplay extends React.Component {

    render() {
        return(
            <>
            <Header />
            <div className="display">
                <div className="display__container">
                    <img className="display__image"src={presenter} />
                    <div className="display__words">Words</div>
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