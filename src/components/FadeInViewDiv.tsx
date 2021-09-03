import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeInViewDivWrapper = styled(motion.div)``;

interface IFadeInViewDivProps {
  children: React.ReactNode;
}

const FadeOnViewDiv: React.FunctionComponent<IFadeInViewDivProps> = ({
  children,
}: IFadeInViewDivProps) => {
  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start('hidden');
      controls.start('visible');
    } else if (!inView) {
      controls.start('visible');
      controls.start('hidden');
    }
  }, [controls, inView]);

  return (
    <FadeInViewDivWrapper
      ref={ref}
      animate={controls}
      initial="hidden"
      transition={{ duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 0.5, x: 100 },
      }}
    >
      {children}
    </FadeInViewDivWrapper>
  );
};

export default FadeOnViewDiv;
