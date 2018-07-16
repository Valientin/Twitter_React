import React from 'react';
import { Link } from 'react-router-dom';
import Icons from '../widgets/Icons';
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
		this.props.getProfileDataTweets(this.props.profileId ? this.props.profileId : this.props.id);
		this.props.getTweetsProfile(this.props.id);
	}

	componentWillUnmount(){
		this.props.clearTweetsState()
	}
	toogleFullImage = (url) => {
		this.setState({
			showFull: !this.state.showFull,
			imagePreviewUrl: url
		})
	}
	showComments = (id) => {
		if(id !== this.state.commentId && this.state.showComment){
			this.setState({
				commentId: id
			})
		} else {
			this.setState({
				showComment: !this.state.showComment,
				commentId: id
			})
		}
		
	}
	dropdownClickHandler = (e) => {
        e.nativeEvent.stopImmediatePropagation();
	}
	
	showFull = () => (
		this.state.showFull ?                      
			<div className="tweet_preview-big-wrapper" onClick={() => this.toogleFullImage(this.state.imagePreviewUrl)}>
				<div className="tweet_preview-big-container" >
					<img className="tweet_preview-big"  src ={this.state.imagePreviewUrl} onClick={() => this.dropdownClickHandler} ></img>
				</div>
			</div>
		: null
	)


	showTweets = () => {
		const tweets = this.props.tweetsProfile ? Object.keys(this.props.tweetsProfile) : [];
		return tweets.length >=1 ?
			tweets.map((item,i) => {
				return(
					<ItemTweet 
						key={i} 
						{...this.props.tweetsProfile[item]} 
						showFull = {this.state.showFull} 
						toogleFullImage={this.toogleFullImage} 
						showComments={(id) => this.showComments(id)} 
						showComment={this.state.showComment} 
						commentId={this.state.commentId}
						profileData={this.props.profileData}
						addTweetComment={this.props.addTweetComment}
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
				{this.showFull()}
				<div className="user-tweets__logo">
					<Icons icon='twitter' size="20px" color="#000" />
				</div>
			</div>
		)	
	}

}