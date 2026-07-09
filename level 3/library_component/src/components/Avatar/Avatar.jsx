import "./Avatar.css";

function Avatar({

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

}

export default Avatar;