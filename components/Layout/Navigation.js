import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import styled from "styled-components";
import { IoMdDocument } from "react-icons/io";

const navItems = [
  {
    name: "index.js",
    slug: "/",
  },
  {
    name: "about.js",
    slug: "/about",
  },
  {
    name: "work.js",
    slug: "/work",
  },
  {
    name: "blog.js",
    slug: "/blog",
  },
];

const CustomLink = styled.a`
  color: var(--primary-text);
  font-weight: 300;
  font-family: "Fira Sans", sans-serif;
  font-size: 1.25rem;
  width: 100%;
`;

const LinkWrapper = styled.div`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.isActive ? "var(--lightest-grey)" : "transparent"};
  &:hover {
    background-color: var(--lightest-grey);
  }
`;

const NavWrapper = styled.div`
  margin-left: 24px;
`;

const PageIcon = styled(IoMdDocument)`
  color: var(--secondary-text);
  margin-right: 4px;
`;

export const Navigation = () => {
  const router = useRouter();
  return (
    <NavWrapper>
      {navItems.map(({ name, slug }) => (
        <LinkWrapper
          key={name}
          isActive={router.pathname === slug ? true : false}
        >
          <PageIcon />
          <Link href={slug} passHref>
            <CustomLink>{name}</CustomLink>
          </Link>
        </LinkWrapper>
      ))}
    </NavWrapper>
  );
};
