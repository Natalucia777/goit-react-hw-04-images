import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';
const API_KEY = '36094261-707a3f1df60011e058a78caa9';
//const quantityPage = 12;

export const getComponentImages = async (query, currentPage) => {
  const response = await axios.get(
   `?q=${query}&page=${currentPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
  );
  return response.data;
};