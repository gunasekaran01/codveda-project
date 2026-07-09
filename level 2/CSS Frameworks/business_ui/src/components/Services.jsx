function Services() {

    const services = [

        {
            icon: "bi-code-slash",
            title: "Web Development",
            description:
                "Build responsive and modern websites using HTML, CSS, JavaScript and React."
        },

        {
            icon: "bi-phone",
            title: "Mobile Apps",
            description:
                "Develop responsive mobile-friendly web applications for every device."
        },

        {
            icon: "bi-palette",
            title: "UI / UX Design",
            description:
                "Create attractive and user-friendly interfaces with Bootstrap."
        }

    ];

    return (

        <section id="services">

            <div className="container">

                <div className="section-title">

                    <h2>Our Services</h2>

                    <p>
                        We provide quality digital solutions for businesses.
                    </p>

                </div>

                <div className="row">

                    {services.map((service, index) => (

                        <div className="col-md-4 mb-4" key={index}>

                            <div className="card h-100 shadow-sm text-center">

                                <div className="card-body">

                                    <i
                                        className={`bi ${service.icon} display-4 text-primary`}
                                    ></i>

                                    <h4 className="mt-3">
                                        {service.title}
                                    </h4>

                                    <p>
                                        {service.description}
                                    </p>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Services;