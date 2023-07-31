import axios from 'axios';

const axiosTool = {
    get: async (url: string) => {
        var resp = await axios.get(url);
        return resp;
    }
}

export default axiosTool;