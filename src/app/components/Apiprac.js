'use client';
import React, { useState } from 'react';

const Apiprac = () => {
    const [data, setData] = useState([]); // Initialize as an empty array

    // Function to fetch data
    const fetchData = () => {
        console.log('Button clicked! Starting fetch...');
        fetch('https://fakestoreapi.com/products/1',{
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
                setData(data); // Update with fetched data
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    };

    return (
        <div className="items-center bg-black text-white w-[500px]">
            <h1>This is a Heading Tag</h1>

            {/* Render all products */}
            {data.length > 0 ? (
                data.map((product) => (
                    <div key={product.id} className="mb-4">
                        <h2>Product ID: {product.id}</h2>
                        <img src={product.image} alt={product.title} className="w-40 h-40" />
                        <h3>Category: {product.category}</h3>
                        <p>{product.description}</p>
                        <p>Price: ${product.price}</p>
                    </div>
                ))
            ) : (
                <p>No data loaded. Click the button below to fetch data.</p>
            )}

            {/* Button to fetch data */}
            <button onClick={fetchData} className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">
                Fetch Data
            </button>
        </div>
    );
};

export default Apiprac;
