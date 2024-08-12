import { CarListProps } from "@/types"
import { CarCard } from ".."

const CarList = ({ cars }: CarListProps) => {
  return (
    <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 padding-x padding-y mt-10 gap-3">
       {cars.map(car => (
        <CarCard car={car}/>
       ))}
    </div>
  )
}

export default CarList
