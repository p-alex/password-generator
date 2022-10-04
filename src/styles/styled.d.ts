import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    siteBg: string;
    textColor: string;
    darkTextColor: string;
    mutedTextColor: string;
    accentColor: string;
    sectionBg: string;
    containerBg: string;
    borderColor: string;
    rangeTrackBg: string;
    rangeThumbBorder: string;
    rangeThumbBg: string;
    rangeThumbBgActive: string;
  }
}
