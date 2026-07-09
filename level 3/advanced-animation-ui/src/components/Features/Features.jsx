import "./Features.css";

import {

motion

} from "framer-motion";

import {

staggerContainer,

cardVariant

} from "../../animations/variants";

import {

FaRocket,

FaCode,

FaMobileAlt

} from "react-icons/fa";

const features=[

{

icon:<FaRocket/>,

title:"Fast",

text:"Optimized for speed and performance."

},

{

icon:<FaCode/>,

title:"Reusable",

text:"Modern reusable React components."

},

{

icon:<FaMobileAlt/>,

title:"Responsive",

text:"Works perfectly on every device."

}

];

function Features(){

return(

<section

id="features"

>

<div className="container">

<h2 className="section-title">

Features

</h2>

<p className="section-subtitle">

Everything you need to build
beautiful React applications.

</p>

<motion.div

className="feature-grid"

variants={staggerContainer}

initial="hidden"

whileInView="visible"

viewport={{

once:true,

amount:.3

}}

>

{

features.map((feature,index)=>(

<motion.div

key={index}

variants={cardVariant}

className="feature-card"

whileHover={{

scale:1.05,

y:-8

}}

transition={{

duration:.3

}}

>

<div className="icon">

{feature.icon}

</div>

<h3>

{feature.title}

</h3>

<p>

{feature.text}

</p>

</motion.div>

))

}

</motion.div>

</div>

</section>

);

}

export default Features;