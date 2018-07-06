import React from 'react';
import { NavLink, Switch } from 'react-router-dom';
import moment from 'moment';
import { Redirect } from 'react-router';
import { TwitterPicker } from 'react-color';

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
			changeUserError: false,
			showColorPicker: false,
			color: '#1da1f2',
			formData: {
				name: {
					element: 'input',
					value: '',
					config: {
						name: 'name_input',
						type: 'text',
						className: 'input-change input-change__name',
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
						className: 'input-change input-change__about',
						placeholder: 'О себе'
					},
					validation: {
						required: false
					},
					valid: true,
					touched: false,
					validationMessage: ''
				},
				city: {
					element: 'input',
					value: '',
					config: {
						name: 'city_input',
						type: 'text',
						className: 'input-change input-change__city',
						placeholder: 'Местоположение'
					},
					validation: {
						required: false
					},
					valid: true,
					touched: false,
					validationMessage: ''
				},
				internet: {
					element: 'input',
					value: '',
					config: {
						name: 'internet_input',
						type: 'text',
						className: 'input-change input-change__internet',
						placeholder: 'Ваш сайт'
					},
					validation: {
						required: false
					},
					valid: true,
					touched: false,
					validationMessage: ''
				},
				date: {
					element: 'input',
					value: '',
					config: {
						name: 'date_input',
						type: 'text',
						className: 'input-change input-change__date',
						placeholder: 'Дата рождения (DD/MM/YYYY)'
					},
					validation: {
						required: false,
						date: true
					},
					valid: true,
					touched: false,
					validationMessage: ''
				}
			}
		}
	}

	componentDidMount(){
		this.props.getProfileData(this.props.user.uid);
		document.addEventListener("click", this.documentClickHandler);
	}

	componentWillReceiveProps(nextProps) {
		this.updateForm(nextProps.profileData, true);
		this.setState({color: nextProps.profileData.color})
	}

	componentWillUnmount() {
        document.removeEventListener("click", this.documentClickHandler);
	}
	
	documentClickHandler = () => {
        this.setState({
            showColorPicker: false
        });
    }
	

	dropdownClickHandler = (e) => {
        e.nativeEvent.stopImmediatePropagation();
	}
	
	toggleColorPicker = (e) => {
		this.dropdownClickHandler(e)
		this.setState({
			showColorPicker: !this.state.showColorPicker
		})
	}

	handleChangeColor = (color) => {
		this.setState({color: color.hex})
	}

	updateForm = (elem, sprey = false) => {
        const newFormData = {
            ...this.state.formData
		}
		if(sprey){
			for(let key in elem){
				if(newFormData[key]){
					if(key === 'name'){
						newFormData[key].valid = true;
					}
					newFormData[key].value = elem[key];
				}
			}
		} else {

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
		}
		
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
				dataToSubmit.color = this.state.color;
            }
            for(let key in this.state.formData){
				formIsValid = this.state.formData[key].valid && formIsValid;
            }

            if(formIsValid){
                this.setState({
                loading: true,
				changeUserError: false,
				changeProfile: false
			})
				this.props.changeProfileData(this.props.user.uid, dataToSubmit);
				this.props.getProfileData(this.props.user.uid);
            } else {
                this.setState({
                    changeUserError: true
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
		if(number){
			return profileData[option] ? Object.keys(profileData[option]).length : '0'
		}
		if(option === 'about'){
			return profileData[option] ? `О себе: ${profileData[option]}` : ''
		}
		if(option === 'city'){
			return profileData[option] ? `Местоположение: ${profileData[option]}` : ''
		}
		if(option === 'internet'){
			return profileData[option] ? `Сайт: ${profileData[option]}` : ''
		}
		if(option === 'date'){
			return profileData[option] ? `Дата рождения: ${profileData[option]}` : ''
		}
		if(option === 'color'){
			return profileData[option] ? profileData[option] : this.state.color
		}
		return profileData[option] ? profileData[option] : ''
	}

	showColorPicker = () => (
        this.state.showColorPicker ?
            <div className="user-config__list" >
               <TwitterPicker
					color={this.state.color}
					onChangeComplete={this.handleChangeColor}
			   />
            </div>
        : null
	)

	showChangeWrapper = () => (
		this.state.changeProfile ? 
			<div className="user-white__wrapper"></div>
		: null
	)

	showChangeButton = () => (
		this.state.changeProfile ? 
			<div className="user-header__block-change">
				<button className="user-header__button user-header__annulment" onClick={() => this.toggleChangeProfile()}>Отмена</button>
				<button className="user-header__button user-header__save-change" onClick={(e) => this.submitForm(e, true)}>Сохранить</button>
			</div>
		: 
			<button className="user-header__change" onClick={() => this.toggleChangeProfile()}>Изменить профиль</button>
					
	)

	showUserInfo = () => (
		!this.state.changeProfile ?
			<div className="user-info">
				<h3>{this.props.profileData.name ? this.props.profileData.name : ''}</h3>
				<p className="user-info__data username">{`@${this.checkData('userName')}`}</p>
				<p className="user-info__data about">{this.checkData('about')}</p>
				<p className="user-info__data city">{this.checkData('city')}</p>
				<p className="user-info__data internet">{this.checkData('internet')}</p>
				<p className="user-info__data date">{this.checkData('date')}</p>
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
				<div className="user-info__image" style={{background: this.checkData('color')}}></div>
			</div>
		: 
			<div className="user-info change">
				<form onSubmit={(e) => this.submitForm(e, null)} className="user-change__form">
					<FormField
						id={'name'}
						formData={this.state.formData.name}
						change={(elem) => this.updateForm(elem)}
					/>
					<span className="user-info__username">{`@${this.checkData('userName')}`}</span>
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
						<button className="user-change__color-button" onClick={(e) => this.toggleColorPicker(e)}>Цвет темы</button>
						<div className="user-color" onClick={(e) => this.dropdownClickHandler(e)}>
							{this.showColorPicker()}
						</div>
					</div>
					<FormField
						id={'date'}
						formData={this.state.formData.date}
						change={(elem) => this.updateForm(elem)}
					/>
					<div className="user-info__image" style={{background: this.checkData('color')}}></div>
				</form>
			</div>

	)

	render(){
		const profileData = this.props.profileData;

		return(
			<div className="root-wrapper-user">
				{this.showChangeWrapper()}
				<div className="user-wrapper">
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