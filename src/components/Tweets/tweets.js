import React from 'react';
import { Link } from 'react-router-dom';
import './tweets.scss';

import ItemTweet from '../ItemTweet'

export default class Tweets extends React.Component {
	state = {
		showFull:false,
		imagePreviewUrl: null,
		showComment: false,
		commentId: null
	}
	componentDidMount(){
		console.log(this.props)
		this.props.getTweetsProfile(this.props.id)
	}
	toogleFullImage = (url) => {
		this.setState({
			showFull: !this.state.showFull,
			imagePreviewUrl: url
		})
	}
	toogleComments = (data) => {
		console.log(id)
		this.setState({
			showComment: !this.state.showComment,
			commentId: data.tweetId
		})
	}
	dropdownClickHandler = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    }


	showTweets = () => {
		const tweets = this.props.tweetsProfile ? Object.keys(this.props.tweetsProfile) : [];
		return tweets.length >=1 ?
			tweets.map((item,i) => {
				return(
					<ItemTweet 
						key={i} {...this.props.tweetsProfile[item]} 
						showFull = {this.state.showFull} 
						toogleFullImage={this.toogleFullImage} 
						toogleComments={this.toogleComments} 
						showComment={this.state.showComment} 
						commentId={this.state.commentId}
						tweetId={item}
						userId={this.props.id}

					/>
				)
			})
		: 
			<div className="user-tweets__none">
				<h3>Еще нет ни одного твита</h3>
			</div>
	}

	render(){
		return(	
			<div className="user-tweets">
				<div className="user-tweets__title">
						<h2>Твиты</h2>
					</div>
				{this.showTweets()}
				{this.state.showFull ?                      
                    <div className="tweet_preview-big-wrapper" onClick={() => this.toogleFullImage(this.state.imagePreviewUrl)}>
						<div className="tweet_preview-big-container" >
							<img className="tweet_preview-big"  src ={this.state.imagePreviewUrl} onClick={() => this.dropdownClickHandler} ></img>
						</div>
                    </div>
                : null}
			</div>
		)	
	}

}