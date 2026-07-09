import "./Services.css";

import { motion } from "framer-motion";

import {

cardVariant,

staggerContainer

} from "../../animations/variants";

const services=[

"Web Development",

"UI Design",

"React Development",

"Animation",

"Performance",

"SEO"

];

function Services(){

return(

<section id="services">

<div className="container">

<h2 className="section-title">

Services

</h2>

<motion.div

className="service-grid"

variants={staggerContainer}

initial="hidden"

whileInView="visible"

viewport={{

once:true

}}

>

{

services.map((service,index)=>(

<motion.div

key={index}

variants={cardVariant}

className="service-card"

whileHover={{

rotate:2,

scale:1.05

}}

>

<h3>

{service}

</h3>

</motion.div>

))

}

</motion.div>

</div>

</section>

);

}

export default Services;