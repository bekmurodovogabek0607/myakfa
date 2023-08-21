import axios from "axios";

export const instance = axios.create({
    //baseURL: 'https://some-domain.com/',
    timeout: 30000,
    headers: {'x-access-token': localStorage.getItem('my-akfa-x-access-token')}
  });