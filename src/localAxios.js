import axios from 'axios';

// crear una instancia personalizada de axios
const localAxios = axios.create({
  baseURL: 'http://localhost:8000',
  // habilitar el uso de cookies
  withCredentials: true,  
});

export default localAxios;