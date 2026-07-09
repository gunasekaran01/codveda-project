import "./BackToTop.css";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa";

function BackToTop() {

    const [visible, setVisible] = useState(false);

    useEffect(() => {

        function handleScroll() {

            setVisible(window.scrollY > 300);

        }

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);

    }, []);

    function scrollTop() {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    }

    return (

        visible && (

            <motion.button

                className="back-top"

                onClick={scrollTop}

                initial={{ scale: 0 }}

                animate={{ scale: 1 }}

                whileHover={{

                    scale: 1.1,

                    rotate: 360

                }}

            >

                <FaArrowUp />

            </motion.button>

        )

    );

}

export default BackToTop;