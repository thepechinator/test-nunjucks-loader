var path = require('path');

var config = require('webpack.config');

// Pulling in the same nunjucks that nunjucks-loader uses.
var nunjucks = require("exports?nunjucks!nunjucks/browser/nunjucks-slim");

var templateOne = require('hero/default.nunj');
var templateTwo = require('villain/default.nunj');

describe('nunjucks-loader', function () {
    describe('when requiring templates with the same base name', function() {
        it('should have unique entries in nunjucksPrecompiled', function() {
            // The this.context used in the loader comes from the webpack config's
            // context, right?
            var keyOne = path.relative(config.context, 'hero/default.nunj');
            var keyTwo = path.relative(config.context, 'villain/default.nunj');

            nunjucks.nunjucksPrecompiled.should.include.keys([keyOne, keyTwo]);
        });
    });
});
