export const fontFace = (name, src, fontWeight = 'normal', fontStyle = 'normal') => {    
    return `
      @font-face {
          font-family: "${name}";
          src: url(${'../fonts/' + src + '.eot'});
          src: url(${'../fonts/' + src + '.eot'}?#iefix) format("embedded-opentype"),
               url(${'../fonts/' + src + '.woff'}) format("woff"),
               url(${'../fonts/' + src + '.woff2'}) format("woff2"),
               url(${'../fonts/' + src + '.ttf?'}) format("truetype");

          font-display: "swap";
          font-style: ${fontStyle};
          font-weight: ${fontWeight};
      }
  `;
};
