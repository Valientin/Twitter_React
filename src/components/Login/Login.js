import React from 'react';
import { Link } from 'react-router-dom';
import FormField from '../FormFields';
import './Login.scss';

import { validEmail, validPassword, validRequire, validForm, firstQuestion, secondQuestion,register } from './strings';

class Login extends React.Component {
   state = {
        loginError: '',
        loading: false,
        formData: {
            email: {
                element: 'input',
                value: '',
                config: {
                    name: 'email_input',
                    type: 'email',
                    className: 'login-input login-input__email',
                    placeholder: 'Адрес електронной почты'
                },
                validation: {
                    required: true,
                    email: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            },
            password: {
                element: 'input',
                value: '',
                config: {
                    name: 'password_input',
                    type: 'password',
                    className: 'login-input login-input__password',
                    placeholder: 'Пароль'
                },
                validation: {
                    required: true,
                    password: true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        }
    }


    updateForm = (elem) => {
        const newFormData = {
            ...this.state.formData
        }
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

        if(elem.validation.email){
            const valid = /\S+@\S+\.\S+/.test(elem.value)
            const message = `${!valid ? validEmail : ''}`;
            error = !valid ? [valid, message] : error
        }

        if(elem.validation.password){
            const valid = elem.value.length >= 5;
            const message = `${!valid ? validPassword : ''}`;
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

                this.props.loginUser(dataToSubmit);

            } else {
                this.setState({
                    loginError: validForm
                })
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.log.loginError){
            this.setState({
                loading: false,
                loginError: 'Пользователь не найден. Повторите попытку!'
            })
        } 
    }

    showLoader = () => (
        this.state.loading ?
            <div className="loader__wrapper">
                <div className="loader"><div></div><div></div></div>
            </div>
        : null
    )

    showError = () => (
        this.state.loginError !== '' ?
            <span className="login-block__error">
                {this.state.loginError}
            </span>
        : null
    )


    render(){
        return(
            <div className="login-wrapper">
                <div className="login-wrapper__inline">
                    {this.showLoader()}
                    <div className="login-block__top">
                        <h2 className="login-block__title">Войти в Твиттер</h2>
                        <form className="login-block__form" onSubmit={(e) => this.submitForm(e, null)}>
                            <FormField
                                id={'email'}
                                formData={this.state.formData.email}
                                change={(elem) => this.updateForm(elem)}
                            />
                            <FormField
                                id={'password'}
                                formData={this.state.formData.password}
                                change={(elem) => this.updateForm(elem)}
                            />
                            <div className="login-block__container">
                                <button className="login-block__submit" onClick={(e) => this.submitForm(e, true)}>Войти</button>
                                {this.showError()}
                            </div>
                        </form>
                    </div>
                    <div className="login-block__bottom">
                        <div className="login-bottom__wrapper">
                            <div className="login-bottom__link">
                                <p>{firstQuestion}</p>
                                <Link className="login-bottom__register" to="/register">{register}</Link>
                            </div>
                            <p>{secondQuestion}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Login;
