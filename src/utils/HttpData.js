import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/launches'

const getSpaceXLauch = function(filterOption) {
    return axios.get(`${BASE_URL}?${filterOption}`)
}

export default getSpaceXLauch;