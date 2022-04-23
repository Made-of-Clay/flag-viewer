import axios from 'axios';

export const SERVICE_KEY = Symbol('CountryService');
export interface CountryService {
    getAllCountries: () => Promise<any>;
}

const instance = axios.create({
    baseURL: 'https://restcountries.com/v2/',
});

function getAllCountries() {
    return instance.get('all').then(({data}) => data);
}

export default { getAllCountries };