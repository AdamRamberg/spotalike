import React from 'react';
import List, { ListItem } from '../../components/List';

// eslint-disable-next-line no-console
const notImplementedHandler = () => console.log('Button not implemented');

const Content = () => (
  <List>
    <ListItem
      title="Share with your friends"
      iconKey="share"
      onClick={notImplementedHandler}
    />
    <ListItem
      title="Rate this app"
      iconKey="rate"
      onClick={notImplementedHandler}
    />
  </List>
);

export default Content;
