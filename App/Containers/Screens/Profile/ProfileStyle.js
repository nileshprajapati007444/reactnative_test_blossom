/*
  This is the StyleSheet file used to desing Profile Screen.
*/

import { StyleSheet } from 'react-native';
import { ApplicationStyles, Fonts } from '../../../Themes/';
import { HEIGHT, WIDTH } from '../../../Themes/CustomDimension';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginLeft: 10,
    marginRight: 10,
    paddingLeft: 10,
    paddingRight: 10,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 13,
  },
  headerBg: {
    backgroundColor: '#2089dc',
    height: (HEIGHT * 0.08),
    justifyContent: 'flex-start'
  },
  drawerIcon: {
    color: '#000',
    marginRight: 25,
    paddingTop: 7,
    minHeight: 35,
    marginLeft: 15
  },
  headerTitle: {
    marginTop: 5,
    color: 'white',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.medium,
  },
  noDataFoundSec: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: (HEIGHT * 0.16)
  },
  noDataFoundText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.7)",
    marginBottom: 15,
  },
  headerView: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    position: 'relative',
  },
  profileName: {
    paddingTop: 50,
    marginLeft: 20,
    fontSize: 16
  },
  profileImage: {
    marginTop: 10, 
    marginLeft: 20,
    width: 80,
    height: 80
  },
  profileBanner:{
    width: '100%', 
    height: 200
  },
  borderBottom:{
    borderWidth: 1, 
    width: 80, 
    marginLeft: 20, 
    marginTop: 10, 
    borderColor: 'grey'
  },
  buttonsSec:{
    flexDirection: 'row', 
    width: '100%', 
    marginLeft: 10, 
    marginTop: 25
  },
  btnFollow:{
    backgroundColor: '#8bc34a', 
    padding: 15, 
    width: '50%', 
    marginLeft: 10
  },
  followText:{
    textAlign: 'center', 
    color: 'white'
  },
  btnMessage:{
    backgroundColor: '#e8e6e8', 
    padding: 15, 
    width: '50%', 
    marginRight: 10
  },
  MessageText:{
    textAlign: 'center'
  },
  userDetail:{
    flexDirection: 'row'
  },
  userDesc:{
    paddingLeft: 20, 
    paddingRight: 20, 
    marginTop: 20
  }

})
