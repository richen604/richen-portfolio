import useMouse from '@react-hook/mouse-position';
import Goo from 'gooey-react';
import React from 'react';
import styled from 'styled-components';

const STestContainer = styled.div`
  width: 100%;
  height: 600px;
`;

const STestNav = styled.div`
  width: 100%;
  height: 500px;
`;

const STestDiv = styled.div`
  background-color: green;
  width: 100px;
  min-height: 500px !important;
`;

const STestHover = styled.div<{ top: number; left: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 80px;
  height: 80px;
  margin-left: 20px;
  border-radius: 90%;
  top: ${(props: { top: number }) => props.top}px;
  left: ${(props: { left: number }) => props.left}px;
  background-color: green;
  box-shadow: 0;
`;

const STestHoverAction = styled.div`
  width: 50%;
  height: 50%;
  margin-left: 60%;
  background-color: red;
`;

// TODO add handler for finding max page height for handleMouseTop
// TODO add handler for finding max page width for handleMouseLeft
// TODO position mouse left based on 1/5th of page width

const GooeyNav = () => {
  const ref = React.useRef(null);
  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
    fps: 30,
  });

  const handleMouseLeft = () => {
    if (mouse.x > 300) return 0;
    if (mouse.elementWidth - mouse.elementWidth / 1.1 - mouse.x <= 0) return 0;
    return mouse.elementWidth - mouse.elementWidth / 1.1 - mouse.x;
  };

  const handleMouseTop = () => {
    // const oldTop = mouse.y;
    if (!mouse.y || mouse.y - 75 <= 0) return 0;
    if (mouse.y <= 0) return 0;
    if (mouse.y >= mouse.elementHeight - 75) return mouse.elementHeight - 150;
    return mouse.y - 75;
  };
  return (
    <>
      <STestContainer>
        <Goo intensity="strong">
          <STestNav ref={ref}>
            <STestDiv>Test</STestDiv>
            <STestHover top={handleMouseTop()} left={handleMouseLeft()}>
              <STestHoverAction>Test</STestHoverAction>
              Click me
            </STestHover>
          </STestNav>
        </Goo>
        <br />
        <br />
        <br />
        <div>
          x: {mouse.x} || y: {mouse.y} pageX: {mouse.pageX} || pageY:{' '}
          {mouse.pageY} clientX: {mouse.clientX} || clientY: {mouse.clientY}
          screenX: {mouse.screenX} || screenY: {mouse.screenY}
          elementWidth: {mouse.elementWidth} || elementHeight:{' '}
          {mouse.elementHeight}
        </div>
      </STestContainer>
    </>
  );
};

export default GooeyNav;
