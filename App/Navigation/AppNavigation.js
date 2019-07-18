/*
  Screen Description: This is Navigation Screen of App. We have listed all screen used in app that will navigate. We can set default screen of app from this file.
*/
import { createStackNavigator, createAppContainer } from 'react-navigation'
import LaunchScreen from '../Containers/LaunchScreen'
import Setting from '../Containers/Screens/Setting/Setting';
import Message from '../Containers/Screens/Message/Message';
import NotificationList from '../Containers/Screens/NotificationList/NotificationList';
import Profile from '../Containers/Screens/Profile/Profile';
import PostList from '../Containers/Screens/PostList/PostList';
import PostDetail from '../Containers/Screens/PostDetail/PostDetail';
import AppDrawerNavigator from '../Containers/AppDrawerNavigator';
import styles from './Styles/NavigationStyles'

const PrimaryNav = createStackNavigator({
  LaunchScreen: { screen: LaunchScreen },

  Setting: { screen: Setting },
  Message: { screen: Message },
  NotificationList: { screen: NotificationList },
  Profile: { screen: Profile },
  PostList: { screen: PostList },
  PostDetail: { screen: PostDetail },
  AppDrawerNavigator: { screen: AppDrawerNavigator },

}, {
    headerMode: 'none',
    initialRouteName: 'LaunchScreen', // From here we can set default screen to load
    navigationOptions: {
      headerStyle: styles.header
    }
  })

export default createAppContainer(PrimaryNav)
