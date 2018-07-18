import * as React from 'react';
import { theme } from '../theme';
import { Row, Block } from 'glamor/jsxstyle';
import { NavLink } from './Nav/NavLink';
import { Social } from './Social';
import { LINKS } from '../constants';

export interface FooterProps {}

export const Footer: React.SFC<FooterProps> = props => {
  return (
    <Block
      component="footer"
      props={{ role: 'contentinfo', 'aria-label': 'Footer', id: 'footer' }}
      background={theme.color.offWhiteLightest}
      padding="4rem 2rem"
      textAlign="center"
    >
      <Row
        margin="0 auto 2rem"
        maxWidth={300}
        alignItems="center"
        justifyContent="space-between"
      >
        <NavLink
          key={`footer-projects`}
          to="/"
          text="Projects"
          marginRight="1rem"
        />
        {LINKS.map(item => <NavLink key={`footer-${item.text}`} {...item} />)}
      </Row>
      <Block marginBottom="2rem">
        <Social />
      </Block>
      <Block fontSize=".8rem" color={theme.color.grayLighter}>
        Copyright © 2018 Jared Palmer.
      </Block>
    </Block>
  );
};

(Footer as any).displayName = 'Footer';
