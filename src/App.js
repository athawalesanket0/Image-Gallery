import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';
import NavigationBar from './components/navigationBar';
import ImageThumbnail from './components/imageThumbnail';
import ImagePopUp from './components/imagePopUp';
import { getPhotos } from './services/GetServices';

const App = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark-mode');
      document.documentElement.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
      document.documentElement.classList.remove('dark-mode');
    }
  }, [darkMode]);

  const fetchImages = async () => {
    try {
      const res = await getPhotos();
      console.log("res: ", res);
      setImages(res.data);
    } catch (error) {
      console.error("Error message: ", error.message);
      console.error("Error status: ", error.response.status);
      console.error("Error data: ", error.response.data);
    }
  }

  useEffect(() => {
    fetchImages();
  }, []);

  const handleSearch = (searchQuery) => {
    axios
      .get(`https://api.unsplash.com/search/photos?per_page=15&query=${searchQuery}&client_id=${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`)
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
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <NavigationBar onSearch={handleSearch} darkMode={darkMode} setDarkMode={setDarkMode} />
      <div className="background-img">
        <h1>Download High Quality Images by Creators</h1>
      </div>
      <div className="image-gallery">
        {images.map((image) => (
          <div className="image-container" key={image.id}>
            <ImageThumbnail
              image={image}
              onClick={() => openImagePopUp(image)}
            />
          </div>
        ))}
      </div>
      <ImagePopUp image={selectedImage} onClose={closeImagePopUp} />
    </div>
  );
};

export default App;
