// if(type){
//     firebase.auth()
//     .signInWithEmailAndPassword(
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