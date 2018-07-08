import React from 'react';

import './addTweet.scss';
import Icons from '../../widgets/Icons';
import { tweet, newTweet } from './strings';
import moment from 'moment';
import { validate } from '../../utils';
import ImageUploaderTweet from '../../widgets/Uploaders/ImageUploader/ImageUploaderTweet';
import AudioUploader from '../../widgets/Uploaders/AudioUploader';
import VideoUploader from '../../widgets/Uploaders/VideoUploader';
import FormField from '../../widgets/FormFields';


export default class addTweet extends React.Component {

    state = {
        TweetError:false,
        formData: {
            tweet: {
                element: 'textarea',
                value: '',
                config: {
                    name: 'tweet_input',
                    type: 'tweet',
                    className: 'tweet_input',
                    placeholder: 'Что нового?'
                },
                validation: {
                    required: true,
                    tweet:true
                },
                valid: false,
                touched: false,
                validationMessage: ''
            }
        },
        files: [],
        fileObjects: [],
        
    }
    componentWillUnmount(){
       if (this.props.tweetAddShow){
           this.clearForm('tweet')
       }
     }

     handleChangeImage(event) { 
        const files = this.state.files
        const fileObjects = []
        
        for (let key in event.target.files){
            if (key !== 'item' && key !== 'length' ){ 
                fileObjects[key] = event.target.files[key]
                  
                files.push({url: URL.createObjectURL(event.target.files[key]),show: false })
            }
        }
        this.setState({
          files,
          fileObjects
        }, () => {
            console.log(this.state.fileObjects)
        })
      }
      handleChangeVideo(event) { 
        const files = this.state.files
        const fileObjects = this.state.fileObjects
        
        
        for (let key in event.target.files){
            if (key !== 'item' && key !== 'length' ){ 
                files.push({filename: event.target.files[key].name })
                fileObjects.push(event.target.files[key] )
            }
        }
        this.setState({
          files,
          fileObjects
        }, () => {
            console.log(this.state.fileObjects)
        })
      }
      handleChangeAudio(event) { 
        const files = this.state.files
        const fileObjects = this.state.fileObjects
        
        
        for (let key in event.target.files){
            if (key !== 'item' && key !== 'length' ){ 
                files.push({filename: event.target.files[key].name })
                fileObjects.push(event.target.files[key] )
            }
        }
        this.setState({
          files,
          fileObjects
        }, () => {
            console.log(this.state.fileObjects)
        })
      }

    clearForm = (elem) => {
        
        const newFormData = {
            ...this.state.formData
        }
        
        
        const newElem = {
            ...newFormData[elem]
        }
        newElem.value = '';
        newFormData[elem] = newElem;

        this.setState({
            formData: newFormData
        })
    }

    updateForm = (elem) => {
        const newFormData = {
            ...this.state.formData
        }
        
        const newElem = {
            ...newFormData[elem.id]
        }
        newElem.value = elem.e.target.value;
        
        if(elem.blur){
            let validData = validate(newElem);
            newElem.valid = validData[0];
            newElem.validationMessage = validData[1]
        }
        
        newElem.touched = elem.blur;
        newFormData[elem.id] = newElem;
        
        this.setState({
            formData: newFormData
        })

    }

    submitForm = (e, type) => {
        e.preventDefault();
        if(type !== null){
            let dataToSubmit = {};
            let formIsValid = true;

            for(let key in this.state.formData){
                dataToSubmit[key] = this.state.formData[key].value;
                
            }
            dataToSubmit.date = moment().format('MMMM Do YYYY, h:mm:ss');
            dataToSubmit.fileObjects = this.state.fileObjects
            for(let key in this.state.formData){
                formIsValid = this.state.formData[key].valid && formIsValid;
            }
            console.log( dataToSubmit.fileObjects)
            if(formIsValid){
                const fileURLs = []
                this.setState({
                TweetError: false
                })
            
                this.props.addTweet(this.props.user.uid,dataToSubmit);


            } else {
                this.setState({
                    TweetError: true
                })
            }
        }
    }
    dropdownClickHandler = (e) => {
        e.nativeEvent.stopImmediatePropagation();
    }
    deleteFile = (file) =>{
        const newState = []
        this.state.files.map((item) =>{
            if (item != file){
                newState.push(item)
            }

        })
        this.setState({
            files: newState
          })
    }
    switchFull = (key) =>{
        const newData = {
            ...this.state.files
        }
        const newDataFile = {
            ...newData[key]
        }
        console.log(newDataFile)
        newDataFile.show = !newDataFile.show;
        newData[key] = newDataFile;
        let arr = []
        Object.keys(newData).forEach(item => {
            arr.push(newData[item])
        })
        this.setState({
            files: arr
        },()=>{
            console.log(this.state.files)
        })
        //let newFile={}
        //this.state.files.map((item) =>{
            //if (item == file){
              //  newFile.show = true;
               // newFile.url = item;
               // 
                //this.setState({
                    //files: newFile
                  //})
            //}

        //})
    }
	render(){
		return(
            <div className="tweet-form" onClick={this.dropdownClickHandler} >
                <div className="tweet-form__title">
                    <h3>{newTweet}</h3>
                
                </div>
                <div className="tweet-form__form">
                    <div className="tweet-form__field" >
                        <FormField
                            id={'tweet'}
                            formData={this.state.formData.tweet}
                            change={(elem) => this.updateForm(elem)}
                        />
                        <div className="uploaders" >
                            <div className="uploader">
                                <ImageUploaderTweet handleChangeImage={(e) => this.handleChangeImage(e)} files = {this.state.files} />
                            </div>
                            <div className="uploader">
                              <VideoUploader handleChangeVideo={(e) => this.handleChangeVideo(e)} files = {this.state.files} />
                            </div>
                            <div className="uploader">
                                <AudioUploader handleChangeAudio={(e) => this.handleChangeAudio(e)} files = {this.state.files} />
                            </div>
                        </div>
                        <div className="preview">
                            {this.state.files.map((item,i) =>(
                                item.url ?
                                <div className="preview-image" key={i}>
                                    <img className="image_preview"  src ={item.url} width="120px" height="100px" onClick={() => this.switchFull(i)} ></img>
                                    {item.show ?
                                        
                                        <div className="image_preview-big-wrapper" onClick={() => this.switchFull(i)}>
                                            <div className="image_preview-big-container">
                                                <img className="image_preview-big"  src ={item.url} ></img>
                                            </div>
                                        </div>
                                    : null}
                                    <button className="image-button-delete" onClick={() => this.deleteFile(item)}>x</button>
                                </div>
                                : null                             
                                ))
                            }
                        </div>
                        <div className="files">
                            {this.state.files.map((item,i) =>(
                                item.filename ?
                                <div className="file" key={i}>
                                    <Icons 
                                        icon='clip' 
                                        size="20px" 
                                        color="#66c4ff" 
                                        style={{margin: '0 5px 0 0'}}
                                    />
                                    <p>{item.filename}</p>
                                    <button className="file-button-delete" onClick={() => this.deleteFile(item)}>x</button>
                                </div>
                                
                                : null 

                                ))
                            }
                        </div>
                    </div>
                        <button className="tweet-button" onClick={(e) => this.submitForm(e, true)}>{tweet}</button>
                   
                    
                </div>
                
            </div>
        )	
	}

}