import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const containerVariants: Variants = {
  hidden: {
    y: 40,
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 1.5,
      type: 'spring',
      bounce: 0.65,
    },
  },
};

export const Container = styled(motion.section).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))``;
