import Badge from "./Badge";

export default{

    title:"Nova UI/Badge",

    component:Badge

};

export const Primary=()=>(
<Badge>Primary</Badge>
);

export const Success=()=>(
<Badge variant="success">Success</Badge>
);

export const Danger=()=>(
<Badge variant="danger">Danger</Badge>
);

export const Outline=()=>(
<Badge
variant="primary"
outline
>
Outline
</Badge>
);