import Input from "./Input";

export default {

    title:"Nova UI/Input",

    component:Input

};

export const Text=()=>(
<Input
label="Name"
placeholder="Enter your name"
/>
);

export const Email=()=>(
<Input
label="Email"
type="email"
placeholder="Enter your email"
/>
);

export const Password=()=>(
<Input
label="Password"
type="password"
placeholder="Enter password"
/>
);

export const Search=()=>(
<Input
label="Search"
type="search"
placeholder="Search..."
/>
);

export const Error=()=>(
<Input
label="Email"
error="Invalid Email"
/>
);

export const Disabled=()=>(
<Input
label="Username"
disabled
/>
);

export const Large=()=>(
<Input
label="Full Name"
size="large"
/>
);