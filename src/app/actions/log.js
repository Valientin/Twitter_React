import { LOGIN_USER, REGISTER_USER, LOGOUT, CHANGE_PROFILE_DATA} from './actionTypes';
import { firebaseAuth, firebaseDB, firebaseStorage } from '../firebase';
import { uniqueName } from '../../components/utils';

export function changeProfileData(id, data){
    const newData = {...data};
    if(newData.imageProfile){
        newData.imageProfile = uniqueName(data.imageProfile.name);
        firebaseStorage.ref(`img/${id}/${newData.imageProfile}`).put(data.imageProfile)
        .then(() => {
            firebaseStorage.ref(`img/${id}/`)
            .child(newData.imageProfile).getDownloadURL()
            .then( url => {
                newData.imageProfile = url;
            }).then(() => {
                firebaseDB.ref('users/' + id).update({
                    ...newData
                }).then(() => {
                    // console.log(newData);
                }).catch(e => { console.log(e.message )})
            }).catch(err => console.log(err.message))
        })
        .catch(e => console.log(e.message))
    } else {
        firebaseDB.ref('users/' + id).update({
            ...newData
        }).then(() => {
            // console.log(newData);
        }).catch(e => { console.log(e.message )})
    }

    return {
        type: CHANGE_PROFILE_DATA,
        payload: newData
    }
}


export function loginUser(data) {
    const request = firebaseAuth.signInWithEmailAndPassword(
        data.email,
        data.password
    ).then(() => {
        return {
            type: LOGIN_USER,
            payload: false
        }
    }).catch((err) => {
        return {
            type: LOGIN_USER,
            payload: true
        }
    })

    return request;
}

export function registerUser(data) {
    const request = firebaseAuth.createUserWithEmailAndPassword(
        data.email,
        data.password
    ).then((user) => {
        firebaseDB.ref('users/' + user.user.uid).set({
            userName: data.userName,
            name: data.name,
            lastname: data.lastname,
            email: data.email
        })
        
        return {
            type: REGISTER_USER,
            payload: false
        }
    }).catch((err) => {
        return {
            type: REGISTER_USER,
            payload: true
        }
    })

    return request;
}

export function logout() {
    const request = firebaseAuth.signOut()
    .then(() => {
        return {
            type: LOGOUT,
            payload: false
        }
    }).catch((err) => {
        return {
            type: LOGOUT,
            payload: true
        }
    });

    return request;
}