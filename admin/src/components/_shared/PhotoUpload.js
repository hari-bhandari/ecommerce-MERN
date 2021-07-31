import React from 'react';
import ImageUploader from "react-images-upload";

const PhotoUpload = ({withIcon,withPreview,singleImage,label,buttonText,setImages,defaultImages}) => {
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
                       imgExtension={['.jpg', '.gif', '.png', '.gif','.svg','.jpeg']}

        />

    );
};

export default PhotoUpload;
