import React from 'react';

import './comment.scss';

const Comment = (props) => {
    return(
        <div className="tweet-comment__item">
            <div className="tweet-comment__logo" style={{background: `url(${props.logo})`}}></div>
            <div className="tweet-comment__info">
                <div className="tweet-comment__top">
                    <div className="tweet-comment__user">
                        {`${props.name} ${props.lastname}`}
                        <div className="tweet-comment__username">@{props.userName}</div>
                    </div>
                    <div className="tweet-comment__date">{props.date}</div>
                </div>
                <div className="tweet-comment__text">{props.comment}</div>
            </div>
        </div>
    )
}

export default Comment;