require('require-dir')('./tasks');

// due to the changes of Gulp 4, tasks have to be defined before the dependants/ task collections
require('./tasks/dependants/build');
require('./tasks/dependants/default');