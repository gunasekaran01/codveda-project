import Tooltip from "./Tooltip";
import Button from "../Button";

export default{

title:"Nova UI/Tooltip",

component:Tooltip

};

export const Default=()=>(
<Tooltip text="Save File">

<Button>

Hover Me

</Button>

</Tooltip>
);