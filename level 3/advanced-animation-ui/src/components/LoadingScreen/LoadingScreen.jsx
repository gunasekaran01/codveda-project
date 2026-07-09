import "./LoadingScreen.css";
import { motion } from "framer-motion";

function LoadingScreen() {

    return (

        <motion.div

            className="loading-screen"

            initial={{ opacity: 1 }}

            animate={{ opacity: 0 }}

            transition={{

                delay: 1.5,

                duration: 1

            }}

        >

            <motion.h1

                animate={{

                    scale: [1, 1.2, 1]

                }}

                transition={{

                    repeat: Infinity,

                    duration: 1

                }}

            >

                MotionUI

            </motion.h1>

        </motion.div>

    );

}

export default LoadingScreen;