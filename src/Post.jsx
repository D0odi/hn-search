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
        <AnimatePresence>
            {filter(text) && (
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                key={index}
                style={{borderColor: (selected == index) ? 'rgb(255, 102, 0)' : 'white'}}
                whileHover={{ cursor: "pointer", scale: 0.95}} className='post'>
                    <motion.h1 className='post_text'>{companyName(text)}</motion.h1>
                </motion.div>)}
        </AnimatePresence>
     );
}
 
export default Post;