import "./Card.css";

function Card({

    image,

    title = "Card Title",

    description = "Card description",

    buttonText = "Learn More",

    badge = "",

    shadow = "medium",

    horizontal = false,

    onClick

}) {

    return (

        <div

            className={`
                nova-card
                ${shadow}
                ${horizontal ? "horizontal" : ""}
            `}

        >

            {

                image &&

                <img

                    src={image}

                    alt={title}

                    className="card-image"

                />

            }

            <div className="card-content">

                {

                    badge &&

                    <span className="card-badge">

                        {badge}

                    </span>

                }

                <h3>

                    {title}

                </h3>

                <p>

                    {description}

                </p>

                <button

                    className="card-button"

                    onClick={onClick}

                >

                    {buttonText}

                </button>

            </div>

        </div>

    );

}

export default Card;