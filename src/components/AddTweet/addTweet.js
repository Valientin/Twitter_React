import React from 'react';

import './addTweet.scss';
import Icons from '../Icons';
import { tweet, newTweet } from './strings';
import moment from 'moment';
import {validate} from '../utils';
import ImageUploader from '../Uploaders/ImageUploader';
import FormField from '../FormFields';


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

     handleChange(event) { 
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
            //console.log(this.state)
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
    showFull = (key) =>{
        const newData = {
            ...this.state.files
        }
        const newDataFile = {
            ...newData[key]
        }
        console.log(newDataFile)
        newDataFile.show = true;
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
                        <div className="uploaders">
                            <ImageUploader handleChange={(e) => this.handleChange(e)} files = {this.state.files} />
                        </div>
                        <div className="preview">
                            {this.state.files.map((item,i) =>(
                                <div className="preview-image" key={i}>
                                    <img className="image_preview"  src ={item.url} width="120px" height="100px" onClick={() => this.showFull(i)} ></img>
                                    {item.show ?
                                        
                                        <div className="image_preview-big-wrapper"><div className="image_preview-big-container"></div></div>
                                    : null}
                                    <button className="tweet-button-delete" onClick={() => this.deleteFile(item)}>x</button>
                                </div>
                                
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