import * as React from 'react';
import Helmet from 'react-helmet';
import ogImage from './og_image.png';

export interface HeadProps {
  title: string;
  description?: string;
  image?: string;
}
// @see https://github.com/nfl/react-helmet/issues/373
// Use arrays. lol.
export const Head: React.SFC<HeadProps> = props => {
  return (
    <>
      <div className="skipnav">
        <a href="#maincontent">Skip to main content</a>{' '}
        <a href="#footer">Skip to footer</a>
      </div>
      <Helmet
        title={props.title}
        meta={[
          { name: 'twitter:title', content: props.title },
          { name: 'og:title', content: props.title },
          { name: 'twitter:site', content: '@jaredpalmer' },
          props.description && {
            name: 'description',
            content: props.description,
          },
          props.description && {
            name: 'twitter:description',
            content: props.description,
          },
          ,
          props.description && {
            name: 'og:description',
            content: props.description,
          },

          props.image && {
            name: 'twitter:card',
            content: 'summary_large_image',
          },

          {
            name: 'twitter:image',
            content: !!props.image ? props.image : ogImage,
          },

          {
            name: 'og:image',
            content: !!props.image ? props.image : ogImage,
          },
        ].filter(Boolean)}
      />
    </>
  );
};

Head.displayName = 'Head';
