import Spinner from "./Spinner";

export default{

    title:"Nova UI/Spinner",

    component:Spinner

};

export const Primary=()=>(
<Spinner/>
);

export const Success=()=>(
<Spinner
variant="success"
/>
);

export const Large=()=>(
<Spinner
size="large"
/>
);

export const LoadingText=()=>(
<Spinner
text="Loading..."
/>
);

export const DotSpinner=()=>(
<Spinner
type="dots"
variant="danger"
/>
);

export const FullScreen=()=>(
<Spinner
fullScreen
text="Loading Application..."
/>
);