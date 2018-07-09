import { firebaseDB, firebaseStorage } from '../firebase';

export function getProfileDataApi(id){
    const request = firebaseDB.ref('users/' + id).once('value')
    .then((snapshot) => {
        const profileData = snapshot.val();
        
        return profileData;
    }).catch(err => console.log(err.message))

    return request;
}