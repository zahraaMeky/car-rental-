import { useState, useEffect } from "react";

interface Car {
  carBrand: string;
}

interface CarFilterOptionProps {
  carsList: Car[];
}

const CarFilterOption = ({ carsList,setBrand }:CarFilterOptionProps) => {
  const [brandList, setBrandList] = useState<string[]>([]);

  useEffect(() => {
    if (carsList) {
      filterCarList();
    }
  }, [carsList]);

  const filterCarList = () => {
    const BrandSet = new Set<string>();
    carsList.forEach((element) => {
      BrandSet.add(element.carBrand);
    });
    console.log('BrandSet',BrandSet)
    setBrandList(Array.from(BrandSet));
  };

  return (
    <div className="mt-10 flex items-center justify-between padding-x">
      <div>
        <h2 className="font-bold text-[30px]">Cars Catalog</h2>
        <h2 className="text-gray-500">Explore our car; you may love it</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
          <option disabled selected>
            Price
          </option>
          <option>Min to Max</option>
          <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs hidden md:block"
        onChange={(e)=>setBrand(e.target.value)}
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList&&brandList.map((brand) => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarFilterOption;
