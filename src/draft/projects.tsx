import '../reset.css';
import * as React from 'react';
import { Block, Row, Column } from 'glamor/jsxstyle';

import { theme } from '../theme';
import { FeaturedProject } from '../components/FeaturedProject';
import { Repo, RepoProps } from '../components/Repo';
import { Layout } from '../components/Layout';
import { NpmApi } from '../api/NpmAPI';
import { GitHubApi } from '../api/GitHubApi';

export interface ProjectsState {
  downloads?: { [name: string]: number };
  repos?: RepoProps[];
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

function getStarsForRepoAtIndex(index: number, repos?: RepoProps[]) {
  return repos && repos.length > index && repos[index] && repos[index].stars;
}

export default class Projects extends React.Component<{}, ProjectsState> {
  state: ProjectsState = {};
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
          {} as ProjectsState['downloads']
        ),
      })
    );
  }
  render() {
    return (
      <Layout title="Projects" description="Portfolio &amp; Work">
        <Wrapper paddingTop="10rem">
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
              fontWeight={800}
              fontSize="3rem"
              letterSpacing="-.03em"
              flex="1"
              css={{
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
              paddingTop=".1rem"
              flex="3"
            >
              I am passionate about <strong>open source software</strong>. My
              libraries and tools are used in production by thousands of
              developers including teams at Walmart, Airbnb, Lyft, Sony,
              OpenTable, BBC, and Coinbase.
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
              stars={getStarsForRepoAtIndex(0, this.state.repos)}
              description="Build forms in React, without tears"
              gradient="linear-gradient(-134deg, #fcb045, #fd1d1d)"
              url="https://github.com/jaredpalmer/formik"
            />
            <FeaturedProject
              key="Razzle"
              title="Razzle"
              cardColor="#EEF7FC"
              stars={getStarsForRepoAtIndex(1, this.state.repos)}
              description="Create universal JavaScript applications with no configuration"
              gradient="linear-gradient(-134deg, #7DE2FF  0%, #489AFF 100%)"
              url="https://github.com/jaredpalmer/formik"
            />
            <FeaturedProject
              key="react-fns"
              title="React-Fns"
              cardColor="#F5F0FE"
              stars={getStarsForRepoAtIndex(2, this.state.repos)}
              description="Web APIs turned in React components"
              gradient="linear-gradient(-134deg, #3023AE 0%, #C86DD7 100%)"
              url="https://github.com/jaredpalmer/formik"
            />
            <FeaturedProject
              key="Backpack"
              title="Backpack"
              cardColor="#F7EDEE"
              stars={getStarsForRepoAtIndex(3, this.state.repos)}
              description="Minimalistic build system for Node.js projects"
              gradient="linear-gradient(-134deg, #F5515F 0%, #D4384F 100%)"
              url="https://github.com/jaredpalmer/formik"
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
              this.state.repos.slice(4).map(r => <Repo key={r.name} {...r} />)}
          </Block>
        </Wrapper>
      </Layout>
    );
  }
}
