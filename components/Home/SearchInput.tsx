'use client'
import { useState } from "react";

const SearchInput = () => {
  return (
    <div className="flex flex-col items-center mt-5">
      <h2 className="text-center text-[20px] text-black mb-3">Let's find what you need.</h2>
      <div className="bg-gray-100 rounded-full p-2 flex justify-between divide-x">
        <div className="flex items-center">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-black">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
          </svg>
          <input
            type="text"
            placeholder="Location"
            className="outline-none p-1 px-5 gap-2 bg-transparent text-black flex-grow placeholder-black"
          />
        </div>
        <div>
          <input
            type="date"
            className="outline-none p-2 bg-transparent text-black"
          />
        </div>
      </div>
    </div>
  )
}

export default SearchInput
