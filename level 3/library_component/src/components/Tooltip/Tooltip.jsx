import { useState } from "react";
import "./Tooltip.css";

function Tooltip({

    children,

    text = "Tooltip",

    position = "top"

}) {

    const [show, setShow] = useState(false);

    return (

        <div

            className="tooltip-wrapper"

            onMouseEnter={() => setShow(true)}

            onMouseLeave={() => setShow(false)}

        >

            {children}

            {

                show &&

                <span

                    className={`tooltip-box ${position}`}

                    role="tooltip"

                >

                    {text}

                </span>

            }

        </div>

    );

}

export default Tooltip;