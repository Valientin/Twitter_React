import React from 'react'
import Icons from '../widgets/Icons';
import { Player } from 'video-react';
import "../../../node_modules/video-react/dist/video-react.css";
import './itemTweet.scss';
import Comments from '../Comments'

const ItemTweet = (props) => {
    const showFiles = () => {
        let template = null;
        let templates = []
        if(props.files){ 

                
            for (let key in props.files){
                if(props.files[key].type === "img"){
                    
                    template = (
                        <img className="tweet_image" src={props.files[key].url} onClick={() => props.toogleFullImage(props.files[key].url)} />
                    )
                    templates.push(template)
                }
                if(props.files[key].type === "video"){
                    template = (
                        <Player className="tweet_video"
                            playsInline
                            src={props.files[key].url}
                        />
                    )
                    templates.push(template)
                       
                }
                if(props.files[key].type === "audio"){
                    template = (
                        <audio preload="none" src={props.files[key].url} controls/>
                    )
                    templates.push(template)
                }
            }
        }
        return templates.map((item, i) => (
            <div className = "user-tweets__file" key={i}>
                {item}
            </div>
        ))
    }
    const showComment = () =>{
        return props.showComment ?
            <Comments 

            />
        :null
    }
    
    return (
        <div className="user-tweets__item">		
			<div className="user-tweets__photo">
			    <Icons icon='user' size="45px" />
            </div>
            <div className="user-tweets__text">
                <div className="user-tweets__info">
                <div className="user-tweets__info-name" >
                    <span className="user-tweets__name">MAXIM RUDENKO</span>
                    <span className="user-tweets__username">@MaximrudNko</span>
                </div>
                    <span className="user-tweets__time">{props.date}</span>
                    
                </div>
                <p>{props.tweet} </p>
                <div className="user-tweets__files" >
                    {showFiles()}
                </div>
                <div className="user-tweets__icons">
                    <div onClick={() => props.toogleComments(props)}>
                        <Icons icon='comment' size="16px" color="#0b1c50"  />
                    </div>
                    <div>
                        <Icons icon='like' size="16px" color="#0b1c50"/>
                    </div>
                </div>
                {showComment()}
                
            </div>
        </div>
    )
}




export default ItemTweet