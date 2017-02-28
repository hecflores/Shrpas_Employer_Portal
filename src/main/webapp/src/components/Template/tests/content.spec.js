/**
 * Created by Hector on 2/28/2017.
 */
import { browserHistory } from 'react-router';
browserHistory.push('/questions');


var React = require('react');
var TestUtils = require('react-addons-test-utils');//'react-dom/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
var ReactDOM = require('react-dom');
var Content = require('../Content.jsx').default; //my root-test lives in components/__tests__/, so this is how I require in my components.
var Questions = require('../../Questions/Questions.jsx'); //my root-test lives in components/__tests__/, so this is how I require in my components.


describe('Component(Content)', function () {

    it('Renders Without Problems', function () {
        TestUtils.route='/';
        var root = TestUtils.renderIntoDocument(<Content />);

        expect(root).toExist();
    });
    it('Renders Questions', function () {
        TestUtils.route='/';
        console.log(Questions);
        console.log(JSON.stringify(Questions));
        console.log(Questions.default);
        console.log(JSON.stringify(Questions.default));
        var component = TestUtils.renderIntoDocument(<Content />);
        TestUtils.
        expect(ReactDOM.findDOMNode(Questions)).toExist();



    });
});





