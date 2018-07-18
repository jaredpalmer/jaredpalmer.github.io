import * as React from 'react';
import { theme } from '../theme';
import { Block } from 'glamor/jsxstyle';

export const Wrapper: React.SFC<any> = props => {
  return (
    <Block
      maxWidth={theme.wrapperWidth}
      margin="0 auto"
      paddingLeft="1rem"
      paddingRight="1rem"
      {...props}
    />
  );
};

(Wrapper as any).displayName = 'Wrapper';
