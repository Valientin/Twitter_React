import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router'

import PrivateRoutes from '../hoc/AuthRoute/privateRoute';
import FormField from '../FormFields';
import Icons from '../Icons';
import Tweets from '../Tweets';
import Followers from '../Followers';
import Followed from '../Followed';

import { validate } from '../utils';
import './profile.scss';


class Profile extends React.Component {
	constructor(props){
		super(props);

		this.state = {
			changeProfile: false,
			userData: {
				name: 'faf',
				lastname: '',
				userName: '',
				about: '',
				city: '',
				internet: '',
				dete: ''
			},
			formData: {
				name: {
					element: 'input',
					value: '',
					config: {
						name: 'name_input',
						type: 'text',
						className: 'input__change input-change__name',
						placeholder: 'Имя'
					},
					validation: {
						required: true,
						name: true
					},
					valid: false,
					touched: false,
					validationMessage: ''
				},
				about: {
					element: 'input',
					value: '',
					config: {
						name: 'about_input',
						type: 'text',
						className: 'input__change input-change__about',
						placeholder: 'О себе'
					},
					validation: {
						required: false
					},
					valid: false,
					touched: false,
					validationMessage: ''
				},
				city: {
					element: 'input',
					value: '',
					config: {
						name: 'city_input',
						type: 'text',
						className: 'input__change input-change__city',
						placeholder: 'Местоположение'
					},
					validation: {
						required: false
					},
					valid: false,
					touched: false,
					validationMessage: ''
				},
				internet: {
					element: 'input',
					value: '',
					config: {
						name: 'internet_input',
						type: 'text',
						className: 'input__change input-change__internet',
						placeholder: 'Ваш сайт'
					},
					validation: {
						required: false
					},
					valid: false,
					touched: false,
					validationMessage: ''
				},
				date: {
					element: 'input',
					value: '',
					config: {
						name: 'date_input',
						type: 'text',
						className: 'input__change input-change__date',
						placeholder: 'Дата рождения (DD/MM/YYYY)'
					},
					validation: {
						required: true,
						date: true
					},
					valid: false,
					touched: false,
					validationMessage: ''
				}
			}
		}
	}
	

	componentDidMount(){
		this.props.getProfileData(this.props.user.uid);
	}

	componentWillReceiveProps(nextProps) {
		console.log(nextProps.profileData)
		for(let key in nextProps.profileData){
			if(this.state.formData[key]){
				const newData = nextProps.profileData[key];
				this.updateForm({id: key, value: newData});
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
        elem.e ? newElem.value = elem.e.target.value: newElem.value = elem.value;
        if(elem.blur){
            let validData = validate(newElem);
            newElem.valid = validData[0];
            newElem.validationMessage = validData[1]
        }

        newElem.touched = elem.blur;
        newFormData[elem.id] = newElem;

        this.setState({
            formData: newFormData
        })
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

                console.log(dataToSubmit);

            } else {
                this.setState({
                    registerError: validForm
                })
            }
        }
    }

	toggleChangeProfile = () => {
		this.setState({
			changeProfile: !this.state.changeProfile
		})
	}


	checkData(option, number = false){
		const profileData = this.props.profileData;
		if(profileData[option]) {
		  if(number) {return '0'};
		  return profileData[option] ;
		} else {
		  if(number) {return '0'};
		  return '';
		}
	   }

	showChangeWrapper = () => (
		this.state.changeProfile ? 
			<div className="user-white__wrapper"></div>
		: null
	)

	showChangeButton = () => (
		this.state.changeProfile ? 
			<div className="user-header__block-change">
				<button className="user-header__button user-header__annulment" onClick={() => this.toggleChangeProfile()}>Отмена</button>
				<button className="user-header__button user-header__save-change" onClick={() => this.toggleChangeProfile()}>Сохранить</button>
			</div>
		: 
			<button className="user-header__change" onClick={() => this.toggleChangeProfile()}>Изменить профиль</button>
					
	)

	showUserInfo = () => (
		!this.state.changeProfile ?
			<div className="user-info">
				<h3>{`${this.checkData('name')} ${this.checkData('lastname')}`}</h3>
				<span className="user-info__username">{`@${this.checkData('userName')}`}</span>
				<div className="user-info__calendar">
					<span><Icons 
						icon='calendar' 
						size="15px" 
						color="7a7a7a"
						style={{margin: '0 5px 0 0'}}
					/></span>
					<span>
						{`Регистрация: ${moment(this.props.user.metadata.creationTime).format("DD MMM YYYY")}`}
					</span>
				</div>
				<div className="user-info__image"></div>
			</div>
		: 
			<div className="user-info change">
				<FormField
					id={'name'}
					formData={this.state.formData.name}
					change={(elem) => this.updateForm(elem)}
				/>
				<FormField
					id={'about'}
					formData={this.state.formData.about}
					change={(elem) => this.updateForm(elem)}
				/>
				<FormField
					id={'city'}
					formData={this.state.formData.city}
					change={(elem) => this.updateForm(elem)}
				/>
				<FormField
					id={'internet'}
					formData={this.state.formData.internet}
					change={(elem) => this.updateForm(elem)}
				/>
				<div className="user-change__color">
					<button className="user-change__color-button">Цвет темы</button>
				</div>
				<FormField
					id={'date'}
					formData={this.state.formData.date}
					change={(elem) => this.updateForm(elem)}
				/>
			</div>

	)

	render(){
		const profileData = this.props.profileData;

		return(
			<div className="root-wrapper-user">
				{this.showChangeWrapper()}
				<div className="user-wrapper" >
				</div>
				<div className="user-header-wrapper">
					<div className="user-header">
						<ul className="user-nav">
							<li>
								<NavLink to="/profile/" exact className="user-nav__link">Твиты<span>{this.checkData('tweets',true)}</span></NavLink>
							</li>
							<li>
								<NavLink to="/profile/followed" className="user-nav__link">Читаемые<span>{this.checkData('followed',true)}</span></NavLink>
							</li>
							<li>
								<NavLink to="/profile/followers" className="user-nav__link">Читатели<span>{this.checkData('followers',true)}</span></NavLink>
							</li>
						</ul>
						{this.showChangeButton()}
					</div>
				</div>
				<div className="content-wrapper">
					<div className="content">
						{this.showUserInfo()}
						<Switch>
							<PrivateRoutes user={this.props.user} path='/profile/followers' exact component={Followers} />
							<PrivateRoutes user={this.props.user} path='/profile/followed' exact component={Followed} />
							<PrivateRoutes user={this.props.user} path='/profile' exact component={Tweets} />	
							<Redirect from='/profile/*' to='/404'/>
						</Switch>
					</div>
				</div>
			</div>
		)	
	}
}

export default Profile;