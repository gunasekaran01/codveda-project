import { useState } from "react";
import Modal from "./Modal";
import Button from "../Button";

export default {

    title:"Nova UI/Modal",

    component:Modal

};

export const Default=()=>{

    const [open,setOpen]=useState(false);

    return(

        <>

            <Button

                onClick={()=>setOpen(true)}

            >

                Open Modal

            </Button>

            <Modal

                open={open}

                title="Delete Project"

                onClose={()=>setOpen(false)}

                onConfirm={()=>{

                    alert("Confirmed");

                    setOpen(false);

                }}

            >

                Are you sure you want to delete this project?

            </Modal>

        </>

    );

};