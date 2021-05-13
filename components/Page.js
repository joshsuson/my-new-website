import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { TitleBar, PageLayout } from "./Layout";

const GlobalStyles = createGlobalStyle`

    html {
        --background: #222228;
        --title-bar: #37383a;
        --dark-grey: #2a2d31;
        --grey: #2f3236;
        --light-grey: #37383a;
        --lightest-grey: #595b5d;
        --primary-text: #e3e3e3;
        --secondary-text: #aeafb0;
        --first-color: #ff7568;
        --second-color: #c6a8ef;
        --third-color: #6ebfae;
        --fourth-color: #ffdb03;
        --fifth-color: #ff86ba;
        --apple-red: #ff5f57;
        --apple-green: #28c840;
        --apple-yellow: #febc2e;
        box-sizing: border-box;
        font-size: 10px;
    }

    *, *:before, *:after {
        box-sizing: inherit;
    }

    body {
        font-family: 'Fira Code', monospace;
        margin: 0;
        padding: 0;
        font-size: 1.5rem;
        line-height: 2;
        background-color: var(--background)
    }

    h1, h2, h3, h4, h5, h6 {
        font-size: inherit;
        margin: 0;
        padding: 0;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

const Wrapper = styled.div`
  background-color: var(--background);
`;

export default function Page({ children }) {
  return (
    <div>
      <GlobalStyles />
      <TitleBar />
      <PageLayout>
        <h1>This is the header</h1>
        {children}
      </PageLayout>
    </div>
  );
}
