import { LOGIN_USER, REGISTER_USER, LOGOUT, CHANGE_PROFILE_DATA} from './actionTypes';
import { firebaseAuth, firebaseDB, firebaseStorage } from '../firebase';
import { uniqueName } from '../../components/utils';

export function changeProfileData(id, data){
    const newData = {...data};
    newData.imageProfile = uniqueName(data.imageProfile.name);
    firebaseStorage.ref(`img/${id}/${newData.imageProfile}`).put(data.imageProfile)
    .catch(e => console.log(e.message))
                
    const request = firebaseDB.ref('users/' + id).update({
        ...newData
    }).then(() => {
        return newData;
    }).catch(e => { console.log(e.message )})

    return {
        type: CHANGE_PROFILE_DATA,
        payload: request
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