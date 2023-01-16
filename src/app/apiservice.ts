import axios from 'axios'

const httpClient = axios.create({
    baseURL: 'http://localhost:8080'
})

class ApiService{
    apiUrl: string;
    
    constructor(apiUrl: string){
        this.apiUrl = apiUrl;
    }

    post(url: string, objeto: string){
        return httpClient.post(url, objeto);
    }

    put(url: string, objeto: string){
        return httpClient.put(url, objeto);
    }

    delete(url: string){
        return httpClient.delete(url);
    }

    get(url: string){
        return httpClient.get(url);
    }

}

export default ApiService