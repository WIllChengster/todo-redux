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