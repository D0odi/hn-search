import './App.css';
import {FaLink} from "react-icons/fa";
import { motion, AnimatePresence } from 'framer-motion';

const PostModal = ({selectedPostId, posts, isLocked}) => {

    const links = []

    const getLinks = (text) => {
        const urlRegex = /(https?:\/\/[^\s]+)/g;
        const matches = text.match(urlRegex);
        if (matches) {
          matches.forEach((match) => {
            links.push(match);
          });
        }
      };

    const cleanAndDecodeHTML = (text) => {
        const element = document.createElement('div');
        element.innerHTML = text;
        getLinks(element.textContent);
        return element.textContent;
    }
    const convertTime = (time) => {
        const date = new Date(time * 1000);
        const options = { month: 'short', day: 'numeric' };
        return date.toLocaleDateString('en-US', options);
    }

    const isVisible = (id) => {
        return (id === null) ? false : true
     }

    return (
        <AnimatePresence>
            {(isVisible(selectedPostId) && (
            <motion.div 
            key={selectedPostId}
            initial={{ x: 600, y: -150, opacity: 0, scale: 0, height: '20vh', width: '29vw' }}
            animate={{ x: 0, y: 0, opacity: 1, scale: 1, height: isLocked ? '33.8vh' : '42.5vh' }}
            exit={{ x: -600, y: 150, opacity: 0, scale: 0 }}
            transition={{ duration: 1.5 }}
            className='post_modal'>
                <AnimatePresence>
                    <motion.div
                    className='selected_post'>
                        <motion.div className='modal_by'>
                            <motion.h1 >{posts[selectedPostId].by}</motion.h1>
                            <motion.h1 >{convertTime(posts[selectedPostId].time)}</motion.h1>
                            <motion.a className='modal_link'
                                      initial={{borderRadius: '1vh'}}
                                      whileHover={{rotate: 90, scale: 1.1, borderRadius: '3vh'}} 
                                      transition={{duration: 1}}
                                      href={`https://news.ycombinator.com/item?id=${posts[selectedPostId].id}`}
                                      target="_blank" rel="noopener noreferrer">
                                      <FaLink className='link_icon'/>
                            </motion.a>
                        </motion.div>
                        <motion.p className='modal_text'>{cleanAndDecodeHTML(posts[selectedPostId].text)}</motion.p>
                    </motion.div>
                </AnimatePresence>
            </motion.div>))}
        </AnimatePresence>
     );
}
 
export default PostModal;