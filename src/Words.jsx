import { useState } from 'react';
import './App.css'
import App from './App';
import {motion, AnimatePresence} from 'framer-motion';

const Words = ({ words, removeWord }) => {
  if (words.length === 0) return null;

  return (
      <motion.div layout className="filters_holder">
        <AnimatePresence>
          {words.map((word, index) => (
              <motion.div
                layout
                initial={{ opacity: 0, y: -20}}
                animate={{ opacity: 1, y: 0 }}
                exit={{ y: -20}}
                transition={{ type: "spring", duration: 1, ease: "easeInOut"}}
                whileHover={{ scale: 1.1, cursor: "pointer" }}
                onClick={() => removeWord(index)}
                className="word_container"
              >
                {word}
              </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
  );
};

 
export default Words;