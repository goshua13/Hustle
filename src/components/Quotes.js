import React,{useEffect, useState} from 'react';
import axios from 'axios';

const Quotes = () => {
    const [quote, setquote] = useState({})
    useEffect(() => {
        axios.get('https://favqs.com/api/qotd').then(data => data).then(res => setquote(res.data.quote));
    }, [])
    return (
        <div  id='quotes' className=''>
            <p className='text-light'>"{quote.body}"</p>
        </div>
    )
}

export default Quotes
