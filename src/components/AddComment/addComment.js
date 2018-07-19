import React from 'react';

import FormField from '../widgets/FormFields';
import './addComment.scss';

const AddComment = (props) => {

    const showError = () => (
        props.commentError !== '' ?
            <span className="tweet-comment__error">
                {props.commentError}
            </span>
        : null
    )

    return(
        <form className="tweet-comment__form" onSubmit={(e) => props.submitForm(e, null)}>
            <FormField
                id={'comment'}
                formData={props.formData.comment}
                change={(elem) => props.updateForm(elem)}
            />
            <div className="tweet-comment__container">
                <button className="tweet-comment__submit" onClick={(e) => props.submitForm(e, true)}>+</button>
                {showError()}
            </div>
        </form>
    )
}

export default AddComment;