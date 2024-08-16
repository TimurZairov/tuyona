import {Dimensions} from 'react-native';

export const COLORS = {
  mainColor: '#FFFFFF',
  grayColor: '#F1F1F3',
  blackColor: '#010101',
  blueColor: '#1AA9B9',
  lightGray: '#959595',
  borderColor: '#D2D3D3',
  redColor: '#EC5F55',
};

export const {width, height} = Dimensions.get('window');

export const SIZES = {
  xsmall: 12,
  small: 14,
  medium: 16,
  large: 18,
  //
  h5: {
    sm: 12,
    md: 14,
    lg: 16,
  },
  h4: {
    sm: 16,
    md: 18,
    lg: 22,
  },
  h3: {
    sm: 19,
    md: 22,
    lg: 28,
  },
  h2: {
    sm: 20,
    md: 22,
    lg: 24,
  },
  h1: {
    sm: 24,
    md: 26,
    lg: 30,
  },
};
