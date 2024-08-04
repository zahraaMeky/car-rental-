import { CustomButtonProps } from "@/types"

const CustomButton = ({title,containerStyles}:CustomButtonProps) => {
  return (
    <button
      type="button"
      className={`custom-btn ${containerStyles}`}
      >
        <span className="flex-1">{title}</span>
    </button>
  )
}

export default CustomButton
