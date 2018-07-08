import React from 'react';
import '../uploaders.scss';
import Icons from '../../Icons';


 const AudioUploader = (props) => {

    return (
        <div className="file-uploader">
        <label htmlFor="audio-input">
            <Icons 
                icon='addAudio' 
                size="30px" 
                color="#66c4ff" 
                style={{margin: '0 5px 0 0'}}
            />
        </label>
         <input id="audio-input" type="file" onChange={(event) => props.handleChangeAudio(event)} multiple accept="audio/*"/>
      </div>
    );

}
export default AudioUploader;