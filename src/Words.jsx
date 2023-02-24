import { useState } from 'react';
import './App.css'
import App from './App';
import {motion, AnimatePresence, easeInOut} from 'framer-motion';

const Words = ({ words, removeWord }) => {
  if (words.length === 0) return null;

  

  return (
      <motion.div layout className="filters_holder">
          {words.map((word, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: -30}}
                animate={{ opacity: 1, y: 0}}
                transition={{duration: 0.3, ease: easeInOut}}
                whileHover={{rotate: [0,-5, 3, 0], transition: {duration: 0.5}, cursor: "pointer", boxShadow: "6px -4px 10px rgba(255, 102, 0, 0.5)"}}
                onClick={() => removeWord(index)}
                className="word_container"
              >
                {word}
              </motion.div>
          ))}
      </motion.div>
  );
};

 
export default Words;