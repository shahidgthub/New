'use client'
import React,{useState} from 'react';


const Apiprac = () => {
    const[data,setData]= useState([])
    // Function to fetch data
    const fetchData = () => {
        console.log('Button clicked! Starting fetch...');
        fetch('https://fakestoreapi.com/products/1', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        })
            .then(response => {
                console.log('Response received:', response);
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
            })
            .then(data => {
                console.log('Fetched Data:', data);
                setData(data)
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };
    
    return (
        <div className='items-center'>
            <h1>This is Headin Tag</h1>
            
            {
    data.map((pro) => (
        <div key={pro.id}>
            <div className='bg-green-500 text-white w-[400px]'>
            <h1> {pro.id}</h1>
            </div>
            
            {/* Correct way to render an image */}
            <div className='w-[400px] border-2'>
            <img src={pro.image} alt={pro.category} className="w-40 h-40" />
            </div>
            <div className='bg-black text-white w-[400px]'>
            <h1 className=''>{pro.category}</h1></div>
        </div>
    ))
}

            {/* Attach fetchData directly to the onClick handler */}
            <button onClick={fetchData}>Fetch Data</button>
        </div>


    );
};

