import Accordion from "./Accordion";

export default {

    title:"Nova UI/Accordion",

    component:Accordion

};

const items = [

    {

        title:"What is Nova UI?",

        content:"Nova UI is a reusable React component library."

    },

    {

        title:"Why use Nova UI?",

        content:"It provides reusable, customizable and accessible components."

    },

    {

        title:"Is it responsive?",

        content:"Yes, every component is designed to work across devices."

    }

];

export const Default = () => (

    <Accordion items={items} />

);