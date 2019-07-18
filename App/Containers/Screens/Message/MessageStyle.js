/*
  This is the StyleSheet file used to desing Message Screen.
*/

import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes';
import { HEIGHT,WIDTH } from '../../../Themes/CustomDimension';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    marginLeft:10,
    marginRight:10,
    paddingLeft:10,
    paddingRight:10,
  },
  maincontent: {
    paddingLeft:10,
    paddingRight:10,
  }, 
  header: {
    backgroundColor: '#FFF',
    height: (HEIGHT * 0.08),
    justifyContent: 'flex-start',
    width:"100%", 
  },
  icoMenu: {
    color: '#000',
    marginRight: 25,
    paddingTop: 7,
    minHeight: 35,
  },
  headerSec: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    paddingBottom: 13,
    width:'100%',
    alignSelf: 'center'
  },
  heading: {
    marginTop: 5,
    color: '#000',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.medium,
    alignContent: 'center',
    textAlign:'center',
    alignSelf: 'center'
  },
  contentArea: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center", 
    height: (HEIGHT * 0.16)
  },
  contentText: {
    fontSize: 14,
    color: "rgba(0,0,0,0.7)",
    marginBottom: 15,
  },

})
