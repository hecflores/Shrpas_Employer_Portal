import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';

import App from '../App';


describe('<App/>', function () {
    const wrapper = mount(<App/>);
    it('should have a table', function () {
        expect(wrapper.find("table")).to.have.length(1);
    });
    it('should have a button', function () {
        expect(wrapper.find(".btn-block")).to.have.length(1);
    });

});