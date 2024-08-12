'use client'
import { getCarList } from "@/api";
import {CarFilterOption, CarList, Footer, Hero, Navbar,SearchInput } from "@/components";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  const [cars, setCars] = useState<any>([]);

  useEffect(() => {
    getAllCar()
  },[]);
const getAllCar =async()=>{
  const result:any =await getCarList();
  setCars(result?.carLists)
  console.log('result',result)
}
  return (
    <main className="overflow-hidden">
      <Navbar/>
      <Hero/>
      <SearchInput/>
      <CarFilterOption/>
      <CarList cars={cars}/>
      <Footer/>
    </main>
  );
}
