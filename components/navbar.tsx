import React from "react";
import Link from "next/link";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
`;

const UnorderedList = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  font-size: 1.2rem;
  margin-right: 1rem;
  cursor: pointer;
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  outline: none;
  padding: 1rem;
`;

const PAGES = [
  { title: "Home", slug: "/" },
  { title: "Blog", slug: "/blog" },
  { title: "About", slug: "/about" },
  { title: "Work", slug: "/work" },
];

const NavBar = () => (
  <Nav>
    <Container>
      <FontAwesomeIcon icon={faCode} />
      <h1>Ethan Blumenthal</h1>
    </Container>

    <UnorderedList>
      {PAGES.map(({ title, slug }) => (
        <Link href={slug} key={slug}>
          <ListItem>{title}</ListItem>
        </Link>
      ))}
    </UnorderedList>

    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faSun} />
      <Button>Subscribe</Button>
    </Container>
  </Nav>
);

export default NavBar;
