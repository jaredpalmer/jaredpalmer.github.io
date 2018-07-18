import * as React from 'react';

import { Nav } from './components/Nav/Nav';
import { css, media } from 'glamor';
import { Block, Row, Column, InlineBlock } from 'glamor/jsxstyle';
import Link from 'gatsby-link';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { Author } from './components/Author';
import * as qs from 'qs';
import * as format from 'date-fns/format';

css.global(`.text-content pre`, {
  overflowX: 'scroll',
  fontSize: 13,
  padding: '.5rem',
});

interface BlogPostTemplateProps {
  data: {
    site: {
      siteMetadata: {
        siteName: string;
      };
    };
    markdownRemark: {
      id: string;
      html: string;
      frontmatter: {
        title: string;
        description: string;
        image: string;
        date: string;
        path: string;
      };
    };
  };
}

export default class BlogPostTemplate extends React.Component<
  BlogPostTemplateProps,
  {}
> {
  render() {
    const post = this.props.data.markdownRemark;

    return (
      <Layout
        title={post.frontmatter.title}
        description={post.frontmatter.description}
        image={post.frontmatter.image}
        theme="normal"
      >
        <article>
          <header>
            <Block
              component="h1"
              maxWidth={700}
              fontSize={theme.rhythm(1.5)}
              letterSpacing="-0.03em"
              margin="0 auto"
              padding="5rem 1rem 0"
              position="relative"
              fontWeight={theme.bold}
              background={theme.color.white}
              css={{
                [theme.media.medium]: {
                  padding: '6rem 1rem 0',
                  fontSize: theme.rhythm(2),
                },
                [theme.media.large]: {
                  fontSize: theme.rhythm(2.5),
                  padding: '8rem 1rem 0',
                  letterSpacing: '-0.04em',
                  marginBottom: theme.rhythm(2),
                },
              }}
            >
              {post.frontmatter.title}
            </Block>
          </header>
          <Author />
          <Block
            css={theme.sharedStyles.markdown}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </article>
        <Block padding="4rem 1rem">
          <Row
            component="aside"
            alignItems="center"
            justifyContent="space-between"
            margin="0 auto"
            maxWidth={theme.sharedStyles.markdown.maxWidth}
            borderTop={`1px solid ${theme.color.offWhite}`}
            paddingTop="4rem"
          >
            <Block
              component="a"
              fontSize=".9rem"
              textTransform="uppercase"
              letterSpacing=".04em"
              background={theme.color.twitter}
              padding=".5rem .75rem"
              borderRadius="3px"
              fontWeight={theme.bold}
              position="relative"
              color={theme.color.white}
              props={{
                href: `https://twitter.com/intent/tweet?${qs.stringify({
                  url: `https://jaredpalmer.com${post.frontmatter.path}`,
                  via: 'jaredpalmer',
                })}`,
              }}
            >
              Like it? Tweet
            </Block>
            <Block
              component="time"
              props={{
                dateTime: new Date(post.frontmatter.date).toISOString(),
              }}
              color={theme.color.grayLighter}
              fontSize="1rem"
              textTransform="uppercase"
              letterSpacing=".04em"
            >
              Published{' '}
              <InlineBlock component="span" fontWeight={500}>
                {format(post.frontmatter.date, 'd MMM YYYY')}
              </InlineBlock>
            </Block>
          </Row>
        </Block>
      </Layout>
    );
  }
}

export const pageQuery = graphql`
  query BlogPostByPath($path: String!) {
    site {
      siteMetadata {
        siteName
      }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      id
      html
      frontmatter {
        title
        path
        description
        image
        date
      }
    }
  }
`;

// {
//   allMarkdownRemark {
//     totalCount
//     edges {
//       node {
//         id
//         frontmatter {
//           path,
//           title

//         }
//         headings {
//           value
//           depth
//         }
//       }
//     }
//   }
// }
