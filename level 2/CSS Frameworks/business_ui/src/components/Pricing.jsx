function Pricing() {

    const plans = [

        {
            title: "Basic",
            price: "$19",
            features: [
                "1 Website",
                "Basic Support",
                "Responsive Design"
            ]
        },

        {
            title: "Standard",
            price: "$49",
            features: [
                "5 Websites",
                "Priority Support",
                "Responsive Design"
            ]
        },

        {
            title: "Premium",
            price: "$99",
            features: [
                "Unlimited Websites",
                "24/7 Support",
                "Premium Features"
            ]
        }

    ];

    return (

        <section id="pricing">

            <div className="container">

                <div className="section-title">

                    <h2>Pricing Plans</h2>

                    <p>Choose the plan that suits your business.</p>

                </div>

                <div className="row">

                    {plans.map((plan, index) => (

                        <div className="col-md-4 mb-4" key={index}>

                            <div className="card h-100 shadow text-center">

                                <div className="card-body">

                                    <h3>{plan.title}</h3>

                                    <h1 className="text-primary my-3">
                                        {plan.price}
                                    </h1>

                                    {plan.features.map((item, i) => (
                                        <p key={i}>{item}</p>
                                    ))}

                                    <button className="btn btn-primary mt-3">
                                        Choose Plan
                                    </button>

                                </div>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default Pricing;