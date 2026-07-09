import "./Progress.css";

function Progress({

    value = 60,

    variant = "primary",

    showLabel = true,

    striped = false,

    animated = false,

    circular = false,

    size = 120

}) {

    if (circular) {

        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        const offset =
            circumference - (value / 100) * circumference;

        return (

            <div
                className="nova-progress-circle"
                style={{
                    width: size,
                    height: size
                }}
            >

                <svg
                    width={size}
                    height={size}
                >

                    <circle
                        className="progress-bg"
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                    />

                    <circle
                        className={`progress-value ${variant}`}
                        cx={size / 2}
                        cy={size / 2}
                        r={radius}
                        style={{
                            strokeDasharray: circumference,
                            strokeDashoffset: offset
                        }}
                    />

                </svg>

                {

                    showLabel &&

                    <span className="circle-label">

                        {value}%

                    </span>

                }

            </div>

        );

    }

    return (

        <div className="progress-wrapper">

            <div className="progress-track">

                <div

                    className={`
                        progress-fill
                        ${variant}
                        ${striped ? "striped" : ""}
                        ${animated ? "animated" : ""}
                    `}

                    style={{

                        width: `${value}%`

                    }}

                    role="progressbar"

                    aria-valuemin="0"

                    aria-valuemax="100"

                    aria-valuenow={value}

                ></div>

            </div>

            {

                showLabel &&

                <span className="progress-label">

                    {value}%

                </span>

            }

        </div>

    );

}

export default Progress;