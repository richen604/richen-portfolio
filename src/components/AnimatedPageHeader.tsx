/* eslint-disable no-plusplus */
import { motion, useAnimation } from 'framer-motion';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import useResizeObserver from '@react-hook/resize-observer';
import NoSsr from './NoSsr';

/*
TODO Box layers
TODO Box layers set based on available page height
*/

interface Props {}

const SAnimatedPageHeader = styled.div`
  width: 100%;
  height: 100vh;
  background-color: darkgray;
  overflow: hidden;
`;

const SBox = styled(motion.div)`
  min-width: 200px !important;
  min-height: 80px !important;
  border-radius: 4px;
  border: 1px solid white;
  background-color: transparent;
  margin: 1px;
`;

const SAnimatedBoxRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: space-between;
  flex-shrink: 0;
  height: 100% !important;
`;

const SAnimatedBoxGroup = styled(motion.div)<{
  padding: { height: number; width: number };
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: space-between;
  overflow: hidden;
  padding: 0;
`;

const AnimatedBox = ({ dimensions, children }) => {
  const controls = useAnimation();

  console.log(dimensions);

  useEffect(() => {
    controls.stop();
    controls.set({ y: -dimensions.height - 80, x: -100 });
    controls.start({
      y: 0,
      x: -100,
      transition: {
        repeat: Infinity,
        delay: 0.5,
        duration: 1,
        type: 'spring',
      },
    });
  }, [dimensions]);

  return (
    <SBox initial={false} animate={controls}>
      {children}
    </SBox>
  );
};

const AnimatedBoxRow = ({ children }) => (
  <SAnimatedBoxRow>{children}</SAnimatedBoxRow>
);

const AnimatedBoxGroup = ({ dimensions }) => {
  const [divisable, setDivisable] = useState({ height: 0, width: 0 });

  useEffect(() => {
    setDivisable({
      height: Math.floor(dimensions.height / 80) + 1, // 80 is the height of the box
      width: Math.floor(dimensions.width / 200) + 3, // 200 is the width of the box
    });
    dimensions.padding = {
      width: dimensions.width % 200,
      height: dimensions.height % 80,
    };
  }, [dimensions]);

  // generates a test matrix using array fill
  const generateMatrix = (rows, columns) => {
    const matrix = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < columns; j++) {
        row.push(
          <>
            <AnimatedBox
              key={`${i}-${j}`}
              dimensions={dimensions}
            >{`${i}-${j}`}</AnimatedBox>
          </>
        );
      }
      matrix.push(<AnimatedBoxRow>{row}</AnimatedBoxRow>);
    }
    return matrix;
  };
  const boxes = generateMatrix(divisable.height, divisable.width);

  return (
    <SAnimatedBoxGroup padding={dimensions.padding}>{boxes}</SAnimatedBoxGroup>
  );
};

const AnimatedPageHeader = (props: Props) => {
  const useSize = target => {
    const [size, setSize] = React.useState<any>();

    React.useLayoutEffect(() => {
      setSize(target.current.getBoundingClientRect());
    }, [target]);

    // Where the magic happens
    useResizeObserver(target, entry => setSize(entry.contentRect));
    return size;
  };

  const target = useRef(null);
  const size = useSize(target);
  const dimensions = { ...size, padding: {} };

  return (
    // eslint-disable-next-line no-return-assign
    <SAnimatedPageHeader ref={target}>
      {size && (
        <>
          <AnimatedBoxGroup dimensions={dimensions} />
        </>
      )}
    </SAnimatedPageHeader>
  );
};

export default AnimatedPageHeader;
