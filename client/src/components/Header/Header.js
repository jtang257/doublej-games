import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './Header.scss';

class Header extends React.Component {
    render() {
        return (
            <nav className="header">
                <div className="header__container">
                    <div className="header__title-container">
                        <Link to="/">
                            <div className="header__logo-container">
                                <img src={logo} className="header__logo" alt="logo" />
                            </div>
                        </Link>
                        <h1 className="header__title-logo">CORPORATE LINGO BINGO ☕</h1>
                    </div>
                    <div className="header__navigation">
                        <Link to="/card" className="header__link">CARD</Link>
                        <Link to="/display" className="header__link">DISPLAY</Link>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Header;