var React = require('react');
var TestUtils = require('react-addons-test-utils');//'react-dom/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Questions = require('../Questions.jsx').default;


describe('Is there Questions test', function () {
    it('renders without problems', function () {

        var root = TestUtils.renderIntoDocument(<Questions />);

        expect(root).toExist();
    });
});
