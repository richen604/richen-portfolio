import React from 'react';
import useWindowSize from '@rooks/use-window-size';
import ParticleImage, {
  ParticleOptions,
  Vector,
  forces,
  ParticleForce,
} from 'react-particle-image';
/* import { MDBBtn } from 'mdb-react-ui-kit'; */
import styled from 'styled-components';

// Round number up to nearest step for better canvas performance
const round = (n: number, step = 20) => Math.ceil(n / step) * step;

// Try making me lower to see how performance degrades
const STEP = 30;

const motionForce = (x: number, y: number): ParticleForce =>
  forces.disturbance(x, y, 7);

const SCenterContainer = styled.div`
  width: 100%;
  display: flex;
  height: 500px;
  justify-content: center;
  align-items: center;
`;
/* 
const SCycleButton = styled(MDBBtn)`
  margin-top: 10px;
  max-width: 126px;
  max-height: 38px;
  width: 126px;
  height: 38px;
`; */

const Particle = () => {
  const { innerWidth, innerHeight } = useWindowSize();

  const particleOptions: ParticleOptions = {
    filter: ({ x, y, image }) => {
      // Get pixel
      const pixel = image.get(x, y);
      // Make a particle for this pixel if magnitude < 200 (range 0-255)
      const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
      return magnitude < 200;
    },
    color: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      // Canvases are much more performant when painting as few colors as possible.
      // Use color of pixel as color for particle however round to nearest 30
      // to decrease the number of unique colors painted on the canvas.
      // You'll notice if we remove this rounding, the framerate will slow down a lot.
      return `rgba(
          ${round(pixel.r, STEP)}, 
          ${round(pixel.g, STEP)}, 
          ${round(pixel.b, STEP)}, 
          ${round(pixel.a, STEP) / 255})`;
    },
    radius: ({ x, y, image }) => {
      const pixel = image.get(x, y);
      const magnitude = (pixel.r + pixel.g + pixel.b) / 3;
      // Lighter colors will have smaller radius
      return 3 - (magnitude / 255) * 1.5;
    },
    mass: () => 40,
    friction: () => 0.15,
    initialPosition: ({ canvasDimensions }) =>
      new Vector(canvasDimensions.width / 2, canvasDimensions.height / 2),
  };

  return (
    <>
      <SCenterContainer>
        <ParticleImage
          src="/inc-banner.webp"
          width={Number(innerWidth) - 500}
          height={Number(innerHeight) - 400}
          scale={0.4}
          entropy={3}
          maxParticles={5000}
          particleOptions={particleOptions}
          mouseMoveForce={motionForce}
          touchMoveForce={motionForce}
          backgroundColor="black"
        />
      </SCenterContainer>
    </>
  );
};

export default Particle;
