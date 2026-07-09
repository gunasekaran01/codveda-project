import Card from "./Card";
import card1 from "../../assets/images/card1.webp";

export default {

    title:"Nova UI/Card",

    component:Card

};

export const Default=()=>(
<Card

title="React Card"

description="Reusable React component."

/>
);

export const ImageCard=()=>(
<Card

image={card1}

title="Image Card"

description="Card with image."

badge="NEW"

/>
);

export const Horizontal=()=>(
<Card

horizontal

image={card1}

title="Horizontal Card"

description="Professional layout."

buttonText="Explore"

/>
);