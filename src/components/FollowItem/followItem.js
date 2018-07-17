import React  from 'react'
import { Link } from 'react-router-dom';
import './followItem.scss';



const FollowItem = (props) => {
  return (
    <div className="follower">
        <div className="follower__wrapper" style={{backgroundColor:props.color}}>
            <div className="follower__photo" style={props.imageProfile ? {background: `url(${props.imageProfile})`} : {backgroundColor: `#1f8acc`} }>
            </div>
        </div>
        <div className="follower__info" align='center'>	
            <Link to={`/user/${props.id}`} className="follower__link"> {props.name} {props.lastname}</Link>
        </div>
    </div>
  )
}

export default FollowItem   

