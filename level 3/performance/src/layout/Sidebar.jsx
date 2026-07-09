import { memo, useMemo } from "react";
import "./Sidebar.css";

const components = [

    "Overview",

    "Installation",

    "Button",

    "Input",

    "Card",

    "Badge",

    "Alert",

    "Avatar",

    "Spinner",

    "Modal",

    "Toast",

    "Tooltip",

    "Accordion",

    "Tabs",

    "Progress",

    "Skeleton"

];

const Sidebar = memo(function Sidebar() {

    const items = useMemo(() => components.map((item) => ({
        label: item,
        href: `#${item.toLowerCase()}`
    })), []);

    return (

        <aside className="sidebar">

            <h3>Components</h3>

            <ul>

                {

                    items.map((item)=>(

                        <li key={item.label}>

                            <a href={item.href}>

                                {item.label}

                            </a>

                        </li>

                    ))

                }

            </ul>

        </aside>

    );

});

export default Sidebar;