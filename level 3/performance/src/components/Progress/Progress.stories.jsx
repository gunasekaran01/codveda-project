import Progress from "./Progress";

export default{

    title:"Nova UI/Progress",

    component:Progress

};

export const Linear=()=>(
<Progress value={60}/>
);

export const Success=()=>(
<Progress
value={85}
variant="success"
/>
);

export const Danger=()=>(
<Progress
value={30}
variant="danger"
/>
);

export const Animated=()=>(
<Progress
value={70}
striped
animated
/>
);

export const Circular=()=>(
<Progress
circular
value={75}
/>
);