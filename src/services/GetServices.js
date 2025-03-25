import axios from "axios";

const api = axios.create({
  baseURL: 'https://api.unsplash.com/',
})

export const getPhotos = () => {
  return api.get('photos/random?count=15', {
    headers: {
      Authorization: `Client-ID ${process.env.REACT_APP_UNSPLASH_ACCESS_KEY}`,
    },
  })
}