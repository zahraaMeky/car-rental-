import Image from "next/image"
import CustomButton from "../Shared/CustomButton"

const Hero = () => {
  return (
    <div className="hero">
      <div className="">
        <h1> Find, book, rent a car—quick and super easy!</h1>
        <p> 
            Streamline your car rental experience with our effortless booking process.
        </p>
        <CustomButton title="Explore Cars"
        containerStyle="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div>
        <div>
            <Image src=/>
        </div>
      </div>
    </div>
  )
}

export default Hero
