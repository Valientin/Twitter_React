import React from 'react';
import { Link } from 'react-router-dom';

import './home.scss';
import Icons from '../Icons';
import { reading, searching, connecting, title, description, login, register } from './strings';

const Home = () => {
    return(
        <div className="root-wrapper">
            <div className="right-block">
                <div className="right-block__text">
                    <div className="right-block__elem">
                        <Icons 
                            icon='search' 
                            size="35px" 
                            color="#fff" 
                            style={{margin: '0 5px 0 0'}}
                        />
                        <span>{reading}</span>
                    </div>
                    <div className="right-block__elem">
                        <Icons 
                            icon='people' 
                            size="35px" 
                            color="#fff"
                            style={{margin: '0 5px 0 0'}}                            
                        />
                        <span>{searching}</span>
                    </div>
                    <div className="right-block__elem">
                        <Icons 
                            icon='message' 
                            size="35px" 
                            color="#fff"
                            style={{margin: '0 5px 0 0'}}
                        />
                        <span>{connecting}</span>
                    </div>
                </div>
            </div>
            <div className="left-block">
                <div className="left-block__text">
                    <div className="block-text__top">
                        <Icons icon='twitter' size="50px" color="#1da1f2"/>
                        <Link className="top-link__login" to="/login" >{login}</Link>
                    </div>
                    <h2 className="block-text__title">{title}</h2>
                    <h3 className="block-text__description">{description}</h3>
                    <div className="bottom-link">
                        <Link className="bottom-link__all bottom-link__register" to="/register" >{register}</Link>
                        <Link className="bottom-link__all bottom-link__login" to="/login" >{login}</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;