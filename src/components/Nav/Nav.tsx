import * as React from 'react';
import Link, { GatsbyLinkProps } from 'gatsby-link';
import { Row, Block, Column } from 'glamor/jsxstyle';
import { theme } from '../../theme';
import { NavLink } from './NavLink';
import posed from 'react-pose';
import { tween } from 'popmotion';
import { NavHamburger } from './NavHamburger';
import { NavMobile } from './NavMobile';
import { Toggle } from '../Toggle';
const Media = require('react-media');
import { LINKS } from '../../constants';

export interface NavbarProps {
  theme: 'normal' | 'inverse' | 'transparent';
  showName: boolean;
}

export interface NavbarState {
  isOpen: boolean;
}

export class Nav extends React.Component<NavbarProps, NavbarState> {
  state = {
    isOpen: false,
  };

  componentDidMount() {
    // We need to handle the case when user opens Sidebar on mobile (ie. this.state.isOpen: true)
    // and then resizes the window before closing the sidebar. In this situation, we need to force
    // the Sidebar closed. This is not possible without JS. Luckily, `react-media` puts `matchMedia`
    // on the window.
    // As for #perf, matchMedia is more performant than listening to the resize event.
    // @see https://stackoverflow.com/questions/37086372/how-does-addlistener-work-with-matchmedia-api
    (window as any)
      .matchMedia(theme.media.medium.replace('@media ', '')) // 800px
      .addListener(this.forceCloseSidebar);
  }

  componentWillUnmount() {
    // Clean up our listener. Reaslistically this never gets called because Navigator
    // never unmounts. However, its good practice to clean things up anyways
    (window as any)
      .matchMedia(theme.media.medium.replace('@media ', '')) // 800px
      .removeListener(this.forceCloseSidebar);
  }

  toggleNav = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  forceCloseSidebar = () => {
    this.setState({ isOpen: false });
  };

  render() {
    return (
      <>
        <Toggle on={this.state.isOpen} onToggle={this.toggleNav}>
          {({ on, toggle, getElementTogglerProps }) => (
            <>
              <NavHamburger
                isOpen={on}
                toggle={toggle}
                color={
                  this.props.theme !== 'normal'
                    ? theme.color.white
                    : theme.color.black
                }
                {...getElementTogglerProps()}
              />
              <NavMobile isOpen={on} items={LINKS} />
            </>
          )}
        </Toggle>
        <Block
          position="absolute"
          top="0"
          right="0"
          left="0"
          zIndex="1000"
          height={50}
          width="100%"
          padding="0 1rem"
          css={{
            [theme.media.medium]: {
              height: 80,
            },
          }}
          maxWidth={1000}
          margin="0 auto"
        >
          <Row
            height={50}
            css={{
              [theme.media.medium]: {
                height: 80,
                justifyContent: 'space-between',
              },
            }}
            justifyContent={'center'}
            alignItems="center"
          >
            <Block
              component={Link}
              fontWeight={700}
              textDecoration="none"
              textTransform="uppercase"
              color={
                this.props.theme === 'normal'
                  ? theme.color.black
                  : theme.color.white
              }
              css={{
                display: this.props.showName ? 'block' : 'none',
              }}
              fontSize={20}
              letterSpacing="1px"
              to="/"
            >
              Jared Palmer
            </Block>
            <Row
              component="nav"
              props={{ role: 'navigation', 'aria-label': 'Main Navigation' }}
              flex="1"
              display="none"
              maxWidth={this.props.showName ? 500 : undefined}
              alignItems="center"
              justifyContent="flex-end"
              css={{
                [theme.media.medium]: {
                  display: 'flex',
                  alignItems: 'flex-end',
                },
              }}
            >
              {LINKS.map(l => (
                <NavLink key={l.to} to={l.to} text={l.text} marginLeft="1rem" />
              ))}
            </Row>
          </Row>
        </Block>
      </>
    );
  }
}
