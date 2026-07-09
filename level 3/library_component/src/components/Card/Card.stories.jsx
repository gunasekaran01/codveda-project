import Card from "./Card";

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

image="https://picsum.photos/600/400"

title="Image Card"

description="Card with image."

badge="NEW"

/>
);

export const Horizontal=()=>(
<Card

horizontal

image="https://picsum.photos/600/400"

title="Horizontal Card"

description="Professional layout."

buttonText="Explore"

/>
);