/* eslint-disable import/prefer-default-export */
export const timeConverter = (UNIX_timestamp: number) => {
  const a = new Date(UNIX_timestamp * 1000);
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

export const hexToHSL = (hex: string) => {
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

export const generateColorRange = () =>
  // TODO handle if + / - num is (> 0 / < 255)
  /*
    ? Max Lumosity 55, min 22, step can be 11 - 13 to be noticeable

    Example:
      input: 
  */
  ({});
