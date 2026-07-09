import { useState } from "react";

function Contact() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        message: ""

    });

    const [success, setSuccess] = useState("");

    function handleChange(event) {

        const { name, value } = event.target;

        setFormData({

            ...formData,

            [name]: value

        });

    }

    function handleSubmit(event) {

        event.preventDefault();

        if (

            formData.name === "" ||

            formData.email === "" ||

            formData.message === ""

        ) {

            alert("Please fill all the fields.");

            return;

        }

        setSuccess("Your message has been sent successfully!");

        setFormData({

            name: "",

            email: "",

            message: ""

        });

    }

    return (

        <section>

            <h1 className="page-title">
                Contact Me
            </h1>

            <p className="page-text">
                Feel free to contact me using the form below.
            </p>

            <form
                onSubmit={handleSubmit}
                style={{
                    maxWidth: "600px",
                    margin: "40px auto",
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px"
                }}
            >

                <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    style={{
                        padding: "15px",
                        fontSize: "16px"
                    }}
                />

                <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    style={{
                        padding: "15px",
                        fontSize: "16px"
                    }}
                />

                <textarea
                    name="message"
                    placeholder="Enter your message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    style={{
                        padding: "15px",
                        fontSize: "16px"
                    }}
                ></textarea>

                <button
                    className="btn"
                    type="submit"
                >
                    Send Message
                </button>

            </form>

            <h3
                style={{
                    textAlign: "center",
                    color: "green"
                }}
            >
                {success}
            </h3>

        </section>

    );

}

export default Contact;