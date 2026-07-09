import { useState } from "react";
import "./Accordion.css";

function Accordion({ items = [] }) {

    const [activeIndex, setActiveIndex] = useState(null);

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (

        <div className="nova-accordion">

            {items.map((item, index) => (

                <div
                    key={index}
                    className="accordion-item"
                >

                    <button

                        className="accordion-header"

                        onClick={() => toggleAccordion(index)}

                        aria-expanded={activeIndex === index}

                    >

                        <span>{item.title}</span>

                        <span className="accordion-icon">

                            {activeIndex === index ? "−" : "+"}

                        </span>

                    </button>

                    <div

                        className={`accordion-content ${
                            activeIndex === index ? "open" : ""
                        }`}

                    >

                        <p>{item.content}</p>

                    </div>

                </div>

            ))}

        </div>

    );

}

export default Accordion;