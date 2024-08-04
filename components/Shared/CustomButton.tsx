import { CustomButtonProps } from "@/types"

const CustomButton = ({title,containerStyle}:CustomButtonProps) => {
  return (
    <button
      type="button"
      className={`custom-btn ${containerStyle}`}
      >
        <span className="flex-1">{title}</span>
    </button>
  )
}

export default CustomButton
