import "./Contact.css";

import { motion } from "framer-motion";

function Contact(){

return(

<section id="contact">

<div className="container">

<motion.form

className="contact-form"

initial={{

opacity:0,

scale:.8

}}

whileInView={{

opacity:1,

scale:1

}}

transition={{

duration:.8

}}

viewport={{

once:true

}}

>

<h2>

Contact Us

</h2>

<input

type="text"

placeholder="Name"

/>

<input

type="email"

placeholder="Email"

/>

<textarea

placeholder="Message"

></textarea>

<button>

Send Message

</button>

</motion.form>

</div>

</section>

);

}

export default Contact;