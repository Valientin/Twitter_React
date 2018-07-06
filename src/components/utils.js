export function validate(elem){
    let error = [true,''];

    if(elem.validation.name){
        const valid = elem.value.length >= 5;
        const message = `${!valid ? 'Количество символов не меньше 5' : ''}`;
        error = !valid ? [valid, message] : error
    }

    if(elem.validation.tweet){
        const valid = elem.value.length <= 256;
        const message = `${!valid ? 'Не более 256 символов' : ''}`;
        error = !valid ? [valid, message] : error
    }

    if(elem.validation.email){
        const valid = /\S+@\S+\.\S+/.test(elem.value)
        const message = `${!valid ? 'Email должен быть валидный' : ''}`;
        error = !valid ? [valid, message] : error
    }

    if(elem.validation.password){
        const valid = elem.value.length >= 6;
        const message = `${!valid ? 'Длинна не меньше 6' : ''}`;
        error = !valid ? [valid, message] : error
    }

    if(elem.validation.required){
        const valid = elem.value.trim() !== '';
        const message = `${!valid ? "Это поле обьязательное" : ''}`;
        error = !valid ? [valid, message] : error
    }

    if(elem.validation.date){
        const valid = /(0[1-9]|[12][0-9]|3[01])[-/.](0[1-9]|1[012])[-/.](19|20)\d\d/i.test(elem.value)
        const message = `${!valid ? 'Дата не соответсвует стандарту' : ''}`;
        error = !valid ? [valid, message] : error
    }
    
    return error;
}


export function checkData(data, option, number = false, color = '#1da1f2'){ 
    if(number){
        return data[option] ? Object.keys(data[option]).length : '0'
    }
    if(option === 'about'){
        return data[option] ? `О себе: ${data[option]}` : ''
    }
    if(option === 'city'){
        return data[option] ? `Местоположение: ${data[option]}` : ''
    }
    if(option === 'internet'){
        return data[option] ? `Сайт: ${data[option]}` : ''
    }
    if(option === 'date'){
        return data[option] ? `Дата рождения: ${data[option]}` : ''
    }
    if(option === 'color'){
        return data[option] ? data[option] : color
    }
    return data[option] ? data[option] : ''
}

export const profileState = {
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
