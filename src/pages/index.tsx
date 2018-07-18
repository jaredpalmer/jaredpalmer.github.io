import '../reset.css';
import * as React from 'react';
import { Block, Row, InlineBlock, Column } from 'glamor/jsxstyle';
import { Link } from 'react-router-dom';
import { Social } from '../components/Social';
import { theme } from '../theme';
import { FeaturedProject } from '../components/FeaturedProject';
import { Repo, RepoProps } from '../components/Repo';
import { Nav } from '../components/Nav/Nav';
import { GitHubApi } from '../api/GitHubApi';
import { NpmApi } from '../api/NpmAPI';
import { Footer } from '../components/Footer';

export interface IndexProps {
  data: {
    allMarkdownRemark: {
      edges: {
        node: {
          frontmatter: {
            title: string;
            date?: string;
            description?: string;
            path: string;
          };
        };
      }[];
    };
  };
}

export interface IndexState {
  repos?: RepoProps[];
  downloads?: { [pkg: string]: number };
}

const Wrapper: React.SFC<any> = props => (
  <Block
    maxWidth={1000}
    margin="0 auto"
    paddingLeft="1rem"
    paddingRight="1rem"
    {...props}
  />
);

const SOFTWARE = [
  {
    title: 'Formik',
    subtitle: 'Build forms in React.js, without tears',
  },
  {
    title: 'Razzle',
    subtitle:
      'Create universal server-rendered React applications with no configuration',
  },
  {
    title: 'After.js',
    subtitle: 'Next.js-like framework built with React Router 4',
  },
  {
    title: 'Backpack',
    subtitle: 'Minimalistic build system for Node.js projects',
  },
  {
    title: 'React Fns',
    subtitle: 'Web APIs turned into declarative React Components',
  },
];

const TALKS = [
  {
    title: 'Taming Forms in React @ React Alicante',
    date: 'September 2018',
  },
  {
    title: 'Server Rendered JavaScript @ BuzzJS',
    date: 'June 2018',
  },

  {
    title: 'Server Rendering Without the Framework @ StashInvest',
    date: 'November 2017',
  },
  {
    title: 'An Introduction to Formik @ Spotify',
    date: 'August 2017',
  },
  {
    title: 'From Styled Components to JSXStyle @ Interbrand',
    date: 'July 2017',
  },
  {
    title: 'The Road to ReasonML @ ReasonNYC',
    date: 'June 2017',
  },
];

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

function getStarsForRepoAtIndex(index: number, repos?: RepoProps[]) {
  return repos && repos.length > index && repos[index] && repos[index].stars;
}

export default class Index extends React.Component<IndexProps, IndexState> {
  state: IndexState = {};

