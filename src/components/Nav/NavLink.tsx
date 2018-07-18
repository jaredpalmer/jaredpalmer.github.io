import * as React from 'react';
import Link from 'gatsby-link';
import { Row, Block, Column } from 'glamor/jsxstyle';
import { theme } from '../../theme';

export const NavLink: React.SFC<any> = ({ text, hostRef, ...props }) => {
  return (
    <Block
      component={Link}
      props={{ ref: hostRef }}
      textDecoration="none"
      fontWeight="500"
      color={theme.color.grayLighter}
      textTransform="uppercase"
      fontSize=".9rem"
      {...props}
    >
      {text}
    </Block>
  );
};

NavLink.displayName = 'NavLink';
