'use client'
import { getCarList } from "@/api";
import { CarFilterOption, CarList, Footer, Hero, Navbar, SearchInput } from "@/components";
import { useState, useEffect } from "react";

export default function Home() {
  const [cars, setCars] = useState<any>([]);
  const [orgCarsList, setOrgCarsList] = useState<any>([]);
  const [isLoading,setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllCar();
  }, []);

  const getAllCar = async () => {
    try {
      const result: any = await getCarList();
      setCars(result?.carLists);
      setOrgCarsList(result?.carLists);
    } catch (error) {
      console.error('Error fetching car data:', error);
    } finally {
      setIsLoading(false); // Set loading to false after data is fetched
    }
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
      <CarList cars={cars} loading={isLoading} />
      <Footer />
    </main>
  );
}