  componentDidMount() {
    // Load repos
    GitHubApi.getRepos().then(repos =>
      this.setState(state => ({
        repos: repos.filter((r: any) => r.stars > 5),
      }))
    );
    // Get download counts
    Promise.all(
      ['formik', 'razzle', 'react-fns', 'backpack-core'].map(name =>
        NpmApi.getTotalPackageDownloads(name)
      )
    ).then(downloadStats =>
      this.setState({
        downloads: downloadStats.reduce(
          (prev, curr) => {
            prev[curr.package] = curr.downloads;
            return prev;
          },
          {} as IndexState['downloads']
        ),
      })
    );
  }
  render() {
    return (
      <>
        <Nav theme="normal" showName={false} />
        <Block
          background={theme.color.white}
          height="100%"
          role="main"
          component="main"
        >
          <Block
            position="relative"
            width="100%"
            height={300}
            css={{
              [theme.media.small]: {
                height: 400,
                maxWidth: 600,
              },
              [theme.media.medium]: {
                maxWidth: 700,
                height: 500,
              },
              [theme.media.large]: {
                maxWidth: 800,
                height: 500,
              },
            }}
            margin="0 auto"
            paddingTop="2rem"
          >
            <Block
              component="svg"
              width="160px"
              height="141px"
              props={{ viewBox: '0 0 320 282' }}
              css={{
                width: 160,
                height: 141,
                position: 'absolute',
                opacity: 0.3,
                right: '2rem',
                transform: 'rotate(90deg)',
                bottom: '1rem',
                zIndex: 200,
                [theme.media.small]: {
                  height: 192,
                  width: 168,
                  bottom: '3rem',
                  left: '5rem',
                  transform: 'rotate(0deg)',
                },
                [theme.media.medium]: {
                  height: 320,
                  width: 282,
                  bottom: 0,
                  left: '1rem',
                },
              }}
            >
              <g
                id="Page-1"
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
                strokeLinecap="square"
                strokeOpacity="0.42651721"
              >
                <g
                  id="jaredpalmer.com"
                  transform="translate(-112.000000, -261.000000)"
                  stroke="#1B2125"
                >
                  <path
                    d="M112.5,261.5 L359.012677,508.012677"
                    id="Line-Copy"
                  />
                  <path
                    d="M184.5,295.5 L431.012677,542.012677"
                    id="Line-Copy-2"
                  />
                </g>
              </g>
            </Block>
            <Block
              zIndex="100"
              position="relative"
              height={200}
              width={200}
              css={{
                [theme.media.small]: {
                  width: 300,
                  height: 300,
                  margin: '2rem auto',
                },
                [theme.media.medium]: { width: 500, height: 500 },
              }}
              margin="0 auto"
              borderRadius="50%"
              background="#fff"
              // boxShadow="-4px -4px 15px rgba(255,255,255,.1)"
            >
              <Block
                width="100%"
                height="100%"
                marginTop="2rem"
                marginLeft="2rem"
                borderRadius="50%"
                css={{
                  backgroundImage:
                    'linear-gradient(-146deg, #52F8D3 10%, rgba(255,255,255,0.00) 65%)',
                  [theme.media.small]: {
                    margin: '0 auto',
                    backgroundImage:
                      'linear-gradient(146deg, #52F8D3 10%, rgba(255,255,255,0.00) 65%)',
                  },
                  [theme.media.medium]: {
                    margin: '0 auto',
                    backgroundImage:
                      'linear-gradient(146deg, #52F8D3 10%, rgba(255,255,255,0.00) 65%)',
                  },
                }}
              />
            </Block>
            <Block
              zIndex="200"
              position="absolute"
              bottom="0"
              left="1rem"
              css={{
                [theme.media.small]: {
                  bottom: '10%',
                  right: '5%',
                  left: 'auto',
                },
                [theme.media.medium]: { bottom: '10%', right: 0 },
                [theme.media.large]: { bottom: '10%', right: 0 },
              }}
            >
              <Block
                component="h1"
                fontWeight={theme.bold}
                fontSize="3rem"
                color={theme.color.dark}
                marginBottom=".75rem"
                letterSpacing="-0.04em"
                lineHeight="1"
                css={{
                  [theme.media.small]: {
                    fontSize: '3.5rem',
                    marginBottom: '.5rem',
                  },
                  [theme.media.medium]: { fontSize: '4rem' },
                  [theme.media.large]: { fontSize: '4.5rem' },
                }}
              >
                Jared Palmer
              </Block>
              <Block
                fontSize="1.5rem"
                color="#333"
                marginBottom="1rem"
                letterSpacing="-0.04em"
                maxWidth={500}
                lineHeight="1.3"
              >
                Engineer, Speaker & Advisor
              </Block>

              <Social />
            </Block>
          </Block>
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

          <Wrapper paddingTop="10rem" paddingBottom="5rem">
            <Column
              css={{
                [theme.media.medium]: {
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                },
              }}
            >
              <Block
                component="h2"
                color={theme.color.dark}
                fontWeight={theme.bold}
                fontSize="2.25rem"
                position="relative"
                background={theme.color.white}
                letterSpacing="-.03em"
                flex="1"
                css={{
                  marginBottom: '1rem',

                  [theme.media.small]: {
                    fontSize: '2.75rem',
                  },
                  [theme.media.medium]: {
                    marginRight: '.5rem',
                  },
                }}
              >
                Projects
              </Block>
              <Block
                color={theme.color.dark}
                fontSize="1.5rem"
                letterSpacing="-.01em"
                lineHeight="1.3"
                position="relative"
                background={theme.color.white}
                paddingTop=".1rem"
                flex="3"
                css={{
                  fontSize: '1.3rem',
                  marginBottom: '1rem',
                  [theme.media.small]: {
                    fontSize: '1.5rem',
                  },
                  [theme.media.medium]: {
                    marginRight: '.5rem',
                    marginBottom: 'autos',
                  },
                }}
              >
                I am passionate about making{' '}
                <strong>open source software</strong>. My libraries and tools
                are used in production by thousands of developers including
                teams at Walmart, Airbnb, Lyft, Sony, OpenTable, BBC, Coinbase,
                and Docker.
              </Block>
            </Column>
            <Row
              margin="4rem 0"
              alignItems="center"
              justifyContent="space-between"
              position="relative"
              flexWrap="wrap"
            >
              <FeaturedProject
                key="Formik"
                title="Formik"
                cardColor="#F5F0E3"
                downloads={
                  this.state.downloads && this.state.downloads['formik']
                }
                stars={getStarsForRepoAtIndex(0, this.state.repos)}
                description="Build forms in React, without tears"
                gradient="linear-gradient(-134deg, #fcb045, #fd1d1d)"
                url="https://github.com/jaredpalmer/formik"
              />
              <FeaturedProject
                key="Razzle"
                title="Razzle"
                cardColor="#EEF7FC"
                downloads={
                  this.state.downloads && this.state.downloads['razzle']
                }
                stars={getStarsForRepoAtIndex(1, this.state.repos)}
                description="Create universal JavaScript applications with no configuration"
                gradient="linear-gradient(-134deg, #7DE2FF  0%, #489AFF 100%)"
                url="https://github.com/jaredpalmer/razzle"
              />
              <FeaturedProject
                key="react-fns"
                title="React-Fns"
                cardColor="#F5F0FE"
                stars={getStarsForRepoAtIndex(2, this.state.repos)}
                downloads={
                  this.state.downloads && this.state.downloads['react-fns']
                }
                description="Web APIs turned in React components"
                gradient="linear-gradient(-134deg, #3023AE 0%, #C86DD7 100%)"
                url="https://github.com/jaredpalmer/react-fns"
              />
              <FeaturedProject
                key="Backpack"
                title="Backpack"
                cardColor="#F7EDEE"
                stars={getStarsForRepoAtIndex(3, this.state.repos)}
                downloads={
                  this.state.downloads && this.state.downloads['backpack-core']
                }
                description="Minimalistic build system for Node.js projects"
                gradient="linear-gradient(-134deg, #F5515F 0%, #D4384F 100%)"
                url="https://github.com/jaredpalmer/backpack"
              />
            </Row>
            <Block
              css={{
                [theme.media.medium]: {
                  display: 'flex',
                  flexDirection: 'row',
                  flexWrap: 'wrap',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                },
              }}
            >
              {this.state.repos &&
                this.state.repos.length > 4 &&
                this.state.repos
                  .slice(4)
                  .map(r => <Repo key={r.name} {...r} />)}
            </Block>
          </Wrapper>
          {this.state.repos && this.state.repos.length > 0 && <Footer />}
        </Block>
      </>
    );
  }
}
