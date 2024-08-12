import { CarListProps } from "@/types"
import { CarCard, Loading } from ".."

const CarList = ({ cars,loading }: CarListProps) => {
  return (
    <div className="grid grid-col-2 md:grid-cols-3 lg:grid-cols-4 padding-x padding-y mt-10 gap-3">
     {loading ? (
        <Loading/>
      ) : (
        cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))
      )}
    </div>
  )
}

export default CarList
