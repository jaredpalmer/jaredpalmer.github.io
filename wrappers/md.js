import React from 'react';
import Helmet from 'react-helmet';
import ReadNext from '../components/ReadNext';
import dateFns from 'date-fns';
import { config } from 'config';
import '../css/style.css';

class MarkdownWrapper extends React.Component {
  render() {
    const { route } = this.props;
    const post = route.page.data;
    return (
      <div className="markdown-body">
        <Helmet title={`${post.title} | ${config.blogTitle}`} />
        <h1 style={{ marginTop: 0 }}>{post.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.body }} />

      </div>
    );
  }
}

export default MarkdownWrapper;
