import { connect } from 'react-redux';
import User from '../components/User';
import { compose, withState, withHandlers, withProps, lifecycle } from 'recompose';
import { GET_USER_DATA } from '../app/actions/actionTypes';
import { followedOnUser, unFollowedOnUser } from '../app/actions/user';

function mapDispatchToProps(dispatch){
    return {
        getUserData: (id) => dispatch({type: GET_USER_DATA, payload: id}),
        followedOnUserFirebase: (profileId, userId) => dispatch(followedOnUser(profileId, userId)),
        unFollowedOnUserFirebase: (profileId, userId) => dispatch(unFollowedOnUser(profileId, userId))
    }
}

const mapStateToProps = (state) => {
    return {
        userData: state.user
	}
};

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('followedUser', 'toggleFollowed', false),
    withHandlers({
        followedToUser: ({ toggleFollowed }) => {
            return () => {
                return toggleFollowed(true);
            };
        },
        unFollowedUser: ({ toggleFollowed }) => {
            return () => {
                return toggleFollowed(false);
            };
        }
    }),
    withProps(({  }) => {
        return {
            
        };
    }),
    lifecycle({
        componentWillMount() {
            if(this.props.match.params.id === this.props.user.uid){
                this.props.history.push('/profile')
            }
            this.props.getUserData(this.props.match.params.id)
        },
        componentWillReceiveProps(nextProps){
            if(Object.keys(nextProps.userData.userData).length >= 1){ 
                if(nextProps.userData.userData.followers){
                    if(nextProps.userData.userData.followers[nextProps.user.uid] && !this.props.followedUser){
                        this.props.followedToUser()
                    }
                }
            }
            const userData = nextProps.userData;
            !(userData.getUserData && userData.userData) ? 
                this.props.history.push('/profile')
            : null
        }
    })
)(User);