import axios from "axios"

//https://free.currconv.com/api/v7/convert?q=USD_BRL&compact=ultra&apiKey=b6f21d6b8616c496188f

//GOVERNO: https://xx9p7hp1p7.execute-api.us-east-1.amazonaws.com/prod/

// API: https://covid19-brazil-api.now.sh/api/report/v1/



const api_covid = axios.create({
    baseURL: "https://covid19-brazil-api.now.sh/api/report/v1/"
})

export default api_covid

