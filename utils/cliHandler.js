'use strict';

const meow = require('meow');

module.exports = meow(
  `
    Usage
      $ react-scripts-watch [options]

    Options
      -b, --build-path Path to the build folder. Absolute or relative path, if relative will be prefixed with project root folder path.

      -p, --public-path Public URL.

      -v, --verbose

    Examples
      $ react-scripts-watch -b dist/ -p /assets
`,
  {
    flags: {
      'build-path': {
        type: 'string',
        alias: 'b',
      },
      'public-path': {
        type: 'string',
        alias: 'p',
      },
      verbose: {
        type: 'boolean',
        alias: 'v',
      },
    },
  }
);
