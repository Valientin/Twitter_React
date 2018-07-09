import React from 'react';
import { Link } from 'react-router-dom';
import './tweets.scss';

import ItemTweet from '../ItemTweet'

export default class Tweets extends React.Component {
	state = {
		showFull:false,
		imagePreviewUrl: null
	}
	componentDidMount(){
		this.props.getTweetsProfile(this.props.id)
	}
	toogleFullImage = (url) => {
		console.log("---------"+url)
		this.setState({
			showFull: !this.state.showFull,
			imagePreviewUrl: url
		})
	}


	showTweets = () => {
		const tweets = this.props.tweetsProfile ? Object.keys(this.props.tweetsProfile) : [];
		return tweets.length >=1 ?
			tweets.map((item,i) => {
				return(
					<ItemTweet key={i} {...this.props.tweetsProfile[item]} showFull = {this.state.showFull} toogleFullImage={this.toogleFullImage} />
				)
			})
		: null
	}

	render(){
		return(	
			<div className="user-tweets">
				<div className="user-tweets__title">
						<h2>Твиты</h2>
					</div>
				{this.showTweets()}
			</div>
		)	
	}

}