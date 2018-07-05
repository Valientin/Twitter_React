import React from 'react';
import '../uploaders.scss';
import Icons from '../../Icons';


 const ImageUploader = (props) => {

    return (
        <div className="image-upload">
        <label htmlFor="image-input">
            <Icons 
                icon='addImage' 
                size="30px" 
                color="#66c4ff" 
                style={{margin: '0 5px 0 0'}}
            />
        </label>
         <input id="image-input" type="file" onChange={(event) => props.handleChange(event)} multiple/>
      </div>
    );

}
export default ImageUploader