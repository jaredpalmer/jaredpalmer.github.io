import '../css/styles.css';

import * as React from 'react';

import { Helmet } from 'react-helmet';

interface TemplateProps {
  children?: any;
}

export default class Template extends React.Component<TemplateProps, {}> {
  render() {
    return (
      <div>
        <Helmet
          title="Jared Palmer"
          meta={[
            {
              name: 'description',
              content: 'Jared Palmer - Software Engineer at The Palmer Group',
            },
            {
              name: 'keywords',
              content: 'html, css, javascript, engineering, react, nodejs',
            },
          ]}
        />
        {this.props.children()}
      </div>
    );
  }
}
