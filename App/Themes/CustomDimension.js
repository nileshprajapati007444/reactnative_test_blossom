/*
  Screen Description: This screen is used to set the height and width of window screen and use in stylesheet file
*/
import {Dimensions, Platform} from 'react-native'

const { width, height } = Dimensions.get('window')

module.exports = {
  HEIGHT: height,
  WIDTH: width,
}
