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


export function checkData(data, option, number = false, background = '#1da1f2'){ 
    if(number){
        return data[option] ? Object.keys(data[option]).length : '0'
    }
    if(option === 'imageProfile'){
        return data[option] ? `url(${data[option]}` :  `url(${background})`
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
        return data[option] ? data[option] : background
    }
    return data[option] ? data[option] : ''
}


export function uniqueName(name) {
    return name + Math.random().toString(36).substr(2, 9);
}