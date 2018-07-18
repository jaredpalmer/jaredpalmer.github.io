import '../reset.css';
import * as React from 'react';
import { css } from 'glamor';
import { Nav, NavbarProps } from './Nav/Nav';
import { Block, Row } from 'glamor/jsxstyle';
import { theme } from '../theme';
import { Footer } from './Footer';
import { Head } from './Head';
export interface LayoutProps {
  children?: any;
  showName?: NavbarProps['showName'];
  title: string;
  description: string;
  image?: string;
  theme?: 'normal' | 'inverse' | 'transparent';
}

var dots = 50;

function getRandomInt(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomItem(items: string[]) {
  return items[Math.floor(Math.random() * items.length)];
}

function getRandomFloat(min: number, max: number) {
  return (Math.random() * (min - max) + min).toFixed(1);
}

const dotData: {
  x: number;
  y: number;
  size: string;
  opacity: string;
  color: string;
}[] = [];

function makeDots() {
  const colors = ['#D441D0', '#80B9FE', '#F5A623', '#7ED321', '#F8E71C'];
  for (let i = 0; i < dots; i++) {
    const x = getRandomInt(0, 100);
    const y = getRandomInt(0, 100);
    const size = getRandomFloat(0.4, 1.25);
    const opacity = getRandomFloat(0.9, 1);
    dotData.push({ x, y, size, opacity, color: getRandomItem(colors) });
  }
}

makeDots();

export class Layout extends React.Component<LayoutProps> {
  render() {
    return (
      <>
        <Head
          title={this.props.title}
          description={this.props.description}
          image={this.props.image}
        />
        <Nav
          theme={this.props.theme || 'normal'}
          showName={this.props.showName || true}
        />

        {dotData.map((dot, i) => (
          <div
            key={`top-dot-${dot.y}-${dot.x}-${i}`}
            style={{
              position: 'absolute',
              left: dot.x + '%',
              top: dot.y + '%',
              height: dot.size + 'rem',
              width: dot.size + 'rem',
              opacity: dot.opacity as any,
              borderRadius: '50%',
              zIndex: 0,
              backgroundColor: dot.color,
            }}
          />
        ))}

        {dotData.map((dot, i) => (
          <div
            key={`bottom-dot-${dot.y}-${dot.x}-${i}`}
            style={{
              position: 'absolute',
              right: dot.x + '%',
              bottom: dot.y + '%',
              height: dot.size + 'rem',
              width: dot.size + 'rem',
              opacity: dot.opacity as any,
              borderRadius: '50%',
              zIndex: 0,
              backgroundColor: dot.color,
            }}
          />
        ))}
        <Block
          background="#fff"
          props={{ role: 'main', id: 'maincontent' }}
          component="main"
        >
          {this.props.children}
        </Block>
        <Footer />
      </>
    );
  }
}

(Layout as any).displayName = 'Layout';
