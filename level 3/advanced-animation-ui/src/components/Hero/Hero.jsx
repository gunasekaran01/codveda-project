import "./Hero.css";

import { motion, useReducedMotion } from "framer-motion";

import { fadeLeft,fadeRight } from "../../animations/variants";

function Hero(){
const reduceMotion = useReducedMotion();
return(

<section

id="home"

className="hero"

>

<div className="container hero-grid">

<motion.div

variants={fadeLeft}

initial="hidden"

animate="visible"

className="hero-content"

>

<h1>

Build Amazing

React Interfaces

</h1>

<p>

Create beautiful and modern user interfaces
with smooth animations powered by Framer Motion.

</p>
<div className="hero-buttons">

    <motion.button
        className="btn"
        whileHover={{
            scale: 1.08,
            y: -5,
        }}
        whileTap={{
            scale: 0.95,
        }}
        transition={{
            duration: 0.2,
        }}
    >
        Get Started
    </motion.button>

    <motion.button
        className="btn outline"
        whileHover={{
            scale: 1.08,
            y: -5,
        }}
        whileTap={{
            scale: 0.95,
        }}
        transition={{
            duration: 0.2,
        }}
    >
        Documentation
    </motion.button>

</div>

</motion.div>

<motion.div

variants={fadeRight}

initial="hidden"

animate="visible"

className="hero-image"

>

<img
  src="https://picsum.photos/800/500"
  alt="Hero"
/>

</motion.div>

</div>

</section>

);

}

export default Hero;