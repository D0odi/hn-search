import './App.css'
import { easeInOut, motion } from 'framer-motion';

const Post = ({index, text, postDisplay}) => {  

    const companyName = (text) => {
        text = cleanAndDecodeHTML(text)
        const first = text.indexOf('|')
        const name = (text.substring(0, first).trim().length == 0) ? 
        text.substring(first, text.indexOf('|')).trim() : text.substring(0, text.indexOf('|')).trim()
        if (name.length == 0) {
            return 'Small intro...'
        }
        return name;
    }

    const cleanAndDecodeHTML = (text) => {
        const element = document.createElement('div');
        element.innerHTML = text;
        return element.textContent;
    }


    return ( 
        <motion.div layout
        initial={{y: -20}}
        animate={{y: 0}}
        whileHover={{ cursor: "pointer", 
                      boxShadow: "0 0 10px rgb(255, 102, 0)",
                      borderColor: "transparent",
                      scale: 0.95,
                      transition: {duration: 0.3, ease: easeInOut}}}
        key={index} className='post' onClick={() => postDisplay(index)}>
            <motion.h1>{companyName(text)}</motion.h1>
        </motion.div>
     );
}
 
export default Post;