/* eslint-disable no-nested-ternary */
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
 * @description creates a hsl object from a hex string input
 *
 * @remarks used for converting hex to hsl for the theme state
 *
 * @param {string} hex - the hex string to convert
 *
 * @returns {object} hsl object
 *
 */
export function hexToHsl(hex: string): object {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  const s =
    max === min
      ? 0
      : l < 0.5
      ? (max - min) / (max + min)
      : (max - min) / (2 - max - min);
  const h =
    max === min
      ? 0
      : r === max
      ? (g - b) / (max - min)
      : g === max
      ? 2 + (b - r) / (max - min)
      : 4 + (r - g) / (max - min);
  const hsl = {
    h: Math.round(h * 60),
    s: Math.round(s * 100),
    l: Math.round(l * 100),
  };
  return hsl;
}

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
