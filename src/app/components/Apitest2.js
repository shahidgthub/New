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
// "use client";
// import React,{ useEffect, useState } from "react";
// import { GoArrowSwitch } from "react-icons/go";


// const Apitest2 = () => {
//   const [test, setTest] = useState({});//Initialize the state as an empty object, since you are fetching a single product

//   // Fetching data function
//   const FetchApi = () => {
//     fetch('https://fakestoreapi.com/products/4')
//       .then(res => res.json())
//       .then(json =>{
//         console.log(json); 
//         setTest(json); // Set the fetched product data to state
//       })
//       .catch(error => console.error("Error fetching data:", error)); // Handle potential fetch errors
//   };

//   // useEffect hook to fetch data when the component mounts
//   useEffect(() => {
//     FetchApi(); // Fetch data when the component mounts
//   }, []); // Empty dependency array ensures this runs only once

//   return (
//     <>
//     <div> 
//       <div className="w-[400px] border-2">
//   <p className="">Title: {test.title}</p>
//   <img src={test.image} alt={test.title} className="w-[300px] h-[300px] object-cover"/>
//   <p className="">Price:{test.price}</p>
//   <p>Description:{test.description}</p>
// </div>

// </div>
// <div className="w-[400px] border">
//   <h1 className="font-bold text-[24px] mx-6">Currency Converter</h1>
//   <input type ='text' className="bg-gray-100 w-[300px]  py-2 rounded-xl mx-6"/>
//   <div className=" flex justify-between pt-6 px-6">
//     {/* 1 */}
//     <div>
//       <p className="mx-6">Form</p>
      
//         <div className=" flex bg-gray-200 w-[120px]  gap-2 py-2 rounded-xl mx-6">
//         <img
//         src="https://flagsapi.com/AU/flat/64.png"
//         alt="Flag of Australia"
//         className=" w-[24px] h-auto rounded shadow-lg"
//       />
//           <select className=" rounded-xl">
//             <option>
//               Aus
//             </option>
//             <option>
//               Euro
//             </option>

//           </select>
//         </div>
//         </div>
//         <GoArrowSwitch className="mt-8" />

//         {/* 2 */}
//         <div>

          
//       <p className="px-6">To</p>
      
//         <div className=" flex bg-gray-200 w-[120px]  gap-2 py-2 rounded-xl mx-6">
//         <img
//         src="https://flagsapi.com/AU/flat/64.png"
//         alt="Flag of Australia"
//         className=" w-[24px] h-auto rounded shadow-lg"
//       />
//           <select className="rounded-xl">
//             <option>
//               USD
//             </option>
//             <option>
//               Euro
//             </option>
            

//           </select>
//         </div>
        
//       </div>
      

//   </div>
//   <div className="flex items-center justify-center pt-6 ">
//   <button className="mt-6 px-3 py-2 mx-6  rounded-xl bg-green-300 hover:bg-gray-200">GetExChangeRates</button></div>
// </div>


"use client";
import React, { useState } from "react";
import { GoArrowSwitch } from "react-icons/go";
const CurrencyConverter = () => {
  const [fromCurrency, setFromCurrency] = useState("AUD");
  const [toCurrency, setToCurrency] = useState("USD");
  const [amount, setAmount] = useState("");
  const [exchangeRate, setExchangeRate] = useState(null);
  const [error, setError] = useState(null);
 const countryFlags = {
    AUD:"AU",
    USD:"US",
    EUR:"EU",
  };
const handleExchangeRate = async () => {
    console.log("Fetching exchange rate...");
    if (!amount || isNaN(parseFloat(amount))) {
      setError("Please enter a valid amount");
      return;
    }
    try {
      setError(null);
      const response = await fetch(
        `https://api.exchangerate.host/convert?from=${fromCurrency}&to=${toCurrency}`
      );
      const data = await response.json();
      console.log("API Response:",data);

      if (!data || !data.result) {
        setError("Invalid API response");
        return;
      }

      setExchangeRate(data.result);
    } catch (err) {
      console.error("Fetch Error:", err);
      setError("Failed to fetch exchange rate. Try again later.");
    }
  };

  return (
    <div className="w-[400px] border p-6">
      <h1 className="font-bold text-[24px] mx-6">Currency Converter</h1>
      <input
        type="text"
        className="bg-gray-100 w-[300px] py-2 rounded-xl mx-6"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <div className="flex justify-between pt-6 px-6">
        {/* From Currency */}
        <div>
          <p className="mx-6">From</p>
          <div className="flex bg-gray-200 w-[120px] gap-2 py-2 rounded-xl mx-6">
            <img
              src={`https://flagsapi.com/${countryFlags[fromCurrency]}/flat/64.png`}
              alt={`Flag of ${fromCurrency}`}
              className="w-[24px] h-auto rounded shadow-lg"
              />
            <select
              className="rounded-xl"
              value={fromCurrency}
              onChange={(e) =>setFromCurrency(e.target.value)}
            >
              <option value="AUD">AUD</option>
              <option value="EUR">EUR</option>
              <option value="USD">USD</option>
            </select>
          </div>
        </div>

        {/* Switch Icon */}
        <div className="mt-8">
          <GoArrowSwitch className="text-gray-500 text-xl cursor-pointer" />
        </div>
{/* To Currency */}
        <div>
          <p className="px-6">To</p>
          <div className="flex bg-gray-200 w-[120px] gap-2 py-2 rounded-xl mx-6">
            <img
              src={`https://flagsapi.com/${countryFlags[toCurrency]}/flat/64.png`}
              alt={`Flag of ${toCurrency}`}
              className="w-[24px] h-auto rounded shadow-lg"
            />
            <select
              className="rounded-xl"
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
            >
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
            <option value="AUD">AUD</option>
            </select>
          </div>
        </div>
       </div>
     {/* Button */}
      <div className="flex items-center justify-center pt-6">
        <button
          className="mt-6 px-3 py-2 mx-6 rounded-xl bg-green-300 hover:bg-gray-200"
          onClick={handleExchangeRate}
        >
          Get Exchange Rates
        </button>
      </div>

    {/* Result */}
      <div className="text-center mt-4">
        {error && <p className="text-red-500">{error}</p>}
        {exchangeRate && !error && (
          <p className="text-green-500 font-semibold">
            {amount} {fromCurrency} = {(amount * exchangeRate).toFixed(2)}{" "}
            {toCurrency}
          </p>
        )}
      </div>
    </div>
  );
};

export default CurrencyConverter;
