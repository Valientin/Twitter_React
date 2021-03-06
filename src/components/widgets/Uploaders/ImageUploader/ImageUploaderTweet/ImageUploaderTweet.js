import React from 'react';
import '../../uploaders.scss';
import Icons from '../../../Icons';


 const ImageUploaderTweet = (props) => {

    return (
        <div className="file-uploader">
        <label htmlFor="image-input">
            <Icons 
                icon='addImage' 
                size="30px" 
                color="#66c4ff" 
                style={{margin: '0 5px 0 0'}}
            />
        </label>
         <input id="image-input" type="file" onChange={(event) => props.handleChangeImage(event)} multiple accept="image/*"/>
      </div>
    );

}
export default ImageUploaderTweet;