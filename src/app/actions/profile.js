import { ADD_TWEET } from './actionTypes';
import { firebaseAuth, firebaseDB, firebaseStorage, firebaseStorage } from '../firebase';


export function addTweet(id,data) {
    let key = firebaseDB.ref(`users/${id}/tweets`).push().getKey();
    console.log(data)
    var file = data.fileObjects[0] 
    firebaseStorage.ref('img/').put(file).then(function(snapshot) {
        console.log('Uploaded a blob or file!');
    });
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