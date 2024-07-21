import { motion } from 'framer-motion';
import React from 'react';

const MenuItem = ({ children, href }: { children: string; href: string }) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hovered"
      href={href}
      className='relative block overflow-hidden whitespace-nowrap text-4xl uppercase sm:text-7xl md:text-8xl lg:text-9xl'
    >
      <div className='relative'>
        {children.split("").map((letter, index) => (
          <motion.span
            className='inline-block'
            key={index}
            variants={{
              initial: { y: 0 },
              hovered: { y: "-100%" },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.05 * index
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
      <div className='absolute inset-0'>
        {children.split("").map((letter, index) => (
          <motion.span
            className='inline-block'
            key={index}
            variants={{
              initial: { y: "100%" },
              hovered: { y: 0 },
            }}
            transition={{
              duration: 0.25,
              ease: "easeInOut",
              delay: 0.05 * index
            }}
          >
            {letter}
          </motion.span>
        ))}
      </div>
    </motion.a>
  );
};

export default MenuItem;
