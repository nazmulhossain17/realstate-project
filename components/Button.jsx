import { IconType } from "react-icons";

const Button = ({
  label,
  onClick,
  disabled = false,
  outline = false,
  small = false,
  icon: Icon = null, // Provide a default value for icon as null
}) => {
  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={`
        relative
        w-full
        rounded-lg
        transition
        hover:opacity-80
        disabled:opacity-70
        disabled:cursor-not-allowed
        ${
          outline
            ? "bg-white border-black text-black"
            : "bg-rose-500 border-rose-500 text-white"
        }
        ${
          small
            ? "text-sm py-1 font-light border-[1px]"
            : "text-md py-3 font-semibold border-2"
        }
      `}
    >
      {Icon && (
        <Icon
          size={24}
          className="absolute transform -translate-y-1/2 left-4 top-1/2"
        />
      )}
      {label}
    </button>
  );
};

export default Button;
