import {Platform} from 'react-native';

/*
Available font weights

300 Light
400 Regular
500 Medium
600 SemiBold
700 Bold
*/

export const family = {
  ProximaBold: Platform.select({
    ios: 'ProximaNova-Bold', // The font family name
    android: 'ProximaNova-Bold', // The file name
  }),
  ProximaRegular: Platform.select({
    ios: 'ProximaNova-Regular', // The font family name
    android: 'ProximaNova-Regular', // The file name
  }),
  ProximaBlack: Platform.select({
    ios: 'ProximaNova-Black', // The font family name
    android: 'ProximaNova-Black', // The file name
  }),
  ProximaExtraBold: Platform.select({
    ios: 'ProximaNova-ExtraBold', // The font family name
    android: 'ProximaNova-ExtraBold', // The file name
  }),
};
