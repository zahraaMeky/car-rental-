export interface CustomButtonProps {  
    title: string;  
    containerStyles?: string;  
}  
// types.ts or similar file
export interface CarImage {
    fileName: string;
  }
  
  export interface Car {
    id: string;
    name: string;
    price: number;
    carBrand: string;
    carAvg: number;
    image: CarImage;
  }
  
  export interface CarListProps {
    cars: Car[];
  }
   

  export interface CarCardProps {
    car: Car;
  }


  