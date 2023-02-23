import './App.css'
import { easeInOut, motion } from 'framer-motion';

const Post = ({index, text}) => {  

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
        <motion.div
        whileHover={{ cursor: "pointer",
                      scale: 0.95,}}
        key={index} className='post'>
            <motion.h1>{companyName(text)}</motion.h1>
        </motion.div>
     );
}
 
export default Post;