import "./Stats.css";

import { motion } from "framer-motion";

import {

fadeUp

} from "../../animations/variants";

const stats=[

{

number:"50+",

label:"Projects"

},

{

number:"100+",

label:"Clients"

},

{

number:"25+",

label:"Awards"

},

{

number:"10K",

label:"Users"

}

];

function Stats(){

return(

<section className="stats">

<div className="container">

<motion.div

className="stats-grid"

variants={fadeUp}

initial="hidden"

whileInView="visible"

viewport={{

once:true

}}

>

{

stats.map((item,index)=>(

<motion.div

key={index}

className="stat-card"

whileHover={{

scale:1.08

}}

>

<h2>

{item.number}

</h2>

<p>

{item.label}

</p>

</motion.div>

))

}

</motion.div>

</div>

</section>

);

}

export default Stats;