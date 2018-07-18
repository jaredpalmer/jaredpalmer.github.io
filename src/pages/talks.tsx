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
import { TALKS } from '../constants';

export default class Talks extends React.Component<void> {
  render() {
    return (
      <Layout
        title="Talks &amp; Workshops"
        description="Engineering &amp; Design Talks, Workshops, &amp; Lectures"
      >
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
              Talks
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
              <Block
                key={`cta`}
                marginBottom="3rem"
                background={theme.color.white}
              >
                <Block
                  component="div"
                  color={theme.color.gray}
                  marginBottom=".5rem"
                  fontSize="1rem"
                >
                  xxx 2018
                </Block>
                <Block
                  fontWeight={theme.bold}
                  marginBottom="1rem"
                  fontSize="1.5rem"
                >
                  <InlineBlock
                    fontStyle="italic"
                    component="span"
                    color={theme.color.gray}
                  >
                    My talk @ Your Conference/Company{' '}
                  </InlineBlock>
                  <InlineBlock
                    display
                    component={Link}
                    fontWeight={theme.bold}
                    css={{
                      '&:hover': {
                        textDecoration: 'underline',
                      },
                    }}
                    marginLeft=".25rem"
                    textDecoration="underline"
                    color={theme.color.black}
                    fontStyle="italic"
                    props={{ to: '/contact' }}
                  >
                    ...Contact Me
                  </InlineBlock>
                </Block>

                {/* <Block

                        color={theme.color.gray}
                        fontSize="1.25rem"
                        props={{ to: node.frontmatter.path }}
                      >
                        {node.frontmatter.description}
                      </Block> */}
              </Block>
              {TALKS.map((talk, i: number) => (
                <Block
                  key={`${talk.title}-${i}`}
                  marginBottom="3rem"
                  background={theme.color.white}
                >
                  <Block
                    component="time"
                    color={theme.color.gray}
                    marginBottom=".5rem"
                    fontSize="1rem"
                    props={{ datetime: new Date(talk.date).toISOString() }}
                  >
                    {talk.date}
                  </Block>
                  <h3>
                    <Block
                      component="a"
                      fontWeight={theme.bold}
                      marginBottom="1rem"
                      fontSize="1.5rem"
                      css={{
                        '&:hover': {
                          textDecoration: 'underline',
                        },
                      }}
                      props={{ href: talk.href }}
                    >
                      {talk.title}
                    </Block>
                  </h3>

                  {/* <Block

                        color={theme.color.gray}
                        fontSize="1.25rem"
                        props={{ to: node.frontmatter.path }}
                      >
                        {node.frontmatter.description}
                      </Block> */}
                </Block>
              ))}
            </Block>
          </Column>
        </Wrapper>
      </Layout>
    );
  }
}

export const talksQuery = graphql`
  query TalkPosts {
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
