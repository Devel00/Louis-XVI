import axios from 'axios'

export const HTTP = axios.create({
    baseURL: "http://biglybigly.iran.liara.run/api/v1/",
    headers: {
        'Accept-Language': 'fa-ir',
        Accept: 'application/json'
    }
})
