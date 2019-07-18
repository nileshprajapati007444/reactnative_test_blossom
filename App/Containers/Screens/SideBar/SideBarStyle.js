
/*
  This is the StyleSheet file used to desing Sidebar menu.
*/

import { StyleSheet, Platform } from 'react-native';
import { ApplicationStyles, Metrics, Colors, Fonts } from '../../../Themes';
import { HEIGHT,WIDTH } from '../../../Themes/CustomDimension';
 
export default StyleSheet.create({
  ...ApplicationStyles.screen, 
  content: {
    marginBottom: 20, 
    backgroundColor: '#e8e6e8'
  },
  list: {
    width: (WIDTH * 0.80),
    left:7,
    top:25
  },
  menuSec: {
    backgroundColor: 'transparent',
    marginBottom: 12,
    alignSelf: 'flex-start',
    flexDirection: 'row',
    paddingLeft: 10,
  }, 
  menuTitle:{
    fontSize: 16,
    marginLeft: 15,
    width: (WIDTH * 0.66),
    color:'#7c7b7c', 
  },   
  drawerIcon:{
    fontSize: Fonts.size.h4,
    marginLeft:5,
    marginTop:2,
    marginRight:5,
    minHeight:35,
    color: '#7c7b7c',
    width: 30,
    height: 10,
    alignSelf: 'flex-start',
  }, 
  userImage :{
    width: 80,
    height: 80,
    alignSelf:'center',
    backgroundColor:'#4caaf5',
    borderRadius:50,
    borderWidth:2,
    borderColor:'rgba(0,0,0,0.2)',
    borderWidth:2,
    borderColor:'#fff' 
  },
  profileSec:{
    paddingTop:20, 
  }, 
  userName:{
    marginTop : 12,
    fontSize: 14,
    color : 'black',
    alignSelf: 'center',
    paddingBottom:10,
  },
  userEmail:{
    marginTop : 3,
    fontSize: 14,
    color : '#7c7b7c',
    alignSelf: 'center',
    paddingBottom: 10,
  },
  borderbottom:{
    borderWidth: 0.6,
    borderColor: "#7c7b7c",
    marginLeft: 20,
    marginRight: 20,
  },
  bordertop:{
    borderWidth: 0.6,
    borderColor: '#ddd',
    marginBottom: 10,
  },
  backButton:{
    color: '#7c7b7c'
  }

})