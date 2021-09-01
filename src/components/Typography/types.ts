export enum FontTypes {
  Monosten = 'Monosten',
  MonostenBold = 'MonostenBold',
}

export enum FontSizes {
  H1 = 'H1',
  H2 = 'H2',
  H3 = 'H3',
  H4 = 'H4',
  H5 = 'H5',
  H6 = 'H6',
  P1 = 'P1',
  P2 = 'P2',
  P3 = 'P3',
  P4 = 'P4',
  P5 = 'P5',
  P6 = 'P6',
}

export enum FontWeights {
  Thin = 'Thin',
  ExtraLight = 'ExtraLight',
  Light = 'Light',
  Regular = 'Regular',
  Medium = 'Medium',
  SemiBold = 'SemiBold',
  Bold = 'Bold',
  ExtraBold = 'ExtraBold',
  Black = 'Black',
}

export enum FontColor {
  Primary = 'Primary',
  Secondary = 'Secondary',
  Muted = 'muted',
}

export interface ITypographyProps {
  fontFamily?: FontTypes;
  fontSize?: FontSizes;
  fontWeight?: FontWeights;
  color?: FontColor;
}
