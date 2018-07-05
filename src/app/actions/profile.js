import { ADD_TWEET } from './actionTypes';
import { firebaseAuth, firebaseDB } from '../firebase';


export function addTweet(id,data) {
    var key = firebaseDB.ref(`users/${id}/tweets`).push().getKey();
    const request = firebaseDB.ref(`users/${id}/tweets/${key}`).set(
        {
            text: data.tweet,
            date:  data.date,
            commnets: ' '
        }
    ).then( ()=> {
        return {
            type: ADD_TWEET,
            payload: true
        }
    }).catch( e => {
        return {
            type: ADD_TWEET,
            payload: 'error'
         }
    })
    return request;
}