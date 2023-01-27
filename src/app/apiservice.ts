import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService{
    apiUrl: string;
    
    constructor(apiUrl: string){
        this.apiUrl = apiUrl;
    }

    post(url: string, objeto: object){
        const requestURL = `${this.apiUrl}${url}`
        return httpClient.post(requestURL, objeto);
    }

    put(url: string, objeto: string){
        const requestURL = `${this.apiUrl}${url}`
        return httpClient.put(requestURL, objeto);
    }

    delete(url: string){
        const requestURL = `${this.apiUrl}${url}`
        return httpClient.delete(requestURL);
    }

    get(url: string){
        const requestURL = `${this.apiUrl}${url}`
        return httpClient.get(requestURL);
    }

}

export default ApiService