import React from 'react';
import { List, Icon } from 'semantic-ui-react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { route } from 'next/dist/server/router';
import { logoutUser } from '../../utils/authUser';

function SideMenu({ user }) {
  const router = useRouter();

  const isActive = (router) => router.pathname === route;

  return (
    <>
      <List
        style={{ paddingTop: '1rem' }}
        size="big"
        verticalAlign="middle"
        selection
      >
        <List.Item onClick={() => logoutUser(user.email)}>
          <Icon name="log out" size="large" />
          <List.Content>
            <List.Header content="Logout" />
          </List.Content>
        </List.Item>
      </List>
    </>
  );
}

export default SideMenu;
