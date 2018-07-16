import React from 'react';
import moment from 'moment';
import AddComment from '../AddComment';
import Comment from '../Comment';
import './comments.scss';

import { validate } from '../utils';


class Comments extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            commentError: false,
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
                formIsValid = this.state.formData[key].valid && formIsValid;
            }
            dataToSubmit.name = this.props.profileData.name;
            dataToSubmit.lastname = this.props.profileData.lastname;
            dataToSubmit.userName = this.props.profileData.userName;
            dataToSubmit.logo = this.props.profileData.imageProfile;
            dataToSubmit.date = moment().format('MMMM Do YYYY, h:mm:ss');
            if(formIsValid){
                this.setState({
                    commentError: ''
                })
                this.props.addTweetComment(this.props.userId, this.props.tweetId, dataToSubmit);
                console.log(dataToSubmit);
            } else {
                this.setState({
                    commentError: 'Коментарий пустой'
                })
            }
        }
    }

    showAllComments = () => (

        // console.log(Object.keys(this.props.allComments))
        this.props.allComments && Object.keys((this.props.allComments).length >= 1) && (typeof this.props.allComments === 'object') ? 
            Object.keys(this.props.allComments).map((item, i) => (
                <Comment key={i} {...this.props.allComments[item]} />
            ))
            // console.log(this.props.allComments)
        : null
    )

    

    render(){
		return(
            <div className="tweet-comment" >
                {this.showAllComments()}
                <AddComment
                    formData={this.state.formData}
                    submitForm={this.submitForm}
                    updateForm={this.updateForm}
                    commentError={this.state.commentError}
                />
            </div>
        )
    }
}

export default Comments;