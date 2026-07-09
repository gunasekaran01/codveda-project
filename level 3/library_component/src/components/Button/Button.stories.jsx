import Button from "./Button";

export default {

    title:"Nova UI/Button",

    component:Button

};

export const Primary=()=>(
<Button>
Primary
</Button>
);

export const Secondary=()=>(
<Button
variant="secondary"
>
Secondary
</Button>
);

export const Success=()=>(
<Button
variant="success"
>
Success
</Button>
);

export const Danger=()=>(
<Button
variant="danger"
>
Danger
</Button>
);

export const Outline=()=>(
<Button
variant="outline"
>
Outline
</Button>
);

export const Ghost=()=>(
<Button
variant="ghost"
>
Ghost
</Button>
);

export const Loading=()=>(
<Button
loading
/>
);

export const Large=()=>(
<Button
size="large"
>
Large
</Button>
);