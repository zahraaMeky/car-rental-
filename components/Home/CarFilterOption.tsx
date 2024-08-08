const CarFilterOption = () => {
  return (
    <div className="mt-10 flex items-center justify-between padding-x">
      <div className="">
        <h2 className="font-bold text-[30px]">Cars Catalog</h2>
        <h2 className="text-gray-500">Explore our car; you may love it</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>Price</option>
            <option>Min to Max</option>
            <option>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs hidden md:block">
            <option disabled selected>Manufacturer </option>
            <option>Min to Max</option>
            <option>Max to Min</option>
        </select>
      </div>
    </div>
  )
}

export default CarFilterOption
