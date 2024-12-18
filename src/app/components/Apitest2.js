// "use client";
// import Image from 'next/image';

// import React, { useEffect, useState } from "react";

// const Apitest2 = () => {
//   const [test, setTest] = useState([]); // Use null for initial state

//   const FetchApi = () => {
//     fetch("https://fakestoreapi.com/products/2", {
//       method: "GET",
//       headers: { "Content-Type": "application/json" },
//     })
//       .then((response) => {
//         console.log("Response received:", response);
//         if (response.ok) {
//           return response.json();
//         } else {
//           throw new Error(`HTTP error! Status: ${response.status}`);
//         }
//       })
//       .then((data) => {
//         console.log("Fetched Data:", data);
//         setTest(data); // Update state with fetched data
//       })
//       .catch((error) => {
//         console.error("Error fetching data:", error);
//       });
//   };

//   useEffect(() => {
//     FetchApi(); // Fetch data on mount
//   }, []); // Empty dependency array to prevent infinite loop

//   return (
//     <div className=' container mx-auto'>
//     <div className="flex gap-6 mt-12">
//       <div className="w-[400px] border-2">
//    <p>Title:{test.title}</p>
//   <p>Price:{test.price}</p>
//   <p>Description:{test.description}</p>
// </div>

//       <div className="w-[400px] border-2">
//       <p>Title:{test.title}</p>
//       <p>Price:{test.price}</p>
  
//   <p>Description:{test.description}</p>
        
//       </div>
//       <div className="w-[400px] border-2">
//       <p>Title:{test.title}</p>
//   <p>Price:{test.price}</p>
  
//   <p>Description:{test.description}</p>
//       </div>
//     </div>
// </div>
//   );
// };

// export default Apitest2;
"use client";
import React, { useEffect, useState } from "react";

const Apitest2 = () => {
  const [test, setTest] = useState({}); // Initialize the state as an empty object, since you are fetching a single product

  // Fetching data function
  const FetchApi = () => {
    fetch('https://fakestoreapi.com/products/1')
      .then(res => res.json())
      .then(json => {
        console.log(json); 
        setTest(json); // Set the fetched product data to state
      })
      .catch(error => console.error("Error fetching data:", error)); // Handle potential fetch errors
  };

  // useEffect hook to fetch data when the component mounts
  useEffect(() => {
    FetchApi(); // Fetch data when the component mounts
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      <div className="w-[400px] border-2">
        <p>Title: {test.title}</p>
        <p>Price: {test.price}</p>
        <p>Description: {test.description}</p>
      </div>
    </div>
  );  
};

export default Apitest2;
s