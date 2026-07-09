import Tabs from "./Tabs";

export default {

    title:"Nova UI/Tabs",

    component:Tabs

};

const tabs=[

    {

        label:"Overview",

        content:<p>Nova UI is a reusable component library.</p>

    },

    {

        label:"Installation",

        content:<p>npm install nova-ui</p>

    },

    {

        label:"Examples",

        content:<p>View reusable React component examples.</p>

    }

];

export const Default=()=>(
<Tabs tabs={tabs}/>
);