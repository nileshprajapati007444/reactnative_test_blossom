/*
  Screen Descrioption: This StyleSheet file is used to design post list screen.
*/
import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes/';
import { HEIGHT, WIDTH } from '../../../Themes/CustomDimension';
export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
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
  heading: {
    marginTop: 5,
    color: '#000',
    fontSize: Fonts.size.input,
    fontFamily: Fonts.type.medium,
    alignContent: 'center',
    textAlign:'center',
    alignSelf: 'center'
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
  headerSec: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
    paddingRight: 20,
    position: 'relative',
    top: Platform.OS === 'ios' ? -15 : 0,
  },
  imageThumb: {
    width: '90%',
    height: 120,
    alignItems: 'center',
    marginLeft: 10,
    marginRight:5,
    justifyContent: 'center',
    borderRadius: 15
  },
  titleStyle: {
    width: '100%',
    padding: 10,
    justifyContent: 'flex-start',
    alignSelf: 'stretch',
    marginBottom: 5,
    fontSize: Fonts.size.small,
    flex: 1, 
    flexWrap: 'wrap'
  },
  dateStyle: {
    flex: 1,
    overflow: 'hidden',
    paddingLeft: 20
  },
  commentCountStyle: {
    paddingRight: 20
  },
  flatList: {
    width: '100%', 
    marginTop: 15
  },
  postMainView:{
    borderWidth: 1, 
    borderColor: 'transparent', 
    width: '50%'
  },
  postDetail:{
    flexDirection: 'row', 
    marginTop: 5
  }


})
