import { ReactNode } from "react";

interface ButtonProps {
    children: ReactNode;
    onClick?: () => void;
    variant?: "primary" | "outline";
    className?: string;
    disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, variant = "primary", className = "", disabled }) => {
    const baseStyles = "px-4 py-2 rounded-lg transition-colors flex items-center justify-center";
    const variantStyles =
        variant === "primary"
            ? "bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-none"
            : "border border-purple-500 text-purple-400 hover:bg-purple-500/10";
    const disabledStyles = disabled ? "opacity-50 cursor-not-allowed" : "";

    return (
        <button
            onClick={onClick}
            className={`${baseStyles} ${variantStyles} ${disabledStyles} ${className}`}
            disabled={disabled}
        >
            {children}
        </button>
    );
};

export default Button;
