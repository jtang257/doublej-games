import React from 'react';
import Header from '../Header/Header';
import arrow from '../../assets/arrow-image.png'
import './landing.scss';

class Landing extends React.Component {
    render() {
        return(
            <>
                <Header />
                <div className="help">
                    <img className="help__arrow" src={arrow} />
                </div>
            </>
        )
    }
}

export default Landing;