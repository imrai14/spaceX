import axios from 'axios';

const BASE_URL = 'https://api.spacexdata.com/v3/launches'

const getSpaceXLauch = function(filterOption) {
    axios.get(`${BASE_URL}?${filterOption}`).then(response => {
        return response;
      })
}

export default getSpaceXLauch;