'use client'
import { getCarList } from "@/api";
import { CarFilterOption, CarList, Footer, Hero, Navbar, SearchInput } from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const [cars, setCars] = useState<any>([]);
  const [orgCarsList, setOrgCarsList] = useState<any>([]);

  useEffect(() => {
    getAllCar();
  }, []);

  const getAllCar = async () => {
    const result: any = await getCarList();
    setCars(result?.carLists);
    setOrgCarsList(result?.carLists);
    console.log('result', result);
  };

  const filterCarList = (brand: string) => {
    const filteredList = orgCarsList.filter((item: any) => item.carBrand === brand);
    setCars(filteredList);
  };

  return (
    <main className="overflow-hidden">
      <Navbar />
      <Hero />
      <SearchInput />
      <CarFilterOption 
        carsList={orgCarsList}
        setBrand={(brand: string) => filterCarList(brand)}
      />
      <CarList cars={cars} />
      <Footer />
    </main>
  );
}
