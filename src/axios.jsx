import axios from 'axios'
import { baseurl } from './constents/constents';

const instance = axios.create({
    baseURL:baseurl,
   
  });

  export default instance