import "./Testimonials.css";

import { motion } from "framer-motion";

const testimonials = [

    {

        name:"John",

        role:"Developer",

        text:"Fantastic animation library."

    },

    {

        name:"Sarah",

        role:"Designer",

        text:"Beautiful UI and smooth experience."

    },

    {

        name:"David",

        role:"Product Manager",

        text:"Perfect for production projects."

    }

];

function Testimonials(){

return(

<section>

<div className="container">

<h2 className="section-title">

Testimonials

</h2>

<div className="testimonial-grid">

{

testimonials.map((item,index)=>(

<motion.div

key={index}

className="testimonial-card"

initial={{

opacity:0,

y:40

}}

whileInView={{

opacity:1,

y:0

}}

transition={{

delay:index*.2

}}

viewport={{

once:true

}}

whileHover={{

scale:1.05

}}

>

<h3>

{item.name}

</h3>

<h4>

{item.role}

</h4>

<p>

{item.text}

</p>

</motion.div>

))

}

</div>

</div>

</section>

);

}

export default Testimonials;