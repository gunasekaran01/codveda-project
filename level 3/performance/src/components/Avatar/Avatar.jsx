import { memo } from "react";
import "./Avatar.css";

const Avatar = memo(function Avatar({

    src = "",

    name = "Nova UI",

    size = "medium",

    variant = "primary",

    status = "",

    square = false,

    onClick

}) {

    const initials = name
        .split(" ")
        .map(word => word[0])
        .join("")
        .substring(0, 2)
        .toUpperCase();

    return (

        <div
            className="avatar-wrapper"
        >

            <div

                className={`
                    nova-avatar
                    ${size}
                    ${variant}
                    ${square ? "square" : ""}
                `}

                onClick={onClick}

                role="img"

                aria-label={name}

            >

                {

                    src ?

                    <img

                        src={src}

                        alt={name}

                        loading="lazy"

                        decoding="async"

                        width="96"

                        height="96"

                        sizes="96px"

                    />

                    :

                    initials

                }

            </div>

            {

                status &&

                <span

                    className={`status ${status}`}

                ></span>

            }

        </div>

    );

});

export default Avatar;