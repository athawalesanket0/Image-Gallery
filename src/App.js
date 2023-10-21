import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import ImageSearch from './components/imageSearch';
import ImageThumbnail from './components/imageThumbnail';
import ImagePopUp from './components/imagePopUp';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get('https://api.unsplash.com/photos', {
        headers: {
          Authorization: `Client-ID u8kE08x56p_AhZYVcQLEIAYDhJIv4UH76IGi3Oq37mo`,
        },
      })
      .then((response) => setImages(response.data))
      .catch((error) => console.error(error));
  }, []);

  const handleSearch = (searchQuery) => {
    axios
      .get(`https://api.unsplash.com/search/photos?query=${searchQuery}&client_id=u8kE08x56p_AhZYVcQLEIAYDhJIv4UH76IGi3Oq37mo`)
      .then((response) => setImages(response.data.results))
      .catch((error) => console.error(error));
  };

  const openImagePopUp = (image) => {
    setSelectedImage(image);
  };

  const closeImagePopUp = () => {
    setSelectedImage(null);
  };

  return (
    <div className="app">
      <div className="background-img">
        <h1>Image Gallery</h1>
        <div>
          <ImageSearch onSearch={handleSearch} />
        </div>
      </div>
      <div className="image-gallery">
        {images.map((image) => (
          <ImageThumbnail key={image.id} image={image} onClick={() => openImagePopUp(image)} />
        ))}
      </div>
      <ImagePopUp image={selectedImage} onClose={closeImagePopUp} />
    </div>
  );
};

export default App;
