const withTM = require('next-transpile-modules')(['three', 'drei', 'react-three-fiber']); // pass the modules you would like to see transpiled

module.exports = withTM();
