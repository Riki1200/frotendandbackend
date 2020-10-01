import {useState, useEffect} from 'react';


const useUsers = (url,defaultValue) => {
    const [data,setData] = useState(defaultValue);
    const [error,setError] = useState({});

    const api = async (url) => {
        let header = new Headers();
        header.set('Content-Type', 'application/json');
        header.set('Accept-Charset' , 'utf-8');
        let data = await fetch(url, {method: 'GET',headers: header})
        return data.json();
    }

    useEffect(() => {
    
        api().then(response => {
            setData(response);
            setError({msg: 'Peticion sucess',status: 200})
        }).catch((err) => {
            setError({msg: err, status : 400})
        })


        
    }, [url])

    return {data,error}
};

export default useUsers;