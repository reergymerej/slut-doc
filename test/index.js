'use strict';

/*global beforeEach */

var path = require('path'),
    fs = require('fs'),
    mocha = require('mocha'),
    willy = require('willy'),
    will = willy.will,
    slutDoc = require('../slut-doc'),
    docBlocks = require('../doc-blocks');

var searchPath = path.join(__dirname, 'dummy-source');
var testFile = path.join(searchPath, 'foo.js');
var testFileText = fs.readFileSync(testFile, 'utf-8');


describe('finding doc blocks', function () {
    var blocks = slutDoc.findBlocks(testFileText),
        block = blocks[0],
        docBlock = new docBlocks.DocBlock(block);

    // console.log(testFileText);
    console.log(docBlock);

    console.log(docBlock.stringify());
    
});
