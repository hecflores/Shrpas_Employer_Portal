var React = require('react');
var TestUtils = require('react-addons-test-utils');//'react-dom/lib/ReactTestUtils'); //I like using the Test Utils, but you can just use the DOM API instead.
var expect = require('expect');
import HintsDropdown from 'components/Questions/Question/_Components/Hint/HintDropdown.jsx';

describe('Is there Hints test', function () {
    it('renders without problems', function () {

        var root = TestUtils.renderIntoDocument(<HintsDropdown />);

        expect(root).toExist();
    });
});
