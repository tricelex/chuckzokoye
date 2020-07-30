import React from 'react';
import Typed from 'react-typed';
import styled from 'styled-components';
import Particles from 'react-particles-js';
import { Link } from 'gatsby';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

const IndexPage = () => {
  const params = {
    particles: {
      number: {
        value: 15,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: '#2d0fc7', // 303346
      },
      shape: {
        type: 'star',
        stroke: {
          width: 0,
          color: 'rgba(255,255,255,0.1)',
        },
        sides: {
          nb_sides: 7,
        },
      },
      opacity: {
        value: 0.1,
        random: true,
        anim: {
          enable: false,
          speed: 0.15984015984015984,
          opacity_min: 0.1,
          sync: true,
        },
      },
      size: {
        value: 51.29459670609772,
        random: true,
        anim: {
          enable: true,
          speed: 1,
          size_min: 40,
          sync: false,
        },
      },
      line_linked: {
        enable: false,
        distance: 200,
        color: '#ffffff',
        opacity: 1,
        width: 2,
      },
      move: {
        enable: true,
        speed: 3,
        direction: 'none',
        random: false,
        straight: false,
        out_mode: 'out',
        bounce: true,
        attract: {
          enable: true,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: 'window',
      events: {
        onhover: {
          enable: true,
          mode: 'repulse',
        },
        onclick: {
          enable: false,
          mode: 'remove',
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  };

  return (
    <>
      <SEO
        title="Home"
        keywords={[
          `web developer`,
          `back end engineer`,
          `react developer`,
          `python developer`,
          `django developer`,
          `javascript engineer`,
          `chuckz okoye`,
          `developer`,
          `lagos`,
        ]}
      />
      <Background params={params} />
      <Intro>
        <Container>
          <Headline>
            <Typed
              loop
              typeSpeed={80}
              backSpeed={20}
              strings={[
                "I'm <span class='accent'>Chuckz Okoye.</span> ",
                "I'm a <span class='accent'>Software Developer</span>.",
                "I write <span class='accent'>Codes </span> and <span class='accent'>Solve Problems.",
              ]}
              smartBackspace
              backDelay={1000}
              loopCount={0}
              showCursor
              cursorChar="|"
              className="typed"
            />
          </Headline>
          <Text>
            As a software developer with years of experience I create
            specialised websites and web apps.{' '}
            <strong>
              <Link to="/contact/">Get in touch</Link>
            </strong>{' '}
            lets discuss work together.{' '}
          </Text>
        </Container>
      </Intro>
    </>
  );
};

const Background = styled(Particles)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
`;

const Intro = styled.section`
  min-height: 75vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

const Headline = styled.h1`
  font-size: 3rem;
  margin: 0;

  .accent {
    color: #e94e1b;
  }

  @media screen and (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Text = styled.p`
  font-size: 1.5rem;
  max-width: 600px;
  margin: 0.5rem 0;
`;

export default IndexPage;
