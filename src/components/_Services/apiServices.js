import axios from "axios";

export const BASE_URL = 'https://localhost:7058';

export const ENDPOINTS = {
    weatherforecast: 'WeatherForecast',
    category: 'category',
    // subCategory: 'subCategory',
    // subCategoryType: 'subCategoryType',
    keyword: 'keyword',
}

export const createApiEndpoint = (endpoint, payload) => {
    let url = `${BASE_URL}/api/${endpoint}`;

    return {
        fetch: () => axios.get(url),
        post: () => axios.post(url, payload),

    }
}