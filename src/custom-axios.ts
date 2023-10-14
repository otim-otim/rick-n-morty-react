import axios from 'axios';

// const baseUrl = 'https://rickandmortyapi.com/api'


export default async function fetchData (url : string ){
    try {
       const {status, data} = await axios.get(`${url}`)
       if(status === 200)
            return data
   
        
    }catch(error){
        return error.message
    }


}