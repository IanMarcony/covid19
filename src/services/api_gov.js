import axios from 'axios'

const api_gov = axios.create({
    baseURL: "https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/"
})

export default api_gov