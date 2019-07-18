/*
  Screen Description: This screen is used to create the drawer navigator, listed the screens list which are using in Navigation menu.
*/

import { createDrawerNavigator, createAppContainer } from "react-navigation";
import React from 'react';
import Setting from '../Containers/Screens/Setting/Setting';
import NotificationList from '../Containers/Screens/NotificationList/NotificationList';
import Message from '../Containers/Screens/Message/Message';
import PostList from '../Containers/Screens/PostList/PostList';
import SideBar from '../Containers/Screens/SideBar/SideBar';
import Profile from '../Containers/Screens/Profile/Profile';

const DrawerRouter = createDrawerNavigator(
  { 
    PostList: { screen: PostList }, 
    Setting: { screen: Setting },    
    NotificationList: { screen: NotificationList },   
    Message: { screen: Message },
    Profile: { screen: Profile }
  },
  {
    unmountInactiveRoutes: true,
    contentComponent: props => <SideBar {...props} />
  }
);

export default createAppContainer(DrawerRouter);
