// src/productAPI/services/apiService.js
import fetch from 'node-fetch';
import ApiModel from '../models/apiModel.js'; // Import the model

const apiService = {
  // Fetch data from the external API
  async fetchData() {
    try {
      const url = process.env.API_URL;  // Use the API URL from the environment variable
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Authorization': `Bearer ${process.env.API_KEY}`,  // Use the API key from the environment
        },
      });

      if (!response.ok) {
        throw new Error('Failed to fetch data from the API');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error fetching data from API:', error);
      throw new Error('Unable to fetch data');
    }
  },

  // Save the fetched data into MongoDB
  async saveToDatabase(data) {
    try {
      // Map the API data to the MongoDB model format
      const products = data.map(item => ({
        name: item.name,
        sku: item.sku,
        brand: item.brand,
        price: item.price,
        inStock: item.inStock,
      }));

      // Insert the data into MongoDB
      await ApiModel.insertMany(products);
      console.log('Data saved to MongoDB successfully');
    } catch (error) {
      console.error('Error saving data to MongoDB:', error);
      throw new Error('Unable to save data to MongoDB');
    }
  },
};

export default apiService;
