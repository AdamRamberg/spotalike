import React from 'react';
import styled from 'styled-components';

const List = styled.ul`
  ${({ theme }) => `width: calc(100% - ${theme.spacing(6)})`};
  ${({ theme }) => theme.marginX(3)};
  ${({ theme }) => theme.marginY(0.5)};
  padding: 0;
  list-style-type: none;
`;

const ListItem = styled.li`
  &:not(:last-child) {
    border-bottom: 1px solid #dddddd;
  }
`;

const Button = styled.button`
  display: flex;
  ${({ theme }) => theme.paddingY(3)};
  width: 100%;
`;

const Content = () => (
  <List>
    <ListItem>
      <Button>
        <span>TOOLTIP CONTENT</span>
      </Button>
    </ListItem>
    <ListItem>
      <Button>TOOLTIP CONTENT</Button>
    </ListItem>
    <ListItem>
      <Button>TOOLTIP CONTENT</Button>
    </ListItem>
  </List>
);

export default Content;
