import Skeleton from "./Skeleton";

export default{

title:"Nova UI/Skeleton",

component:Skeleton

};

export const Text=()=>(
<Skeleton/>
);

export const Circle=()=>(
<Skeleton
variant="circle"
/>
);

export const Card=()=>(
<Skeleton

variant="card"

height="200px"

/>
);