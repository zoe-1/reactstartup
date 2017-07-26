const Code = require('code');
const Lab = require('lab');

const internals = {};

const lab = exports.lab = Lab.script();
const describe = lab.experiment;
const expect = Code.expect;
const it = lab.test;

import React from 'react';
import { shallow } from 'enzyme';
// import sinon from 'sinon';
import HelloWorld from '../src/HelloWorld';

describe('/helloWorld', () => {

    it('props generate correct text', (done) => {

        const wrapper = shallow(<HelloWorld message="test run" />);
        expect(wrapper.find('h1').text()).to.equal('test run');
        done();
    });

    it('generates one h1', (done) => {

        const wrapper = shallow(<HelloWorld message="test run" />);
        expect(wrapper.find('h1')).to.have.length(1);
        done();
    });
});
