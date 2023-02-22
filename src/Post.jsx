import './App.css'
import { motion } from 'framer-motion';

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
        <motion.div key={index} className='post'>
            <div className='headers'>
                <h1 className='company_name'>{companyName(text)}</h1>
            </div>
            {/* <p className='post_text'>{cleanAndDecodeHTML(text)}</p> */}
        </motion.div>
     );
}
 
export default Post;