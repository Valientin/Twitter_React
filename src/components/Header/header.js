import React from 'react';
import { Link } from 'react-router-dom';

import './header.scss';
import Icons from '../Icons';
import { searching, home, tweet, direct } from './strings';

export default class Header extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            showUserConfig: false
        }
    }

    componentDidMount(){
        document.addEventListener("click", this.documentClickHandler);
    } 
    
    componentWillUnmount() {
        document.removeEventListener("click", this.documentClickHandler);
    }
    
    documentClickHandler = () => {
        this.setState({
            showUserConfig: false
        });
    }

    dropdownClickHandler = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    }

    toggleUserConfig = () => {
        this.setState({
            showUserConfig: !this.state.showUserConfig
        })
    }

    showUserConfig = () => (
        this.state.showUserConfig ?
            <div className="user-config__list">
                <div className="user-config__info">
                    <h3>Валентин</h3>
                    <span>@valikRD167</span>
                </div>
                <div className="logout-wrapper" onClick={() => this.props.logout()}>
                    <Icons
                        icon='logout' 
                        size="20px" 
                        color="#1da1f2"
                        className='outline'
                        style={{margin: '0 12px 0 0'}}
                    />
                    <span>Выйти</span>
                </div>
            </div>
        : null
    )

    showTemplate = (user) => {
        let template = null;
            user ? template = (
                <div className="container">
                    <ul className="nav-left">
                        <li>
                            <Link to="/" className="nav-left__link">
                                <Icons 
                                    icon='home' 
                                    size="20px" 
                                    color="#777676"
                                    style={{margin: '0 5px 0 0'}}
                                />
                                <span>{home}</span>
                            </Link>
                        </li>
                        <li>
                            <Link to="/direct" className="nav-left__link">
                                <Icons 
                                    icon='mail' 
                                    size="20px" 
                                    color="#777676"
                                    style={{margin: '0 5px 0 0'}}
                                />
                                <span>{direct}</span>
                            </Link>
                        </li>
                    </ul>
                    <div className="logo">
                        <Icons icon='twitter' size="20px" color="#1da1f2"/>
                    </div>
                    <div className="nav-right">
                        <div className="user-config" onClick={this.dropdownClickHandler}>
                            <Icons 
                                icon='user' 
                                size="32px" 
                                handleIcon={this.toggleUserConfig}
                                style={{cursor: 'pointer'}}
                            />
                            {this.showUserConfig()}
                        </div>
                        <button className="tweet-button">{tweet}</button>
                    </div>
                </div>
            )
        : template = (
            <div className="container" style={{padding: "7px 0"}}>
                <div className="nav-left" >
                    <Link to="/" className="nav-left__link hide">
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
        )
        return template;
    }

    render(){
        return(
            <header>
                {this.showTemplate(this.props.user)}
            </header>
        )
    }
}