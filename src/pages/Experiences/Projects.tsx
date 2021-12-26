import { motion } from "framer-motion";
import React from "react";
import { pageTransitions, transitionSettings } from "../../components/Transitions";

const Projects = () => {
    return (
        <motion.div 
        className="selfDiv" 
        initial="initial"
        animate="visible" 
        exit="hidden"
        variants={pageTransitions}
        transition={transitionSettings}>
            <h1>
              🛠💻 Projects page under development 🛠💻
            </h1>
        </motion.div>
    );
}

export default Projects;