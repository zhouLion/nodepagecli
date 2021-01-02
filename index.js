const { gitCloneProjects } = require('./lib/serve/git');
const start = require('./lib/serve/start').default;
const config = require('./config/config.json');

// gitCloneProjects(config);

start(config.port);
