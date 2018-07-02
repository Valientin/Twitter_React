import React from 'react';

import './home.scss';
import { title, description } from './strings';

const Home = () => {
    return(
        <div className="root-wrapper">
            <h1 className="title">{title}</h1>
        </div>
    )
}

export default Home;