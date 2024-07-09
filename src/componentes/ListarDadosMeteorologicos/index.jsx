import axios from 'axios';


export async function minhaFuncao() {
    try {
        const response = await axios.get('http://localhost:8080/previsao/clima/cidade/')
        console.log(response.data);
        return response.data;
        
    } catch (error) {
        console.log(error)
    }
}
