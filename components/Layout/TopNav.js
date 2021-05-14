import React from "react";
import styled from "styled-components";
import { navItems } from "../../lib/navItems";
import { PageIcon } from ".";
import { useRouter } from "next/router";

const TopNavWrapper = styled.div`
  grid-column: 1 / span 4;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const LinkWrapper = styled.div`
  border-right: 1px solid hsla(207, 1%, 69%, 0.3);
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) =>
    props.isActive ? "var(--lightest-grey)" : "var(--background)"};
  cursor: pointer;

  &:hover {
    background-color: var(--lightest-grey);
  }
`;

const CustomLink = styled.div`
  color: var(--primary-text);
  font-family: "Fira Sans", sans-serif;
  text-transform: lowercase;
  font-size: 1.25rem;
  text-align: center;
`;

export const TopNav = () => {
  const router = useRouter();

  const handleClick = (link) => {
    router.push(link);
  };
  return (
    <TopNavWrapper>
      {navItems.map((item) => (
        <LinkWrapper
          isActive={router.pathname === item.slug ? true : false}
          onClick={() => handleClick(item.slug)}
          key={item.name}
        >
          <PageIcon />
          <CustomLink>{item.name}</CustomLink>
        </LinkWrapper>
      ))}
    </TopNavWrapper>
  );
};
