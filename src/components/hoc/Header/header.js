import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import Icons from '../../Icons';
import { searching, home, tweet, direct } from './strings';

const Home = () => {
    return(
        <div className="header">
            <div className="container">
                <div className="navigation">
                    <ul>
                        <li>
                            <Link to="/home">{home}</Link>
                        </li>
                        <li>
                            <Link to="/direct">{direct}</Link>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                </div>
                <div className="nav-right">
                    <div className="search">
                        <form className="search-form">
                            <input type="text" placeholder="{search}" className="search-input" ></input>
                        </form>
                    </div>
                    <button className="tweet-button">
                        <span>{tweet}</span>
                    </button>
                </div>
             </div>
        </div>
    )
}

export default Home;