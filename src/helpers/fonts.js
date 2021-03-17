export const fontFace = (name, src, fontWeight = 'normal', fontStyle = 'normal') => {    
    return `
      @font-face {
          font-family: "${name}";
          src: url(${require('../fonts/' + src + '.eot')});
          src: url(${require('../fonts/' + src + '.eot')}?#iefix) format("embedded-opentype"),
               url(${require('../fonts/' + src + '.woff')}) format("woff"),
               url(${require('../fonts/' + src + '.woff2')}) format("woff2"),
               url(${require('../fonts/' + src + '.ttf?')}) format("truetype");

          font-display: "swap";
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
};
