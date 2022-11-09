import React, { useEffect } from 'react';

const useTitel = title => {
    useEffect(()=>{
        document.title = `${title} - Event With Saif`
    })
};

export default useTitel;