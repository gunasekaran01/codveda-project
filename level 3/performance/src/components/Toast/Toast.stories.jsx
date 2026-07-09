import Toast from "./Toast";

export default{

title:"Nova UI/Toast",

component:Toast

};

export const Success=()=>(
<Toast/>
);

export const Error=()=>(
<Toast

variant="danger"

message="Failed to save."

/>
);