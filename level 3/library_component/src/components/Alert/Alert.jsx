import { useState } from "react";
import "./Alert.css";

function Alert({

    title="Success",

    message="Operation completed successfully.",

    variant="success",

    closable=true

}){

    const [visible,setVisible]=useState(true);

    if(!visible) return null;

    return(

        <div

            className={`nova-alert ${variant}`}

            role="alert"

        >

            <div>

                <h4>{title}</h4>

                <p>{message}</p>

            </div>

            {

                closable &&

                <button

                    className="close-btn"

                    onClick={()=>setVisible(false)}

                    aria-label="Close Alert"

                >

                    ×

                </button>

            }

        </div>

    );

}

export default Alert;