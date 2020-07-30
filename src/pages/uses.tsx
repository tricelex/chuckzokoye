import React from 'react';
import styled from 'styled-components';

import SEO from 'Molecules/Seo';
import Container from 'Atoms/Container';

interface IProps {
  href: string;
  children: React.ReactNode;
}

const Link = ({ href, children }: IProps) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    {children}
  </a>
);

const Uses = () => (
  <>
    <SEO title="Uses" />
    <Container>
      <Title>Chuckz Uses</Title>
      <p>
        Welcome to my &quot;Uses&quot; page, that lists some of the hardware and
        software I use on a daily basis.
      </p>

      <h2>Hardware</h2>
      <List>
        <li>
          <strong>
            <Link href="#">HP Pavillion 15.6"</Link>
          </strong>{' '}
          (2.4 GHz i5 CPU, * GB Ram, 512GB SSD storage)
        </li>
        <li>
          <strong>
            <Link href="#">Acer Desktop Monitor</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="#">Apple Ipad2</Link>
          </strong>
        </li>
        <li>
          <strong>
            <Link href="#">Xiaomi Mi A3</Link>
          </strong>
        </li>
      </List>

      <h2>Development Tools</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.jetbrains.com/pycharm">
              PyCharm Professional
            </Link>
          </strong>{' '}
        </li>
        <li>
          <strong>
            <Link href="https://www.jetbrains.com/webstorm/">
              Webstorm Professional
            </Link>
          </strong>{' '}
        </li>
      </List>

      <h2>Design Tools</h2>
      <List>
        <li>
          <strong>
            <Link href="#">Adobe Photoshop CS6</Link>
          </strong>
        </li>
      </List>

      <h2>Productivity</h2>
      <List>
        <li>
          <strong>
            <Link href="https://slack.com/">Slack</Link>
          </strong>{' '}
          for communication
        </li>
      </List>

      <h2>Various other software</h2>
      <List>
        <li>
          <strong>
            <Link href="https://www.google.com/chrome/canary/">
              Google Chrome
            </Link>
          </strong>{' '}
          (Canary) for development
        </li>
      </List>
    </Container>
  </>
);

export default Uses;

const Title = styled.h1`
  font-size: 3rem;
  margin: 0;

  @media print {
    font-size: 22pt;
  }
`;

const List = styled.ul`
  padding: 0 1rem;
  margin: 0;
  list-style: square;

  &:last-of-type {
    margin-bottom: 3rem;
  }
`;
