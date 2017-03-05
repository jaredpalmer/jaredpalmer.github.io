import React from 'react';
import moment from 'moment';
import Helmet from 'react-helmet';
import ReadNext from '../components/ReadNext';
import { rhythm } from 'utils/typography';
import { config } from 'config';
import { Container } from 'react-responsive-grid';
import '../css/style.css';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    return (
      <div className="markdown-body">
        <Container
          style={{
            maxWidth: rhythm(24),
            padding: `${rhythm(0.75)} ${rhythm(0.75)} ${rhythm(1.5)}`
          }}
        >
          <Helmet title={`${post.title} | ${config.blogTitle}`} />
          <h1 style={{ marginTop: 0 }}>{post.title}</h1>
          <div dangerouslySetInnerHTML={{ __html: post.body }} />
          <em
            style={{
              display: 'block',
              marginBottom: rhythm(2)
            }}
          >
            Posted {moment(post.date).format('MMMM D, YYYY')}
          </em>
          <hr
            style={{
              marginBottom: rhythm(2)
            }}
          />
          <ReadNext post={post} pages={route.pages} />
        </Container>
        <div style={{ width: '100%', backgroundColor: '#eee' }}>
          <Container
            style={{
              maxWidth: rhythm(24),
              padding: `${rhythm(0.75)} ${rhythm(0.75)} ${rhythm(1.5)}`
            }}
          >
            <h4>Get new articles via email</h4>
            <p>I only publish once in a while.</p>
          </Container>
        </div>
      </div>
    );
  }
}

MarkdownWrapper.propTypes = {
  route: React.PropTypes.object
};

export default MarkdownWrapper;
