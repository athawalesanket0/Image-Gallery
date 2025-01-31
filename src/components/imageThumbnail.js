import React from 'react';

const ImageThumbnail = ({ image, onClick }) => {
    return (
        <div className="image-thumbnail" onClick={() => onClick(image)}>
            <div className="image">
                <img src={image.urls.regular} alt={image.description} />
            </div>
            <div className="image-info">
                <p>{image.user.name}</p>
                <p><span>❤</span> {image.likes}</p>
            </div>
        </div>
    );
};

export default ImageThumbnail;
