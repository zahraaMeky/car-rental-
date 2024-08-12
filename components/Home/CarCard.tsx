'use client'
import { useState } from "react";
import Image from "next/image";
import { FaGasPump } from 'react-icons/fa';
import AirlineSeatReclineNormalIcon from '@mui/icons-material/AirlineSeatReclineNormal'; 
import CustomButton from "../Shared/CustomButton";
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';

export const CarCard = ({ car }) => {
    const [cars, setCars] = useState<any>(car);

    return (
        <div className="car-card p-4 bg-gray-50 hover:bg-white hover:shadow-md rounded-3xl flex flex-col justify-between h-full">
            <div>
                <h2 className="text-[20px] font-medium mb-2">{car.name}</h2>
                <h2 className="text-[28px] font-bold mb-2">
                    <span className="text-[12px] font-light text-gray-500">$</span>
                    <span>{car.pirce}</span>
                    <span className="text-[12px] font-light text-gray-500">/day</span>
                </h2>
                <Image src={car?.image?.url} alt="" width={220} height={200} className="object-contain w-[250px] h-[150px] mb-3"/>
                <div className="flex justify-between items-center mb-4">
                    <div className="text-center text-gray-500">
                        <AirlineSeatReclineNormalIcon className="w-full text-[22px] mb-2" />
                        <h2 className="text-[14px] font-light">{car.seats} Seat</h2>
                    </div>
                    <div className="text-center text-gray-500">
                        <FaGasPump className="w-full text-[22px] mb-2" />
                        <h2 className="text-[14px] font-light">{car.carAvg} MPG</h2>
                    </div>
                </div>
            </div>
            {/* Button that appears on hover */}
            <div className="flex justify-center mt-auto">
                <button className="hidden group-hover:flex bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-lg p-2 px-5 justify-between items-center w-full">
                    <span className="bg-blue-400 p-1 rounded-md">Rent Now</span>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 ml-2 text-white bg-blue-400 p-1 rounded-md">
                        <path d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z" fill="currentColor"/>
                    </svg>
                </button>
            </div>
        </div>
    );
};
