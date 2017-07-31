import * as React from 'react';

const G = require('glamorous');

export const Block = (props: any) => <G.Div display="block" {...props} />;

export const InlineBlock = (props: any) =>
  <G.Div display="inline-block" {...props} />;

export const Flex = (props: any) => <G.Div display="flex" {...props} />;

export const Row = (props: any) =>
  <G.Div display="flex" flexDirection="row" {...props} />;

export const Col = (props: any) =>
  <G.Div display="flex" flexDirection="column" {...props} />;

export const Button = (props: any) => <G.Button {...props} />;
export const A = (props: any) => <G.A {...props} />;
export const H1 = (props: any) => <G.H1 {...props} />;
export const H2 = (props: any) => <G.H2 {...props} />;
export const H3 = (props: any) => <G.H3 {...props} />;
export const H4 = (props: any) => <G.H4 {...props} />;
export const H5 = (props: any) => <G.H5 {...props} />;
export const H6 = (props: any) => <G.H6 {...props} />;
export const Input = (props: any) => <G.Input {...props} />;
export const Textarea = (props: any) => <G.Textarea {...props} />;
export const Label = (props: any) => <G.Label {...props} />;
export const Span = (props: any) => <G.Span {...props} />;
