/**
 * Converts UNIX timestamp to Date String
 *
 * @remarks
 * This function is used for the PocketFeed Component
 *
 * @param {number} timestamp UNIX timestamp
 * @returns {string} Date String
 * */
export const timeConverter = (timestamp: number): string => {
  const a = new Date(timestamp * 1000);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const year = a.getFullYear();
  const month = months[a.getMonth()];
  const date = a.getDate();
  const hour = a.getHours();
  const min = a.getMinutes();
  const time = `${date} ${month} ${year} ${hour}:${min}`;
  return time;
};

/**
 * Converts hex string to an hsl object
 *
 * @remarks
 * Function is used for the ThemeChanger Component
 *
 * @param {string} hex Hex string
 * @returns {object} hsl object
 *
 * */
export const hexToHSL = (hex: string): object => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  if (!result) throw new Error('Hex Result is null, bad request');

  let r = parseInt(result[1], 16);
  let g = parseInt(result[2], 16);
  let b = parseInt(result[3], 16);
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h;
  let s;
  const l = (max + min) / 2;
  if (max === min) {
    // achromatic
    h = 0;
    s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
      default:
        // TODO untested case
        h = (r - g) / d + 4;
    }
    h /= 6;
  }
  const HSL = {
    h,
    s,
    l,
  };
  return HSL;
};

/**
 * Takes an HSL object and returns an object with 5 HSL strings with luminosity relative to the hsl param
 *
 * @remarks Function is used for the ThemeChanger Component
 *
 * @param {object} hsl HSL object
 * @returns {object} HSL object with 5 HSL strings
 * */
export const generateHSLShades = (hsl: {
  h: number;
  s: number;
  l: number;
}): object => {
  const { h, s, l } = hsl;
  return {
    lightest: `hsl(${h}, ${s}, ${l * 1.2})`,
    lighter: `hsl(${h}, ${s}, ${l * 1.1})`,
    main: `hsl(${h}, ${s}, ${l * 1})`,
    darker: `hsl(${h}, ${s}, ${l * 0.9})`,
    darkest: `hsl(${h}, ${s}, ${l * 0.8})`,
  };
};
