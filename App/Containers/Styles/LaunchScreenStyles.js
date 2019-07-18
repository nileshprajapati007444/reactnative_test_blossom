/*
  This is the StyleSheet file used to desing Launch Screen.
*/

import { StyleSheet } from 'react-native'
import { Metrics, ApplicationStyles } from '../../Themes/'
import { HEIGHT,WIDTH } from '../../Themes/CustomDimension';

export default StyleSheet.create({
  ...ApplicationStyles.screen,
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgb(80, 193, 233)",
  },
  content: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  imgHome: {
    height: HEIGHT,
    width: WIDTH,
    alignSelf: 'center',
    alignItems: 'center',

  },
  secExlore: {
    width: '100%',
    height: 5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 140,
    left: 20
  },
  text: {
    color: 'white',
    fontSize: 20
  },
  btnExlore: {
    backgroundColor: '#0B1732',
    padding: 10,
    opacity: 0.7,
    borderRadius: 28
  }

})
