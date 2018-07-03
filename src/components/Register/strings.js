export const validEmail = 'Email должен быть валидный';
export const validPassword = 'Количество символов не меньше 6';
export const validRequire = 'Это поле обьязательное';
export const validForm = 'Форма не валидная';
export const validName = 'Количество символов не меньше 5';
export const firstQuestion = 'Уже пользовался Твиттером?';
export const secondQuestion = 'Пользовались Твиттером с помощью текстовых сообщений?';
export const login = 'Войти прямо сейчас »';
export const register = 'Регистрация в Твиттер';
export const registerB = 'Зарегистрироваться';

export const registerState = {
    registerError: '',
    loading: false,
    formData: {
        name: {
            element: 'input',
            value: '',
            config: {
                name: 'name_input',
                type: 'text',
                className: 'register-input register-input__name',
                placeholder: 'Ваше им\'я'
            },
            validation: {
                required: true,
                name: true
            },
            valid: false,
            touched: false,
            validationMessage: ''
        },
        lastname: {
            element: 'input',
            value: '',
            config: {
                name: 'lastname_input',
                type: 'text',
                className: 'register-input register-input__lastname',
                placeholder: 'Ваша фамилия'
            },
            validation: {
                required: true,
                name: true
            },
            valid: false,
            touched: false,
            validationMessage: ''
        },
        userName: {
            element: 'input',
            value: '',
            config: {
                name: 'userName_input',
                type: 'text',
                className: 'register-input register-input__userName',
                placeholder: 'Ваш ник'
            },
            validation: {
                required: true,
                name: true
            },
            valid: false,
            touched: false,
            validationMessage: ''
        },
        email: {
            element: 'input',
            value: '',
            config: {
                name: 'email_input',
                type: 'email',
                className: 'register-input register-input__email',
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
                className: 'register-input register-input__password',
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