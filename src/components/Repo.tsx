import * as React from 'react';
import { Block } from 'glamor/jsxstyle';
import { theme } from '../theme';

export interface RepoProps {
  name: string;
  description: string;
  url: string;
  stars: string;
}

export const Repo: React.SFC<RepoProps> = ({
  name,
  description,
  url,
  stars,
}) => {
  return (
    <Block
      component="a"
      props={{ href: url }}
      marginBottom="2rem"
      css={{
        [theme.media.medium]: { width: '22.5%' },
      }}
    >
      <Block
        height="8px"
        width="100%"
        marginBottom="1rem"
        backgroundImage="linear-gradient(146deg, #52F8D3, #90efea)"
      />
      <Block
        fontWeight={800}
        fontSize="1rem"
        marginBottom="1rem"
        letterSpacing="-.02em"
      >
        {name}
      </Block>

      <Block
        fontSize=".8rem"
        color={theme.color.grayLighter}
        marginBottom=".5rem"
      >
        {description}
      </Block>
      <Block fontSize="12px" color={theme.color.grayLighter}>
        {stars}{' '}
        <span aria-label="GitHub Stars" role="img">
          ★
        </span>
      </Block>
    </Block>
  );
};

(Repo as any).displayName = 'Repo';
