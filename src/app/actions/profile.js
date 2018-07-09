import { ADD_TWEET, ADD_TWEET_TO_STATE } from './actionTypes';
import { firebaseAuth, firebaseDB, firebaseStorage } from '../firebase';

function guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() +  + s4() +  + s4() +  + s4() +  + s4() + s4() + s4();
  }

export function addTweetState(uid,data){
    const id = guid()
    const request = {};
    request[id] = data;
    return{
        type: ADD_TWEET_TO_STATE,
        payload: request
    }
}

export function addTweet(id,data) {
    let UidKey = firebaseDB.ref(`users/${id}/tweets`).push().getKey();
    let files = data.fileObjects;
    let isReady = false; 
    const FilesUrl = []
    for (let key in files){
        let randomFileName = guid();
        let file = files[key].obj;
        firebaseStorage.ref(`img/${id}/userMedia/${randomFileName}`).put(file).then(function(snapshot) {
            firebaseStorage.ref(`img/${id}/userMedia/`)
            .child(randomFileName).getDownloadURL()
            .then( url => {
                firebaseDB.ref(`tweets/${id}/${UidKey}/files/${key}`).set(
                    {
                        url: url,
                        type: files[key].type
                    }
                )

            })
         });
           

    }
    
   // firebaseStorage.ref('img/').put(file).then(function(snapshot) {
   //     console.log('Uploaded a blob or file!');
   // });
    
    const request = firebaseDB.ref(`tweets/${id}/${UidKey}`).set(
        {
            tweet: data.tweet,
            date:  data.date,
            commnets: ' ',
        }
    ).then( ()=> {
        console.log('Uploaded a blob or file!');
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