import "./Footer.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <div className="container">

        <motion.div
          className="footer-content"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="footer-brand">

            <h2>MotionUI</h2>

            <p>
              Modern React UI Components with
              beautiful animations powered by
              Framer Motion.
            </p>

          </div>

          <div className="footer-links">

            <h3>Quick Links</h3>

            <a href="#home">Home</a>

            <a href="#features">Features</a>

            <a href="#services">Services</a>

            <a href="#contact">Contact</a>

          </div>

          <div className="footer-social">

            <h3>Connect</h3>

            <div className="social-icons">

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
              >
                <FaGithub />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.2,
                  rotate: -10,
                }}
              >
                <FaLinkedin />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.2,
                  rotate: 10,
                }}
              >
                <FaTwitter />
              </motion.a>

              <motion.a
                href="#"
                whileHover={{
                  scale: 1.2,
                }}
              >
                <FaEnvelope />
              </motion.a>

            </div>

          </div>

        </motion.div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
        >

          copyrights © 2026 MotionUI. All Rights Reserved.

        </motion.div>

      </div>

    </footer>
  );
}

export default Footer;