import { memo } from "react";
import "./Badge.css";

const Badge = memo(function Badge({

    children = "Badge",

    variant = "primary",

    outline = false,

    rounded = true,

    size = "medium"

}) {

    const className = `
        nova-badge
        ${variant}
        ${size}
        ${outline ? "outline" : ""}
        ${rounded ? "rounded" : ""}
    `;

    return (

        <span

            className={className}

            role="status"

        >

            {children}

        </span>

    );

});

export default Badge;