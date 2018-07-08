import React from 'react';
import '../../uploaders.scss';


const ImageUploaderProfile = (props) => {

    const showUploaderInput = () => (
        props.showUploader ?
            <div className="image-profile__block">
                <div className="image-profile__wrapper">
                    <div><span>Загрузить фотографию</span></div>
                    <input className="image-profile__input" type="file" onChange={(e) => props.handleChangeUploader(e)}/>
                </div>
                <button onClick={() => props.hideUploaderBlock()}>Отмена</button>
            </div>
        : null
    )
    return (
        <div className={props.showUploader ? 'image-profile active': 'image-profile'}
            style={{background: props.imageProfile ? `url(${props.imageProfile})`: null}}
        >
            <h2 className="image-profile__title">Изменить фотографию профиля</h2>
            {showUploaderInput()}
        </div>
    );


}
export default ImageUploaderProfile;