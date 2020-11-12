import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faSearch, faSun } from "@fortawesome/free-solid-svg-icons";

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
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
`;

const Button = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: 1px solid black;
  outline: none;
  padding: 1rem;
`;

const NavBar = () => (
  <Nav>
    <Container>
      <FontAwesomeIcon icon={faCode} />
      <h1>Ethan Blumenthal</h1>
    </Container>

    <UnorderedList>
      <ListItem>Home</ListItem>
      <ListItem>Articles</ListItem>
      <ListItem>About</ListItem>
      <ListItem>Work</ListItem>
    </UnorderedList>

    <Container>
      <FontAwesomeIcon icon={faSearch} />
      <FontAwesomeIcon icon={faSun} />
      <Button>Subscribe</Button>
    </Container>
  </Nav>
);

export default NavBar;
