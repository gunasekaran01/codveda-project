import Alert from "./Alert";

export default{

    title:"Nova UI/Alert",

    component:Alert

};

export const Success=()=>(
<Alert/>
);

export const Warning=()=>(
<Alert
variant="warning"
title="Warning"
message="Check your information."
/>
);

export const Error=()=>(
<Alert
variant="danger"
title="Error"
message="Something went wrong."
/>
);

export const Info=()=>(
<Alert
variant="info"
title="Information"
message="System update available."
/>
);