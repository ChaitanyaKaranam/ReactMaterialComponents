import axios from 'axios';

export const GET_DATA = 'get_data';

export function getData(activePage){
    const request = axios.get(`https://api.github.com/search/repositories?q=react&page=${activePage}`);    
    return{
        type:GET_DATA,
        payload:request
    }
}