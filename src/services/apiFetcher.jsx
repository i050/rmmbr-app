import axios from "axios";

export async function fetchDataFromDatabase(endpoint) {
    try {
      const response = await axios.get(endpoint);
      return response.data; // Assuming the data is in JSON format
    } catch (error) {
      throw new Error(`Error fetching data from ${endpoint}: ${error.message}`);
    }
  }
  
  export async function postDataToDatabase(endpoint, dataToSend) {
    try {
      const response = await axios.post(endpoint, dataToSend);
      return response.data; // Assuming the response contains data in JSON format
    } catch (error) {
      throw new Error(`Error posting data to ${endpoint}: ${error.message}`);
    }
  }
  