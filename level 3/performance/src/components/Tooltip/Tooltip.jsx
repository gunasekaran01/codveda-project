import { memo, useState } from "react";
import "./Tooltip.css";

const Tooltip = memo(function Tooltip({

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

});

export default Tooltip;