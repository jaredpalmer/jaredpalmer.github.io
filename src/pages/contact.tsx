import '../reset.css';
import * as React from 'react';
import { Block, Row, InlineBlock, Column } from 'glamor/jsxstyle';
import { theme } from '../theme';
import { RepoProps } from '../components/Repo';
import { Layout } from '../components/Layout';
import { Wrapper } from '../components/Wrapper';
import { Formik, Form, FieldProps } from 'formik';
import { Fieldset } from '../components/Fieldset';

export interface TalksState {
  repos?: RepoProps[];
}

const inputStyles = {
  appearance: 'none',
  fontFamily: 'inherit',
  fontStyle: 'inherit',
  verticalAlign: 'baseline',
  display: 'block',
  position: 'relative',
  margin: '0 0 2rem',
  border: 0,
  padding: '.5rem 0',
  background: 'transparent',
  borderBottom: `1px solid ${theme.color.grayLightest}`,
  borderRadius: 0,
  fontSize: 18,
  lineHeight: '1.55556',
  outline: 0,
  zIndex: 2,
  width: '100%',
  transition: 'all 200ms ease',
  '&:focus': {
    borderBottom: `1px solid ${theme.color.grayLighter}`,
  },
  '&:placeholder': {
    fontSize: 18,
  },
};

export default class Contact extends React.Component<void, TalksState> {
  state: TalksState = {};
  render() {
    return (
      <Layout
        title="Contact me about a project"
        description="Contact Jared Palmer, about your design, development, or strategy project."
      >
        <Wrapper paddingTop="10rem" paddingBottom="7rem">
          <Column
            css={{
              [theme.media.medium]: {
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            }}
          >
            <Block
              flex="3"
              marginBottom="3rem"
              css={{
                [theme.media.medium]: {
                  marginRight: '1rem',
                },
              }}
            >
              <Block
                component="h1"
                color={theme.color.dark}
                fontWeight={800}
                position="relative"
                background={theme.color.white}
                marginBottom="1rem"
                fontSize="3rem"
                letterSpacing="-.03em"
              >
                Hello.
              </Block>
              <Block
                color={theme.color.grayLighter}
                fontSize="2rem"
                lineHeight="1.3"
                fontWeight={300}
                letterSpacing="-.03em"
              >
                Got a project to discuss?
              </Block>
            </Block>
            <Block
              color={theme.color.dark}
              letterSpacing="-.01em"
              lineHeight="1.3"
              flex="5"
              position="relative"
              paddingTop="1rem"
              background={theme.color.white}
            >
              <Formik
                initialValues={{ name: '', email: '', message: '' }}
                onSubmit={v => console.log(v)}
              >
                <Form>
                  <Fieldset
                    id="name"
                    name="name"
                    label="Name"
                    render={({ field, form }: FieldProps) => (
                      <Block
                        component="input"
                        props={{
                          ...field,
                          placeholder: 'Name',
                          autoFocus: true,
                          required: true,
                        }}
                        css={inputStyles}
                      />
                    )}
                  />
                  <Fieldset
                    label="Email"
                    id="email"
                    name="email"
                    render={({ field, form }: FieldProps) => (
                      <Block
                        component="input"
                        props={{
                          ...field,
                          type: 'email',
                          placeholder: 'Email',
                          required: true,
                        }}
                        css={inputStyles}
                      />
                    )}
                  />

                  <Fieldset
                    id="message"
                    name="message"
                    label="Tell me all about it"
                    render={({ field, form }: FieldProps) => (
                      <Block
                        component="textarea"
                        css={inputStyles}
                        props={{
                          ...field,
                          placeholder: 'Tell me about it',
                          rows: 6,
                          required: true,
                        }}
                      />
                    )}
                  />
                  <Block
                    component="button"
                    props={{ type: 'submit' }}
                    color={theme.color.white}
                    padding="1rem 1.25rem"
                    minWidth={200}
                    marginTop="3rem"
                    display="block"
                    position="relative"
                    textTransform="uppercase"
                    borderRadius={3}
                    border="0"
                    fontSize="1rem"
                    textAlign="center"
                    background="#7DE2FF"
                    fontWeight={theme.bold}
                    transform="translateY(0)"
                    cursor="pointer"
                    backgroundImage="linear-gradient(-134deg, #7DE2FF  0%, #489AFF 100%)"
                    css={{
                      transition: 'all 100ms ease',
                      '&:hover': {
                        transform: `translateY(-1px)`,
                        boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                      },
                      '&:active': {
                        transform: `translateY(0)`,
                        // boxShadow: `0 4px 8px rgba(0,0,0,.1)`,
                      },
                    }}
                  >
                    Submit
                  </Block>
                </Form>
              </Formik>
            </Block>
          </Column>
        </Wrapper>
      </Layout>
    );
  }
}
