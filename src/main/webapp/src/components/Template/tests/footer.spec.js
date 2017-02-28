

console.log("Entering Test Footer");
var React = require('react');
var TestUtils = require('react-addons-test-utils');//'react-dom/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Footer = require('../Footer.jsx').default; //my root-test lives in components/__tests__/, so this is how I require in my components.


describe('root', function () {
    it('renders footer without problems', function () {
        var root = TestUtils.renderIntoDocument(<Footer />);
        console.log(root.render());
        expect(root).toExist();
    });
});