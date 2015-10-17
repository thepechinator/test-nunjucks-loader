var path = require('path');

var config = require('webpack.config');

// Pulling in the same nunjucks that nunjucks-loader uses.
var nunjucks = require("exports?nunjucks!nunjucks/browser/nunjucks-slim");

var templateOne = require('hero/default.nunj');
var templateTwo = require('villain/default.nunj');

describe('nunjucks-loader', function () {
    describe('when requiring templates with the same base name', function() {
        it('should have unique entries in nunjucksPrecompiled', function() {
            var resourcePathOne = path.resolve(__dirname + 'fixtures/templates/hero/default.nunj');
            var resourcePathTwo = path.resolve(__dirname + 'fixtures/templates/villain/default.nunj');

            var keyOne = path.relative(config.context, resourcePathOne);
            var keyTwo = path.relative(config.context, resourcePathTwo);

            nunjucks.nunjucksPrecompiled.should.include.keys([keyOne, keyTwo]);
        });
    });
});
