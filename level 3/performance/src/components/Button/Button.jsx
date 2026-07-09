import { memo } from "react";
import "./Button.css";

const Button = memo(function Button({
    children = "Button",
    variant = "primary",
    size = "medium",
    disabled = false,
    loading = false,
    rounded = false,
    fullWidth = false,
    icon = null,
    onClick
}) {

    const className = `
        nova-btn
        ${variant}
        ${size}
        ${rounded ? "rounded" : ""}
        ${fullWidth ? "full-width" : ""}
    `;

    return (

        <button

            className={className}

            disabled={disabled || loading}

            onClick={onClick}

            aria-label={typeof children === "string" ? children : "Button"}

        >

            {

                loading ?

                <span className="loader"></span>

                :

                <>

                    {icon}

                    {children}

                </>

            }

        </button>

    );

});

export default Button;