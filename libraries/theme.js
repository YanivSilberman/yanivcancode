import { mergeObjects } from './helpers';

const themeList = {};

themeList.extend = (themename, newsetting) =>
  mergeObjects(themeList[themename], newsetting);

themeList.main = {
  font: {
    sizes: {
      normal: '14px',
      big: '15px',
      bigger: '16px',
      small: '13px',
      smaller: '12px',
      tiny: '11px'
    },
    family: {
      normal: "'Raleway', sans-serif"
    }
  },
  spacing: {
    normal: '10px',
    big: '15px',
    bigger: '20px',
    huge: '40px',
    small: '10px',
    smaller: '5px',
    noSpace: '0'
  },
  alignment: {
    horizontalCenter: '0 auto',
    center: 'auto'
  },
  colors: {
    main: '#f44336',
    success: '#5cb85c',
    warn: '#ffc067',
    error: '#d9534f',
    background: '#ffffff',
    dark: '#616161',
    light: '#bdbdbd',
    text: '#333',
    textAlt: '#ffffff'
  },
  effects: {
    hover: {
      mainColor: '&:hover { color: #f44336 }'
    }
  },
  shadow: {
    light: '0 6px 12px rgba(0, 0, 0, 0.1), 0 5px 2px rgba(0, 0, 0, 0.12)',
    heavy: '0 19px 38px rgba(0, 0, 0, 0.3), 0 15px 12px rgba(0, 0, 0, 0.22)'
  },
  media: {
    phone: '320px',
    justPhone: 'only screen and (min-width: 320px) and (max-width: 480px)',
    minPhone: 'only screen and (min-width: 320px)',
    maxPhone: 'only screen and (max-width: 480px)',

    ereader: '481px',
    justEreader: 'only screen and (min-width: 481px) and (max-width: 640px)',
    minEreader: 'only screen and (min-width: 481px)',
    maxEreader: 'only screen and (max-width: 640px)',

    portrait: '641px',
    justPortrait: '(min-width: 641px) and (max-width: 960px)',
    minPortrait: '(min-width: 641px)',
    maxPortrait: '(max-width: 960px)',

    tablet: '961px',
    justTablet: '(min-width: 961px) and (max-width: 1024px)',
    minTablet: '(min-width: 961px)',
    maxTablet: '(max-width: 1024px)',

    landscape: '1025px',
    justLandscape: '(min-width: 1025px) and (max-width: 1280px)',
    minLandscape: '(min-width: 1025px)',
    maxLandscape: '(max-width: 1280px)',

    desktop: '1281px',
    justDesktop: '(min-width: 1025px)',
    minDesktop: '(min-width: 1025px)'
  }
};

export default themeList;
