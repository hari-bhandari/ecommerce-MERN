import React from 'react';
import ImageUploader from '@geraudwilling/react-images-upload';

const PhotoUpload = ({withIcon,withPreview,label,buttonText,setImages,defaultImages}) => {
    const onDrop = async (pictures,files) => {
        console.log(files)
        setImages(pictures)
    }
    return (
        <ImageUploader withIcon={withIcon}
                       withPreview={withPreview}
                       onChange={onDrop}
                       label={label}
                       buttonText={buttonText}
                       defaultImages={defaultImages}
                       imgExtension={['.jpg', '.gif', '.png', '.gif','.svg','.jpeg']}
                       maxFiles={1}

        />

    );
};

export default PhotoUpload;
