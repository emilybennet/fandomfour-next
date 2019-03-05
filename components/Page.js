import React from "react";
import Head from "next/head";
import styled, { ThemeProvider, createGlobalStyle } from "styled-components";

const theme = {
  // brand
  black: "#000000",
  white: "#FFFFFF",

  yellow: "#FFE853",
  gold: "#FFC30F",
  blue: "#324B8C",

  grey: "#878383",
  lightGrey: "#E5E5E5",

  // font stacks
  poppins: '"Poppins", sans-serif',
  plex: '"IBM Plex Mono", sans-serif'
};

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
    -webkit-font-smoothing: antialiased;
  }
  
  body {
    color: ${theme.blue};
    font-family: ${theme.poppins};
    font-size: 1rem;
  }
  
  *,
  *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    font-weight: normal;
    margin: 0;
    padding: 0;
  }
  
  ol, ul {
    list - style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }

  @media (min-width: 600px) {
    body {
      font-size: 1.8rem;
    }
  }
`;

const Page = props => (
  <ThemeProvider theme={theme}>
    <div>
      <Head>
        <meta charSet="utf-8" />
        <title>Fandom Four 2019</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/static/favicon.png" />
        <link rel="stylesheet" type="text/css" href="/static/nprogress.css" />
        <link
          href="https://fonts.googleapis.com/css?family=IBM+Plex+Mono:700|Poppins:400,600,900,900i"
          rel="stylesheet"
        />

        <meta name="twitter:site" content="@bronycon" />
        <meta property="og:title" content="Fandom Four 2019" />
        <meta
          property="og:description"
          content='Vote on Twitter to decide the best "Friendship is Magic" episodes.'
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fandomfour.bronycon.org" />
        <meta
          property="og:image"
          content="https://fandomfour.bronycon.org/static/opengraph.png"
          key="opengraphImage"
        />
        <script src="/static/modernizr-webp.js" />
      </Head>

      {props.children}
      <GlobalStyle />
    </div>
  </ThemeProvider>
);

export default Page;
