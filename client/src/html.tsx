import React from 'react';

interface HTMLProps {
  body: string;
  bodyAttributes?: Record<string, unknown>;
  headComponents?: React.ReactNode[];
  htmlAttributes?: Record<string, unknown>;
  postBodyComponents?: React.ReactNode[];
  preBodyComponents?: React.ReactNode[];
}

export default function HTML({
  body,
  bodyAttributes,
  headComponents,
  htmlAttributes,
  postBodyComponents,
  preBodyComponents
}: HTMLProps): JSX.Element {
  return (
    <html id='__fcc-html' {...htmlAttributes} lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta content='ie=edge' httpEquiv='x-ua-compatible' />
        <meta
          content='width=device-width, initial-scale=1.0, shrink-to-fit=no'
          name='viewport'
        />
        {headComponents}

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-1SKWPE5JC3'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-1SKWPE5JC3');</script>`
          }}
        />

        <script
          async
          src='https://www.googletagmanager.com/gtag/js?id=G-P9S5KF522M'
        ></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-P9S5KF522M');`
          }}
        />
      </head>
      <body {...bodyAttributes}>
        {preBodyComponents}
        <div
          className='tex2jax_ignore'
          dangerouslySetInnerHTML={{ __html: body }}
          id='___gatsby'
          key={'body'}
        />
        {postBodyComponents}
      </body>
    </html>
  );
}
