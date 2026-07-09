import { memo } from "react";
import "./Spinner.css";

const Spinner = memo(function Spinner({

    size = "medium",

    variant = "primary",

    type = "circle",

    text = "",

    fullScreen = false

}) {

    return (

        <div
            className={`spinner-wrapper ${fullScreen ? "fullscreen" : ""}`}
            role="status"
            aria-live="polite"
        >

            <div
                className={`nova-spinner ${size} ${variant} ${type}`}
            ></div>

            {

                text &&

                <p className="spinner-text">

                    {text}

                </p>

            }

        </div>

    );

});

export default Spinner;