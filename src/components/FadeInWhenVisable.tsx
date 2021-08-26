import { useAnimation, motion } from 'framer-motion';
import React, { useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styled from 'styled-components';

const FadeInWhenVisableWrapper = styled(motion.div)`
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

interface IFadeInWhenVisableProps {
  children: React.ReactNode;
}

const FadeInWhenVisable: React.FunctionComponent<IFadeInWhenVisableProps> = ({
  children,
}: IFadeInWhenVisableProps) => {
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
    <FadeInWhenVisableWrapper
      ref={ref}
      animate={controls}
      initial={false}
      transition={{ delay: 0.1, duration: 0.3 }}
      variants={{
        visible: { opacity: 1, scale: 1, x: 0 },
        hidden: { opacity: 0, scale: 0.5, x: 100 },
      }}
    >
      {children}
    </FadeInWhenVisableWrapper>
  );
};

export default FadeInWhenVisable;
