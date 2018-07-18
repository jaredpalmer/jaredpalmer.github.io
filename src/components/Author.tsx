import * as React from 'react';
import { Block, Row, Column } from 'glamor/jsxstyle';
import { theme } from '../theme';

export interface AuthorProps {}

export const Author: React.SFC<AuthorProps> = props => {
  return (
    <Row maxWidth={700} margin="2rem auto" padding="0 1rem" alignItems="center">
      <Block
        component="img"
        height="36"
        width="36"
        borderRadius="50%"
        props={{
          src:
            'https://media.shellypalmer.com/wp-content/images/2017/12/13131645/jaredpalmer_headshot_sq_bw.jpg',
        }}
      />
      <Column marginLeft="1rem">
        <Block>Jared Palmer</Block>
        <Block fontSize=".8rem" color={theme.color.grayLighter}>
          Senior Engineer at The Palmer Group
        </Block>
      </Column>
    </Row>
  );
};

(Author as any).displayName = 'Author';
