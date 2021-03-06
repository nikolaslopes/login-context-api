import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const containerVariants: Variants = {
  hidden: {
    x: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1.1,
      type: 'spring',
      bounce: 0.75,
    },
  },
};
export const Container = styled(motion.div).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animation: 'visible',
}))``;
