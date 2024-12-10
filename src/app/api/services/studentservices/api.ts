// services/api.ts
import axios from "axios";
import urls from '../../../url';

import { Item ,FormData} from "../../interfaces/studentinterface"; // Import the interfaces

  export const fetchItems = async (): Promise<Item[]> => {
   
    try {
      const response = await fetch("https://dummyjson.com/users?limit=5");
     
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await response.json();
      return data.users;
    } catch (error) {
      throw new Error("An error occurred while fetching data: " + (error as Error).message);
    }
  };

  // API service to fetch data using axios
export const fetchItems_axios = async (): Promise<Item[]> => {
    try {
      const response = await axios.get(`${urls.getstudentdetailapi}`); 
          return response.data.users;
    } catch (error) {
      
      if (axios.isAxiosError(error)) {
        throw new Error("An error occurred while fetching data: " + error.message);
      } else {
        
        throw new Error("An unknown error occurred");
      }
    }
  };
  

export const postFormData = async (data: FormData) => {
    console.log(JSON.stringify(data));
    try {
      //const response = await axios.post("https://dummyjson.com/users", data);

      const response = await axios.post('https://api.example.com/data', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      return response.data;   
    } catch (error) {
       
      if (axios.isAxiosError(error)) {
         
        const errMsg =
          error.response?.data?.message || 
          error.message || 
          "An unknown error occurred"; 
        throw new Error(errMsg);
      } else {
       
        throw new Error(error instanceof Error ? error.message : "An unknown error occurred");
      }
    }
  };