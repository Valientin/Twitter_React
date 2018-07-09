export const profileState = {
    changeProfile: false,
    changeUserError: false,
    showColorPicker: false,
    color: '#1da1f2',
    imageProfile: null,
    imageProfileObj: null,
    showUploader: false,
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
