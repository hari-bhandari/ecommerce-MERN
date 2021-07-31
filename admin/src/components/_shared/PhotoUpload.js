import React from 'react';
import ImageUploader from "react-images-upload";
import axios from "axios";
import {ShowError, ShowSuccess} from "../../util/alert";

const PhotoUpload = ({withIcon,withPreview,singleImage,label,buttonText,setImages,images,defaultImages}) => {
    const onDrop = async (pictures) => {
        setImages(pictures)

    }
    return (
        <ImageUploader withIcon={withIcon}
                       withPreview={withPreview}
                       onChange={onDrop}
                       singleImage={singleImage}
                       label={label}
                       buttonText={buttonText}
                       defaultImages={defaultImages}
                       imgExtension={['.jpg', '.gif', '.png', '.gif','.svg','.jpeg']}

        />

    );
};

export default PhotoUpload;
