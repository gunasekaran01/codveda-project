import { memo, useEffect } from "react";
import "./Toast.css";

const Toast = memo(function Toast({

    message = "Saved Successfully",

    variant = "success",

    duration = 3000,

    onClose

}) {

    useEffect(() => {

        const timer = setTimeout(() => {

            if (onClose) onClose();

        }, duration);

        return () => clearTimeout(timer);

    }, [duration, onClose]);

    return (

        <div

            className={`nova-toast ${variant}`}

            role="alert"

        >

            {message}

        </div>

    );

});

export default Toast;