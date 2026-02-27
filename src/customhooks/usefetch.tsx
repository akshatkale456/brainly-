import { useState, useEffect } from 'react';
// @ts-ignore
export function useFetch(url) {
    const [data, setData] = useState();

    useEffect(() => {
        async function getPost() {
            let response = await fetch(url);
            const json = await response.json();
            setData(json);
        }
        getPost();
    }, []);

    return {dash:data};
}
