import * as React from 'react';
import { Block } from 'glamor/jsxstyle';
import { theme } from '../theme';

export interface FeaturedProjectProps {
  title: string;
  description: string;
  url: string;
  gradient: string;
  cardColor: string;
  stars?: string;
  downloads?: number;
}

export const FeaturedProject: React.SFC<FeaturedProjectProps> = props => {
  return (
    <Block
      component="a"
      props={{ href: props.url }}
      width="95%"
      css={{
        [theme.media.small]: { width: '45%' },
        [theme.media.medium]: { width: '22.5%' },
      }}
      marginBottom="3rem"
      position="relative"
      height="200px"
    >
      <Block
        component="span"
        height="95%"
        position="absolute"
        top="10%"
        left="10%"
        width="95%"
        backgroundImage={props.gradient}
      />
      <Block
        component="span"
        padding="2rem 1rem"
        height="200px"
        width="100%"
        background={props.cardColor}
        position="absolute"
        top="0"
        left="0"
        // boxShadow="2px 2px 4px rgba(0,0,0,.05)"
      >
        <Block
          component="h3"
          color={theme.color.dark}
          fontSize="1.5rem"
          letterSpacing="-.01em"
          lineHeight="1"
          marginBottom="1rem"
          fontWeight={800}
        >
          {props.title}
        </Block>
        <Block color={theme.color.dark} fontSize="1rem" lineHeight="1.3">
          {props.description}
        </Block>
        {!!props.stars ? (
          <Block position="absolute" bottom="1rem" left="1rem" fontSize=".9rem">
            {props.stars.toLocaleString()}{' '}
            <span aria-label="GitHub Stars" role="img">
              ★
            </span>
          </Block>
        ) : null}
        {!!props.downloads ? (
          <Block
            position="absolute"
            bottom="1rem"
            right="1rem"
            fontSize=".9rem"
          >
            {props.downloads.toLocaleString()}{' '}
            <span aria-label="NPM Downloads" role="img">
              ↓
            </span>
          </Block>
        ) : null}
      </Block>
    </Block>
  );
};

(FeaturedProject as any).displayName = 'FeaturedProject';
