import * as React from 'react';
import { Block, Row, Column } from 'glamor/jsxstyle';
import { theme } from '../theme';

export interface SectionProps {
  title: string;
  children: React.ReactNode;
  background: string;
}

export const Section: React.SFC<SectionProps> = ({
  title,
  children,
  background,
}) => {
  return (
    <Block
      transform="skewY(-12deg)"
      transformOrigin="0px center 0px"
      backgroundColor={background}
      marginBottom="-32px"
      height={500}
    >
      <Row
        transform="skewY(12deg)"
        transformOrigin="0px center 0px"
        alignItems="center"
        justifyContent="center"
        background={background}
      >
        <Column alignItems="center" justifyContent="center" padding="0 1rem">
          <Block
            component="h2"
            textAlign="center"
            fontSize="3rem"
            marginTop="0"
            lineHeight="1"
          >
            {title}
          </Block>
          <Block
            color={theme.color.gray}
            textAlign="center"
            lineHeight="1.3"
            fontSize="1.1rem"
            maxWidth={600}
            margin="0 auto"
          >
            {children}
          </Block>
        </Column>
      </Row>
    </Block>
  );
};

(Section as any).displayName = 'Section';
