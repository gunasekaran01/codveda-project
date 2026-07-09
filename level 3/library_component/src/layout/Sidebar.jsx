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

function Sidebar() {

    return (

        <aside className="sidebar">

            <h3>Components</h3>

            <ul>

                {

                    components.map((item)=>(

                        <li key={item}>

                            <a href={"#"+item.toLowerCase()}>

                                {item}

                            </a>

                        </li>

                    ))

                }

            </ul>

        </aside>

    );

}

export default Sidebar;