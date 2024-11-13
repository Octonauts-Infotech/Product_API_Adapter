// src/productAPI/controllers/apiController.js
import apiService from '../services/apiService.js';

const apiController = {
  // Controller action to fetch and save data
  async fetchAndSaveData(req, res) {
    try {
      // Fetch the data from the external API
      const data = await apiService.fetchData();
      console.log('Fetched Data:', data);

      // Save the data to the database
      await apiService.saveToDatabase(data.data);  // Assuming the data is inside 'data.data'

      res.status(200).json({ message: 'Data fetched and saved successfully' });
    } catch (error) {
      console.error('Error in fetchAndSaveData controller:', error);
      res.status(500).json({ message: 'Error fetching and saving data', error: error.message });
    }
  },
};

export default apiController;
