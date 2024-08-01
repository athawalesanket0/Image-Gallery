import React from 'react';

const ImagePopUp = ({ image, onClose }) => {
    if (!image) return null;

    const { user } = image;

    return (
        <div className="image-popup" onClick={onClose}>
            <div className="popup-content">
                <div className="popup-header">
                </div>
                <div className="popup-body">
                    <img src={image.urls.regular} alt={image.description} className="popup-image" />
                    <div className="image-details">
                        <p>
                            Photographer:{" "}
                            <a href={user.links.html} target="_blank" rel="noopener noreferrer">
                                {user.name}
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImagePopUp;
