import React from 'react';

import './comments.scss';
import Icons from '../widgets/Icons';
//import { } from './strings';
import { validate } from '../utils';
import FormField from '../widgets/FormFields';


export default class Comments extends React.Component {

    state = {
        TweetError:false,
        formData: {
            comment: {
                element: 'textarea',
                value: '',
                config: {
                    name: 'comment_input',
                    type: 'comment',
                    className: 'comment_input',
                    placeholder: 'Ваше мнение?'
                },
                validation: {
                    required: true,
                    tweet:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        },
        files: [],
        fileObjects: [],
        filesError:false
        
    }
    render(){
		return(
            <div className="tweet-form__field" >
            <FormField
                id={'comment'}
                formData={this.state.formData.comment}
                change={(elem) => this.updateForm(elem)}
            />
            </div>
        )}

}