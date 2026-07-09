import Avatar from "./Avatar";

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

src="https://i.pravatar.cc/300"

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

src="https://i.pravatar.cc/300"

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