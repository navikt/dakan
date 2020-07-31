import React from 'react';
import {shallow} from '../enzyme';
import StatusText from '../components/StatusText';
import exampleJson from '../resources/example.json';
import {LabeledContent} from '@dakan/ui';
import {Check, Alert, DeleteAlt} from 'baseui/icon';

describe('Test for StatusText component', () => {
    let wrapper;
    let testContent;

    beforeAll(() => {
        testContent = exampleJson._source.content.status;
        wrapper = shallow(<StatusText status={testContent} />);
    });

    it('Test for rendering status correctly', () => {
        expect(wrapper.find(LabeledContent).length).toEqual(1);
    });

    it('Test for rendering icon correctly', () => {
        const wrapperCheck = shallow(<StatusText status={'Godkjent begrep'} />);
        expect(wrapperCheck.find(Check).length).toEqual(1);
        const wrapperAlert = shallow(<StatusText status={'Utkast'} />);
        expect(wrapperAlert.find(Alert).length).toEqual(1);
        const wrapperCross = shallow(<StatusText status={'Høring'} />);
        expect(wrapperCross.find(DeleteAlt).length).toEqual(1);
    });
});
