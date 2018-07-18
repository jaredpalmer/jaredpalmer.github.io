import * as React from 'react';
import { theme } from '../../theme';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { NavLink } from './NavLink';
import { Block } from 'glamor/jsxstyle';

export interface NavMobileProps {
  isOpen: boolean;
  items: { to: string; text: string }[];
}

const NavMobilePoser = posed.div({
  open: {
    y: '-20px',
    opacity: 1,
    staggerChildren: 40,
    transition: (props: any) => tween({ ...props, duration: 300 }),
  },
  closed: {
    y: '-50px',
    opacity: 0,
    delay: 100,
    staggerChildren: 15,
    transition: (props: any) => tween({ ...props, duration: 500 }),
  },
  initialPose: 'closed',
});

const NavLinkPoser = posed(NavLink as any)({
  open: { delay: 50, opacity: 1, y: 0 },
  closed: { opacity: 0, y: '-20px' },
});

export const NavMobile: React.SFC<NavMobileProps> = ({ items, isOpen }) => {
  return (
    <Block
      component={NavMobilePoser}
      pose={isOpen ? 'open' : 'closed'}
      pointerEvents={isOpen ? 'auto' : 'none'}
      backgroundColor="#000"
      paddingTop="4.45rem"
      paddingBottom="2rem"
      paddingLeft="3rem"
      paddingRight="3rem"
      css={{
        [theme.media.medium]: {
          display: 'none',
        },
      }}
      position="absolute"
      top="0"
      left="0"
      right="0"
      zIndex="999"
      boxShadow="0 2px 4px rgba(0,0,0,.2)"
    >
      {items.map((item, i) => (
        <NavLinkPoser
          padding="1rem 0"
          color="#eee"
          fontSize="1rem"
          borderTop={i !== 0 && `1px solid ${theme.color.grayDarker}`}
          key={item.to}
          to={item.to}
          text={item.text}
        />
      ))}
    </Block>
  );
};

(NavMobile as any).displayName = 'NavMobile';
