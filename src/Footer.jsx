import './App.css'
import { motion, AnimatePresence } from 'framer-motion';

const Footer = ({isLocked}) => {
    return ( 
        <AnimatePresence>
            {(isLocked && (<motion.div
            initial={{y: 200}}
            animate={{y: 0}}
            transition={{duration: 1.5}}
            exit={{y: 200}}
            key={'footer'} className='footer'>
                <p className='footer_info'>
                    <a className='linkedin' href="https://linkedin.com/in/LevNatekin">LinkedIn</a>
                </p>
                <p className='name'>Lev Natekin</p>
                <p className='footer_info'>
                    <a className='github' href="https://github.com/D0odi">GitHub</a>
                </p>
            </motion.div>))}
        </AnimatePresence>
     );
}
 
export default Footer;