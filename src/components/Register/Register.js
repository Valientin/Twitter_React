import React from 'react';
import { Link } from 'react-router-dom';
import FormField from '../FormFields';
import './Register.scss';

import { 
    registerState, validEmail, validPassword, validRequire, validForm,
    validName, firstQuestion, secondQuestion, login, register, registerB
} from './strings';

class Register extends React.Component {
    constructor(props){
        super(props);

        this.state = registerState;
    }

    componentDidMount(){
        console.log(this.props)
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

        if(elem.validation.name){
            const valid = elem.value.length >= 5;
            const message = `${!valid ? validName : ''}`;
            error = !valid ? [valid, message] : error
        }

        if(elem.validation.email){
            const valid = /\S+@\S+\.\S+/.test(elem.value)
            const message = `${!valid ? validEmail : ''}`;
            error = !valid ? [valid, message] : error
        }

        if(elem.validation.password){
            const valid = elem.value.length >= 6;
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
                registerError: ''
            })

                this.props.registerUser(dataToSubmit);

            } else {
                this.setState({
                    registerError: validForm
                })
            }
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.log.registerError){
            this.setState({
                loading: false,
                registerError: 'Ошыбка! Повторите попытку.'
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
        this.state.registerError !== '' ?
            <span className="register-block__error">
                {this.state.registerError}
            </span>
        : null
    )


    render(){
        return(
            <div className="register-wrapper">
                <div className="register-wrapper__inline">
                    {this.showLoader()}
                    <div className="register-block__top">
                        <h2 className="register-block__title">{register}</h2>
                        <form className="register-block__form" onSubmit={(e) => this.submitForm(e, null)}>
                            <FormField
                                id={'name'}
                                formData={this.state.formData.name}
                                change={(elem) => this.updateForm(elem)}
                            />
                            <FormField
                                id={'lastname'}
                                formData={this.state.formData.lastname}
                                change={(elem) => this.updateForm(elem)}
                            />
                            <FormField
                                id={'userName'}
                                formData={this.state.formData.userName}
                                change={(elem) => this.updateForm(elem)}
                            />
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
                            <div className="register-block__container">
                                <button className="register-block__submit" onClick={(e) => this.submitForm(e, true)}>{registerB}</button>
                                {this.showError()}
                            </div>
                        </form>
                    </div>
                    <div className="register-block__bottom">
                        <div className="register-bottom__wrapper">
                            <div className="register-bottom__link">
                                <p>{firstQuestion}</p>
                                <Link className="register-bottom__register" to="/login">{login}</Link>
                            </div>
                            <p>{secondQuestion}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Register;
