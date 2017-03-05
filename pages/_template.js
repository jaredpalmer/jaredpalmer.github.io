import React from 'react';
import { Link } from 'react-router';
import { prefixLink } from 'gatsby-helpers';
import { rhythm, scale } from 'utils/typography';
import { config } from 'config';

class Template extends React.Component {
  render() {
    const { location, children } = this.props;
    let header;
    if (location.pathname === prefixLink('/')) {
      header = (
        <h1
          style={{
            padding: 0,
            marginBottom: 0,
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              color: '#28a0e5',
              fontWeight: 'normal',
              fontSize: rhythm(0.53),
              textTransform: 'lowercase',
              letterSpacing: rhythm(-0.02),
              fontFamily: "'SF Mono', 'Menlo', monospace"
            }}
            to="/"
          >
            @jaredpalmer
          </Link>
          <div>
            <a
              style={{ marginRight: '1rem' }}
              href="https://facebook.com/jaredpalmer"
              target="_blank"
            >
              <svg
                className="svg-1 svg-fb"
                viewBox="0 0 38 38"
                aria-hidden="true"
              >
                <title>Facebook</title>
                <path
                  d="M36.5 0h-35C.3 0 0 .3 0 1.5v34.9C0 37.7.3 38 1.5 38h18.9V23.4h-5.8v-5.8h5.8v-4.4c0-5.1 2.8-7.8 7.4-7.8 2.2 0 4.3.2 4.3.2v4.7h-2.8c-2.5 0-3.1 1.8-3.1 3.5v3.8h6l-.8 5.8h-5.3V38h10.2c1.2 0 1.5-.3 1.5-1.5v-35C38 .3 37.7 0 36.5 0z"
                />
              </svg>
            </a>
            <a
              style={{ marginRight: '1rem' }}
              href="https://twitter.com/jaredpalmer"
            >
              <svg
                className="svg-1 svg-twitter"
                viewBox="0 0 38 38"
                aria-hidden="true"
              >
                <title>Twitter</title>
                <path
                  d="M37.9 8c-1.4.6-2.9 1-4.4 1.2 1.6-1 2.8-2.5 3.4-4.3-1.5.9-3.1 1.5-4.9 1.9-1.4-1.5-3.4-2.4-5.6-2.4-4.3 0-7.7 3.5-7.7 7.7 0 .6.1 1.2.2 1.8-6.4-.3-12.1-3.4-15.9-8.1-.7 1.1-1 2.5-1 3.9 0 2.7 1.2 5 3.2 6.4-1.3 0-2.3-.4-3.7-1v.1c0 3.7 2.9 6.9 6.4 7.6-.9.2-1.4.3-2.1.3-.5 0-.9 0-1.4-.1 1 3.1 3.9 5.3 7.2 5.4-2.6 2.1-6 3.3-9.6 3.3-.6 0-1.2 0-1.8-.1C3.6 33.7 7.7 35 12 35c14.2 0 22-11.8 22-22v-1c1.5-1.1 2.8-2.5 3.9-4"
                />
              </svg>
            </a>
            <a href="https://github.com/jaredpalmer">
              <svg
                className="svg-1"
                viewBox="0 0 33 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g
                  id="Page-1"
                  stroke="none"
                  strokeWidth="1"
                  fill="none"
                  fillRule="evenodd"
                >
                  <g id="github" fill="#000">
                    <path
                      d="M16.3,0 C7.3,0 -3.55271368e-15,7.3 -3.55271368e-15,16.3 C-3.55271368e-15,23.5 4.7,29.6 11.1,31.8 C11.9,31.9 12.2,31.4 12.2,31 L12.2,28.2 C7.7,29.2 6.7,26 6.7,26 C6,24.2 5,23.7 5,23.7 C3.5,22.7 5.1,22.7 5.1,22.7 C6.7,22.8 7.6,24.4 7.6,24.4 C9.1,26.9 11.4,26.2 12.3,25.8 C12.4,24.7 12.9,24 13.3,23.6 C9.7,23.2 5.9,21.8 5.9,15.5 C5.9,13.7 6.5,12.3 7.6,11.1 C7.4,10.7 6.9,9 7.8,6.8 C7.8,6.8 9.2,6.4 12.3,8.5 C13.6,8.1 15,8 16.4,8 C17.8,8 19.2,8.2 20.5,8.5 C23.6,6.4 25,6.8 25,6.8 C25.9,9 25.3,10.7 25.2,11.1 C26.2,12.2 26.9,13.7 26.9,15.5 C26.9,21.8 23.1,23.1 19.5,23.5 C20.1,24 20.6,25 20.6,26.5 L20.6,31 C20.6,31.4 20.9,31.9 21.7,31.8 C28.2,29.6 32.8,23.5 32.8,16.3 C32.6,7.3 25.3,0 16.3,0 L16.3,0 Z"
                      id="Shape"
                    />
                  </g>
                </g>
              </svg>
            </a>
          </div>
        </h1>
      );
    } else {
      header = (
        <h3
          style={{
            marginTop: 0
          }}
        >
          <Link
            style={{
              boxShadow: 'none',
              textDecoration: 'none',
              color: '#28a0e5',
              fontWeight: 'normal',
              fontSize: rhythm(0.5),
              textTransform: 'lowercase',
              letterSpacing: rhythm(-0.02),
              fontFamily: "'SF Mono', 'Menlo', monospace"
            }}
            to="/"
          >
            @jaredpalmer
          </Link>
        </h3>
      );
    }
    return (
      <div>
        <div
          style={{
            padding: `${rhythm(0.75)} ${rhythm(0.75)} ${0}`
          }}
        >
          {header}
        </div>

        {children}

      </div>
    );
  }
}

Template.propTypes = {
  children: React.PropTypes.any,
  location: React.PropTypes.object,
  route: React.PropTypes.object
};

export default Template;
