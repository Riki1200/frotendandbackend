import { useState, useEffect } from 'react';


export const useFetchData = (url, id, validate) => {



    const [del, setDel] = useState({ msg: '' })




    useEffect(() => {

        const deletedData = async (url) => {

            const data = await fetch(url, {
                method: 'DELETE',
                headers: {
                    'Content-type': 'application/json'
                },


            });

            return await data.json();


        }

        if (validate) {
            deletedData(url + id)
                .then(r => {
                    setDel(r)
                })
                .catch(error => {
                    setDel(error)
                });
        }


    }, [id, url, validate]);

    return [del]

}