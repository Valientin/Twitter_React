import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import Icons from '../../Icons';
import { searching, home, tweet, direct } from './strings';

const Home = () => {
    return(
        <div className="header">
            <div className="container" align="center">
                <div className="nav-left">
                    <ul>
                        <li>
                            <Link to="/home" className="nav-left__link">
                                <Icons 
                                    icon='home' 
                                    size="15px" 
                                    color="#a8a8a8"
                                    style={{margin: '0 5px 0 0'}}
                                />
                                <span>{home}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/direct" className="nav-left__link">
                                <Icons 
                                    icon='mail' 
                                    size="15px" 
                                    color="#a8a8a8"
                                    style={{margin: '0 5px 0 0'}}
                                />
                                <span>{direct}</span>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className="logo">
                    <Link to="/home"><Icons icon='twitter' size="20px" color="#1da1f2"/></Link>
                </div>
                <div className="nav-right">
                    <div className="search">
                        <form className="search__form" >
                            <input type="text" placeholder={searching} className="search-input" ></input>
                        </form>
                    </div>
                    <button className="tweet-button">
                        <span><b>{tweet}</b></span>
                    </button>
                </div>
             </div>
             <hr />
        </div>
    )
}

export default Home;