import React, {useState, useEffect} from 'react'
import axios from 'axios'
import exp from 'constants';


export const useUrlLoader = (url: string, deps: any[] = []) => {
    const [data, setData] = useState<any>(null)
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true)
        axios.get(url).then(result => {
            setData(result.data)
            setLoading(false)
        })
    }, deps);

    return [data, loading]
}
