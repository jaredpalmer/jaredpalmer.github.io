import '../reset.css';
import * as React from 'react';
import { Block, Row, InlineBlock, Column } from 'glamor/jsxstyle';
import { Link } from 'react-router-dom';
import { Social } from '../components/Social';
import { theme } from '../theme';
import { FeaturedProject } from '../components/FeaturedProject';
import { Repo, RepoProps } from '../components/Repo';
import { Nav } from '../components/Nav/Nav';
import { Layout } from '../components/Layout';
import { Wrapper } from '../components/Wrapper';

export interface BlogProps {
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

export default class Blog extends React.Component<BlogProps> {
  render() {
    return (
      <Layout
        title="Blogs &amp; Workshops"
        description="A blog about JavaScript, React, Node, UI, UX, and everything else design &amp; development."
      >
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
              component="h1"
              color={theme.color.dark}
              fontWeight={800}
              fontSize="2.75rem"
              letterSpacing="-.03em"
              marginBottom="3rem"
              flex="1"
              css={{
                [theme.media.medium]: {
                  marginRight: '.5rem',
                },
              }}
            >
              Blog
            </Block>
            <Block
              color={theme.color.dark}
              letterSpacing="-.01em"
              lineHeight="1.3"
              paddingTop=".1rem"
              flex="3"
              position="relative"
              background={theme.color.white}
            >
              {this.props.data &&
                this.props.data.allMarkdownRemark.edges.length > 0 &&
                this.props.data.allMarkdownRemark.edges.map(
                  ({ node }, i: number) => (
                    <Block
                      component="article"
                      key={`${node.frontmatter.path}-${i}`}
                      marginBottom="3rem"
                      background={theme.color.white}
                    >
                      <h3>
                        <Block
                          component={Link}
                          fontWeight={theme.bold}
                          marginBottom="1rem"
                          fontSize="2rem"
                          props={{ to: node.frontmatter.path }}
                        >
                          {node.frontmatter.title}
                        </Block>
                      </h3>
                      <Block
                        color={theme.color.gray}
                        fontSize="1.25rem"
                        props={{ to: node.frontmatter.path }}
                      >
                        {node.frontmatter.description}
                      </Block>
                    </Block>
                  )
                )}
            </Block>
          </Column>
        </Wrapper>
      </Layout>
    );
  }
}

export const BlogQuery = graphql`
  query BlogPosts {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: 1000
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            description
            date
          }
          headings {
            depth
            value
          }
        }
      }
    }
  }
`;
