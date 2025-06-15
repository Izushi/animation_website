import { motion, useInView } from 'framer-motion';
import type React from 'react';
import { useRef } from 'react';

interface AnimatedTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'bounce' | 'rotate' | 'scale';
}

const AnimatedText = ({
  children,
  className = '',
  delay = 0,
  animation = 'fadeUp',
}: AnimatedTextProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const animations = {
    fadeUp: {
      initial: { opacity: 0, y: 60, scale: 0.8 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 0.8,
          delay: delay / 1000,
          ease: [0.25, 0.4, 0.25, 1],
          type: 'spring',
          stiffness: 100,
          damping: 10,
        },
      },
    },
    fadeLeft: {
      initial: { opacity: 0, x: -100, rotate: -10 },
      animate: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          duration: 0.9,
          delay: delay / 1000,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120,
        },
      },
    },
    fadeRight: {
      initial: { opacity: 0, x: 100, rotate: 10 },
      animate: {
        opacity: 1,
        x: 0,
        rotate: 0,
        transition: {
          duration: 0.9,
          delay: delay / 1000,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 120,
        },
      },
    },
    bounce: {
      initial: { opacity: 0, y: -100, scale: 0.3 },
      animate: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
          duration: 1.2,
          delay: delay / 1000,
          ease: 'easeOut',
          type: 'spring',
          stiffness: 400,
          damping: 17,
        },
      },
    },
    rotate: {
      initial: { opacity: 0, rotate: 180, scale: 0 },
      animate: {
        opacity: 1,
        rotate: 0,
        scale: 1,
        transition: {
          duration: 1.0,
          delay: delay / 1000,
          ease: [0.175, 0.885, 0.32, 1.275],
          type: 'spring',
          stiffness: 200,
        },
      },
    },
    scale: {
      initial: { opacity: 0, scale: 0, rotate: -180 },
      animate: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.8,
          delay: delay / 1000,
          ease: 'backOut',
          type: 'spring',
          stiffness: 300,
          damping: 20,
        },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial={animations[animation].initial}
      animate={isInView ? animations[animation].animate : animations[animation].initial}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedText;
