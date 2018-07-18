import * as React from 'react';
import { Block } from 'glamor/jsxstyle';
import { theme } from '../../theme';

export interface NavHamburgerProps {
  isOpen: boolean;
  toggle: () => void;
  color?: string;
}

export const NavHamburger: React.SFC<NavHamburgerProps> = ({
  isOpen,
  toggle,
  color = theme.color.black,
  ...props
}) => {
  return (
    <Block
      position="absolute"
      css={{
        [theme.media.medium]: {
          display: 'none',
        },
      }}
      height={50}
      top="0"
      left="0"
      display="flex"
      alignItems="center"
      justifyContent="center"
      padding="0 1rem"
      zIndex="99999"
      cursor="pointer"
      props={{ role: 'button', ...props }}
    >
      {isOpen ? (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          strokeWidth="2"
          style={{ verticalAlign: 'middle' }}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g className="nc-icon-wrapper">
            <path d="M18 6L6 18" />
            <path d="M6 6l12 12" />
          </g>
        </svg>
      ) : (
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke={color}
          style={{ verticalAlign: 'middle' }}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <g className="nc-icon-wrapper">
            <path d="M3 12h18" />
            <path d="M3 6h18" />
            <path d="M3 18h18" />
          </g>
        </svg>
      )}
    </Block>
  );
};

(NavHamburger as any).displayName = 'Hamburger';
