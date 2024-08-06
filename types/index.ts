export interface CustomButtonProps {  
    title: string;  
    containerStyles?: string;  
}  
export interface SearchManufacturerProps {  
    manufacturer: string;  
    // function
    setManufacturer: (manufacturer: string)=>void;  
}  