function Features() {

    const features = [

        {
            icon: "bi-lightning-charge-fill",
            title: "Fast Performance"
        },

        {
            icon: "bi-phone-fill",
            title: "Responsive Design"
        },

        {
            icon: "bi-shield-lock-fill",
            title: "Secure"
        },

        {
            icon: "bi-stars",
            title: "Modern UI"
        }

    ];

    return (

        <section
            id="features"
            className="bg-light"
        >

            <div className="container">

                <div className="section-title">

                    <h2>Why Choose Us?</h2>

                    <p>

                        We create high-quality websites
                        using the latest technologies.

                    </p>

                </div>

                <div className="row">

                    {features.map((feature, index) => (

                        <div
                            className="col-lg-3 col-md-6 mb-4"
                            key={index}
                        >

                            <div className="card h-100 text-center shadow-sm">

                                <div className="card-body">

                                    <i
                                        className={`bi ${feature.icon} display-4 text-primary`}
                                    ></i>

                                    <h4 className="mt-3">

                                        {feature.title}

                                    </h4>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Features;