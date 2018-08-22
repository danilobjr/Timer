import * as React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import Manifest from 'next-manifest/manifest';

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <link rel="shortcut icon" href="/static/favicon.ico" />
          <link rel="stylesheet" href="/_next/static/style.css" />
          <title>Timer</title>
          {/* TODO: remove this and its package */}
          <Manifest themeColor="#297acb" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
