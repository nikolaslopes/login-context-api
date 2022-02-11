import { motion, Variants } from 'framer-motion';
import styled from 'styled-components';

const containerVariants: Variants = {
  hidden: {
    x: -400,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    rotate: 0,
    transition: {
      duration: 1.2,
      type: 'spring',
      bounce: 0.5,
    },
  },
};
export const Container = styled(motion.form).attrs(() => ({
  variants: containerVariants,
  initial: 'hidden',
  animate: 'visible',
}))`
  padding: 142px;
  display: flex;
  flex-direction: column;

  .first-input {
    margin-bottom: 16px;
  }

  button[type='submit'] {
    margin-top: 22px;
  }
`;
