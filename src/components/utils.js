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