import React from 'react';

const ImageThumbnail = ({ image, onClick }) => {
    return (
        <div className="image-thumbnail" onClick={() => onClick(image)}>
            <img src={image.urls.regular} alt={image.description} />
            <div className="image-info">
                <p>{image.user.name}</p>
                <p>❤ {image.likes}</p>
            </div>
        </div>
    );
};

export default ImageThumbnail;
