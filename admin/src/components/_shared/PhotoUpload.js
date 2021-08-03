import React, {useEffect, useState} from 'react';
import ImageUploader from '../_shared/PhotoUploadComponent';

const PhotoUpload = ({withIcon,withPreview,label,buttonText,setImages,defaultImages}) => {
    const onDrop =  (files,pictures) => {
        setImages(pictures)
        console.log({files})
        console.log({pictures})
    }
    return (
        <ImageUploader style={{ maxWidth: '500px', margin: "20px auto" }}
                       withPreview={true} defaultImages={defaultImages} onChange={onDrop}
        />

    );
};

export default PhotoUpload;
