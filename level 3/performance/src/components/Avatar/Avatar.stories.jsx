import Avatar from "./Avatar";
import avatar from "../../assets/images/avatar.webp";

export default {

    title:"Nova UI/Avatar",

    component:Avatar

};

export const Initials=()=>(
<Avatar
name="Nova UI"
/>
);

export const Image=()=>(
<Avatar

src={avatar}

name="John Doe"

/>
);

export const Large=()=>(
<Avatar

name="React"

size="large"

variant="success"

/>
);

export const Online=()=>(
<Avatar

src={avatar}

status="online"

/>
);

export const Offline=()=>(
<Avatar

name="Offline"

status="offline"

/>
);

export const Square=()=>(
<Avatar

name="Square"

square

variant="danger"

/>
);