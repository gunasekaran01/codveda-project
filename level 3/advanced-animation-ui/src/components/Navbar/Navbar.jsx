import "./Navbar.css";
import { motion } from "framer-motion";
import { fadeDown } from "../../animations/navbarAnimation";

function Navbar() {
  return (
    <motion.header
      className="navbar"
      variants={fadeDown}
      initial="hidden"
      animate="visible"
    >
      <div className="container navbar-content">
        <h2>MotionUI</h2>

        <nav>
          <a href="#home">Home</a>
          <a href="#features">Features</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </nav>
      </div>
    </motion.header>
  );
}

export default Navbar;