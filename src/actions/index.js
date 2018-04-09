import types from './types.js'
import axios from 'axios';

const BASE_URL = 'http://api.reactprototypes.com'
const API_KEY = '?key=testuser4321'

export function getList(){
    const response = axios.get(`${BASE_URL}/todos/${API_KEY}`)

    return {
        type: types.GET_LIST_DATA,
        payload: response
    }
}

export function addNewItem(item){
    const response = axios.post(`${BASE_URL}/todos/${API_KEY}`, item);

    return {
        type: types.ADD_ITEM,
        payload: response
    }
}

export function getSingleItem(id){
    const response = axios.get(`${BASE_URL}/todos/${id+API_KEY}`);

    return{
        type: types.GET_SINGLE_ITEM,
        payload: response
    }
}

//delete: --> axios.delete;

//toggleComplete: axios.put