import { FOLLOWED_ON_USER, UNFOLLOWED_ON_USER } from './actionTypes';
import { firebaseDB } from '../firebase';

export function followedOnUser(profileID, userID){
    const request = {
        setFollowedProfile: false,
        setFollowersUser: false
    }

    firebaseDB.ref('users/' + userID).once('value')
    .then((snapshot) => {
        const profileData = snapshot.val();
        firebaseDB.ref(`users/${profileID}/followed/${userID}`).set({
            color:profileData.color,
            name:profileData.name,
            lastname:profileData.lastname,
            imageProfile: profileData.imageProfile
        })
    .then(() => {
        request.setFollowedProfile = true;
    })
    }).catch(err => console.log(err.message))

    firebaseDB.ref('users/' + profileID).once('value')
    .then((snapshot) => {
        const profileData = snapshot.val();
        const imageProfile = profileData.imageProfile ? profileData.imageProfile : null
        const color = profileData.color ? profileData.color : '#1f8acc'
        firebaseDB.ref(`users/${userID}/followers/${profileID}`).set({
            color:color,
            name:profileData.name,
            lastname:profileData.lastname,
            imageProfile: imageProfile
        })
    .then(() => {
        request.setFollowersUser = true;
    })
    }).catch(err => console.log(err.message))


    return {
        type: FOLLOWED_ON_USER,
        payload: request
    }
}

export function unFollowedOnUser(profileID, userID){
    const request = {
        setUnFollowedProfile: false,
        setUnFollowersUser: false
    }

    firebaseDB.ref(`users/${profileID}/followed/${userID}`).remove()
    .then(() => {
        request.setUnFollowedProfile = true;
    }).catch(err => console.log(err.message))
    
    firebaseDB.ref(`users/${userID}/followers/${profileID}`).remove()
    .then(() => {
        request.setUnFollowersUser = true;
    }).catch(err => console.log(err.message))

    return {
        type: UNFOLLOWED_ON_USER,
        payload: request
    }
}
