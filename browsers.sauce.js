'use strict';

let browsers = {};
[
  `Windows 7`,
  `Windows 10`,
  `OS X 10.11`,
  `OS X 10.12`
].forEach((os) => {
  [45, 46, 47, 48, 49, 50, 51, `latest`].forEach((version) => {
    const key = `sl_firefox_${version}_${os.replace(` `, `-`).replace(`.`, `-`)}`;
    browsers[key] = {
      base: `SauceLabs`,
      platform: os,
      browserName: `firefox`,
      version: version
    };
  });

  [50, 51, 52, 53, 54, 55, 56, `latest`].forEach((version) => {
    const key = `sl_chrome_${version}_${os.replace(` `, `-`).replace(`.`, `-`)}`;
    browsers[key] = {
      base: `SauceLabs`,
      platform: os,
      browserName: `chrome`,
      version: version
    };
  });
});



module.exports = browsers;
