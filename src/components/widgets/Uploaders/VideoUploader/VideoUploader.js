import React from 'react';
import '../uploaders.scss';
import Icons from '../../Icons';


 const VideoUploader = (props) => {

    return (
        <div className="file-uploader">
        <label htmlFor="video-input">
            <Icons 
                icon='addVideo' 
                size="30px" 
                color="#66c4ff" 
                style={{margin: '0 5px 0 0'}}
            />
        </label>
         <input id="video-input" type="file" onChange={(event) => props.handleChangeVideo(event)} multiple accept="video/*"/>
      </div>
    );

}
export default VideoUploader;