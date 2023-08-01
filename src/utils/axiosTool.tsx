import axios from 'axios';

const baseUrl = "http://localhost:5000/api/"

const axiosTool = {

    get: async (urlSuffix: string) => {
        var resp = await axios.get(baseUrl + urlSuffix);
        console.log(resp);
        return resp;
    },

    post: async (urlSuffix: string, data: any) => {
        var resp = await axios.post(baseUrl + urlSuffix, data);
        return resp;
    }
}

export default axiosTool;