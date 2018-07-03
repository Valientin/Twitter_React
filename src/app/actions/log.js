import { LOGIN_USER, REGISTER_USER } from './actionTypes';
import { firebaseAuth } from '../firebase';

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

//  } else {
//     firebase.auth()
//     .createUserWithEmailAndPassword(
//        dataToSubmit.email,
//        dataToSubmit.password
//     ).then(() => {
//        this.props.history.push('/')
//     }).catch((err) => {
//        this.setState({
//           loading: false,
//           registerError: err.message
//        })
//     })
//  }