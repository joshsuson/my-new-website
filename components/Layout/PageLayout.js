import React from "react";
import styled from "styled-components";
import { Sidebar, TopNavBar } from ".";

const PageWrapper = styled.div`
  background-color: var(--background);
`;

const MainWrapper = styled.div`
  margin-left: 255px;
  height: 100vh;
`;

export const PageLayout = ({ children }) => {
  return (
    <PageWrapper>
      <Sidebar />

      <MainWrapper>
        <TopNavBar />
        {children}
      </MainWrapper>
    </PageWrapper>
  );
};
