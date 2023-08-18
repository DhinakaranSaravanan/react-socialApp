import React, { useState } from 'react'
import axios from 'axios'

const useAxiosFetch = (dataURL) => {
    const [data, setData] = useState([])
    const [fetchError, setFetchError] = useState(null)
    const [isLoading, setIsLoading] = useState(false)

    useState(()=> {

        let isMounted = true;
        const source = axios.CancelToken.source();
        const fetchData = async (url)=>{
            

            try{
                setIsLoading(true)
                const response = await axios.get(url,{cancelToken: source.token});
            if(isMounted){
                setData(response.data);
                setFetchError(null);
            }
            } catch(err){
                if(isMounted){
                    //not in the 200 response range 
                    // console.log(err.response.data);
                    // console.log(err.response.status);
                    // console.log(err.response.headers);          
                //   } else {
                //     console.log(`Error: ${err.message}`);
                setFetchError(err.message);
                setData([]);
                  }
            } finally{
                isMounted && setIsLoading(false)               
            } 
        }
        fetchData(dataURL)

        const cleanUp = ()=>{
            isMounted = false;
            source.cancel();
        }
        return cleanUp;

    },[dataURL])    
    

    return {data, fetchError, isLoading}
  
}

export default useAxiosFetch