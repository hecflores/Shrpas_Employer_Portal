var React = require('react');
var TestUtils = require('react-addons-test-utils');//'react-dom/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Questions = require('../Questions.jsx').default;

var questions=[{"type":"text", "content": "Question Text"},
	{"type":"code", "content": "Question Code"},
	{"type":"multiple-choice", "content": "Question Multi"},
	{"type":"video", "content": "Question Video"},
	{"type":"audio", "content": "Question Audio"}
	]
describe('Is there Questions test', function () {
    it('renders without problems', function () {

        var root = TestUtils.renderIntoDocument(<Questions questions=
        {questions} />);

        expect(root).toExist();
    });
});
