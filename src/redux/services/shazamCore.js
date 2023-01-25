import axios from 'axios';
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
const options = {
  method: 'GET',
  url: 'https://shazam.p.rapidapi.com/charts/track',
  headers: {
    'X-RapidAPI-Key': 'ffed954526msh5221edb4cf77d9dp136de7jsn6ecfaa3d3d5d',
    'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
  },
};

axios
  .request(options)
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.error(error);
  });

export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
});
