import './App.css'
import { AnimatePresence, easeInOut, motion } from 'framer-motion';

const Post = ({index, text, words, selected}) => {  

    const filter = (text) => {
        if (text == null || text == '') return false;
        const t = text.toLowerCase();
        for (let i = 0; i < words.length; i++) {
            const w = words[i].toLowerCase();
            if (!t.includes(w)) {
              return false;
            }
        }
        return true;
    }

    const cleanText = (text) => {
        text = cleanAndDecodeHTML(text)
        if (text.length == 0) {
            return 'Small intro...'
        }
        return text;
    }

    const cleanAndDecodeHTML = (text) => {
        const element = document.createElement('div');
        element.innerHTML = text;
        return element.textContent;
    }


    return ( 
        <AnimatePresence>
            {filter(text) && (
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                key={index}
                style={{borderColor: (selected == index) ? 'rgb(255, 102, 0)' : 'white'}}
                whileHover={{ cursor: "pointer", scale: 0.95}} className='post'>
                    <motion.h1 className='post_text'>{cleanText(text)}</motion.h1>
                </motion.div>)}
        </AnimatePresence>
     );
}
 
export default Post;