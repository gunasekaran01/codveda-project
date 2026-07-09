import { memo } from "react";
import "./Skeleton.css";

const Skeleton = memo(function Skeleton({

    variant="text",

    width="100%",

    height="20px"

}){

    return(

        <div

            className={`nova-skeleton ${variant}`}

            style={{

                width,

                height

            }}

        ></div>

    );

});

export default Skeleton;