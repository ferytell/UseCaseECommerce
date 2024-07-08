import axios from 'axios';

// Java Spring Boot API
export const getJavaTest = async () => {
  try {
    const response = await axios.get('/api/hello');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Java backend:', error);
    throw error;
  }
};

// Java Spring Boot API
export const getDataBarang = async () => {
  try {
    const response = await axios.get('/api/barang');
    return response.data;
  } catch (error) {
    console.error('Error fetching barang data:', error);
    throw error;
  }
};

// Express.js API
export const getExpressData = async () => {
  try {
    const response = await axios.get('/api/express/data-endpoint');
    return response.data;
  } catch (error) {
    console.error('Error fetching data from Express backend:', error);
    throw error;
  }
};
