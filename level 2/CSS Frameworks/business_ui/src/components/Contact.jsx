import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    function handleChange(event) {

        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        alert("Message Sent Successfully!");

        setFormData({
            name: "",
            email: "",
            message: ""
        });

    }

    return (

        <section id="contact">

            <div className="container">

                <div className="section-title">

                    <h2>Contact Us</h2>

                    <p>We would love to hear from you.</p>

                </div>

                <form
                    className="row g-3"
                    onSubmit={handleSubmit}
                >

                    <div className="col-md-6">

                        <input
                            type="text"
                            className="form-control"
                            placeholder="Your Name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="col-md-6">

                        <input
                            type="email"
                            className="form-control"
                            placeholder="Email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                    </div>

                    <div className="col-12">

                        <textarea
                            className="form-control"
                            rows="5"
                            placeholder="Message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                    </div>

                    <div className="col-12 text-center">

                        <button
                            className="btn btn-primary"
                            type="submit"
                        >
                            Send Message
                        </button>

                    </div>

                </form>

            </div>

        </section>

    );

}

export default Contact;