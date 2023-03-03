import './App.css';
import {motion} from 'framer-motion';

function Guide() {
  return (
    <motion.div 
      whileHover={{x: '17vw'}}
      transition={{type: "tween"}} className="guide_module" >
      <motion.h1 
      whileHover={{}} className="guide_module_button">Guide</motion.h1>
      <div className='guide_wrapper'>
        <div className='step'>1.</div>
        <p className='step_description'>
            Insert and lock the story link from <a href="https://hn.algolia.com/" target="_blank" rel="noopener noreferrer" style={{ display: "inline" }}>Hacker News</a>
        </p>
        <div className='step'>2.</div>
        <p className='step_description'>
            Filter comments by <span className='ex_word'>words</span>
        </p>
        <div className='step'>3.</div>
        <p className='step_description'>
            Access the comments you liked!
        </p>
      </div>
    </motion.div>
  );
}
export default Guide;
