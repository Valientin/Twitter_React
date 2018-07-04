import React from 'react';
import { Link } from 'react-router-dom';
import FormField from '../FormFields';
import './header.scss';
import Icons from '../Icons';
import { searching, home, tweet, direct, validTweet } from './strings';


export default class Header extends React.Component {

    state = {
        showUserConfig: false,
        showTweetForm: false,
        formData: {
            tweet: {
                element: 'textarea',
                value: '',
                config: {
                    name: 'tweet_input',
                    type: 'tweet',
                    className: 'tweet_input',
                    placeholder: 'Что нового?'
                },
                validation: {
                    required: true,
                    tweet:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
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
            showUserConfig: false,
            showTweetForm: false
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
    toggleTweetForm = () => {
        this.setState({
            showTweetForm: !this.state.showTweetForm
        })
    }

    updateForm = (elem) => {
        const newFormData = {
            ...this.state.formData
        }
        console.log(elem);
        
        const newElem = {
            ...newFormData[elem.id]
        }
        newElem.value = elem.e.target.value;
        
        if(elem.blur){
            let validData = this.validate(newElem);
            newElem.valid = validData[0];
            newElem.validationMessage = validData[1]
        }
        
        newElem.touched = elem.blur;
        newFormData[elem.id] = newElem;
        
        this.setState({
            formData: newFormData
        })

    }

    validate = (elem) => {
        let error = [true,''];
        
        if(elem.validation.tweet){
            const valid = elem.value.length >= 5;
            const message = `${!valid ? validTweet : ''}`;
            error = !valid ? [valid, message] : error
        }

        if(elem.validation.required){
            const valid = elem.value.trim() !== '';
            const message = `${!valid ? validRequire : ''}`;
            error = !valid ? [valid, message] : error
        }

        return error;
    }

    submitForm = (e, type) => {
        e.preventDefault();
        if(type !== null){
            let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formData){
                dataToSubmit[key] = this.state.formData[key].value
            }
            for(let key in this.state.formData){
                formIsValid = this.state.formData[key].valid && formIsValid;
            }

            if(formIsValid){
                this.setState({
                loading: true,
                loginError: ''
                })



            } else {
                this.setState({
                    loginError: validForm
                })
            }
        }
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
    showTweetForm = () => (
        this.state.showTweetForm ?
        <div className="tweet-form-wrapper"  >
            <div className="tweet-form" onClick={this.dropdownClickHandler} >
                <div className="tweet-form__title">
                    <h3>Новый твит</h3>
                
                </div>
                <div className="tweet-form__form">
                    <div className="tweet-form__field" >
                        <FormField
                            id={'tweet'}
                            formData={this.state.formData.tweet}
                            change={(elem) => this.updateForm(elem)}
                        />
                    </div>
                </div>
                
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
                        <div onClick={this.dropdownClickHandler}>
                        <button className="tweet-button" onClick={() => this.toggleTweetForm()}>{tweet}</button>
                        </div>
                        
                    </div>
                    {this.showTweetForm()} 
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