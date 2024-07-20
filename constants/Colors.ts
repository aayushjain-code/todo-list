/**
 * Below are the colors that are used in the app. The colors are defined in the light and dark mode.
 * There are many other ways to style your app. For example, [Nativewind](https://www.nativewind.dev/), [Tamagui](https://tamagui.dev/), [unistyles](https://reactnativeunistyles.vercel.app), etc.
 */
  
// The app is not using theme support, so default colors are used everywhere.

const tintColorLight = '#0a7ea4';
const tintColorDark = '#fff';

export const Colors = {
  light: {
    text: '#11181C',
    background: '#fff',
    tint: tintColorLight,
    icon: '#687076',
    tabIconDefault: '#687076',
    tabIconSelected: tintColorLight,
  },
  dark: {
    text: '#ECEDEE',
    background: '#151718',
    tint: tintColorDark,
    icon: '#9BA1A6',
    tabIconDefault: '#9BA1A6',
    tabIconSelected: tintColorDark,
  },
  default: {
    white: "#FFF",
    modernBlue: '#0267C1',
    gray: '#808080',
    black: '#000',
    mediumGray: '#bbb',
    darkGray: "#666666",
    success: "#1DB863",
    grayTranslucent: 'rgba(196, 196, 196, 0.24)',
    checkboxGray: "#B2B2B2",
    text: "#666",
    whitesmoke: 'whitesmoke'
  }
};
