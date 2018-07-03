import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import Icons from '../Icons';
import { searching, home, tweet, direct } from './strings';

export default class Header extends React.Component{

    showTemplate = (user) => {
        let template = null;
            user ? template = (
            <div className="header">
                <div className="container">
                    <ul className="nav-left">
                        <li>
                            <Link to="/" className="nav-left__link">
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
                    <div className="logo">
                        <Link to="/"><Icons icon='twitter' size="20px" color="#1da1f2"/></Link>
                    </div>
                    <div className="nav-right">
                        <div className="search">
                            <form className="search__form" >
                                <input type="text" placeholder={searching} className="search-input" ></input>
                            </form>
                        </div>
                        <button className="tweet-button">{tweet}</button>
                        </div>
                    </div>
                </div>
            )
        : template = (
            <div className="header" style={{padding: "11px 25px"}}>
                <div className="container" >
                    <div className="nav-left" >
                        <Link to="/home" className="nav-left__link hide">
                            <Icons 
                                icon='twitter' 
                                size="20px" 
                                color="#1da1f2"
                                style={{margin: '0 5px 0 0'}}
                            /> 
                            <span>{home}</span>
                        </Link>
                    </div>
                </div>
            </div>
        )
        return template;
    }

    render(){
        return(
            <header>
                {this.showTemplate(false)}
            </header>
        )
    }
}