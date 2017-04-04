/**
 * Created by Hector on 2/28/2017.
 */


var React = require('react');
var TestUtils = require('react-addons-test-utils');//'react-dom/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var Footer = require('../Footer.jsx').default; //my root-test lives in components/__tests__/, so this is how I require in my components.


describe('Is the Footer There', function () {
    it('renders without problems', function () {
        TestUtils.route='/';
        var root = TestUtils.renderIntoDocument(<Footer />);

        expect(root).toExist();
    });
});





