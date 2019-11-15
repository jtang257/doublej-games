import React from 'react';
import axios from 'axios';
import Header from '../Header/Header';
import presenter from '../../assets/presenter.png';

class BingoDisplay extends React.Component {

    render() {
        return(
            <>
            <Header />
            <img src={presenter} />
            </>
        )
    }
}

export default BingoDisplay