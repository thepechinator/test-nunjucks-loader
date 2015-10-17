var g = typeof window !== 'undefined' ? window : global;

g.chai = require('chai');
g.should = chai.should();

require('./spec/nunjucks-loader');
