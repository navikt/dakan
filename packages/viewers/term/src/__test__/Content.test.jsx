import * as React from 'react';

import {Heading} from 'baseui/heading';
import {LabeledContent} from '@dakan/ui';
import ReactMarkDown from 'react-markdown';

import StatusText from '../components/StatusText';
import JiraRelations from '../components/JiraRelations';
import Content from '../components/Content';

import exampleJson from '../resources/example.json';
import {mount, shallow} from '../enzyme';

describe('Test for Content component', () => {
    let wrapperInternal;
    let wrapperExternal;
    let testContent;

    beforeAll(() => {
        testContent = exampleJson._source.content;
        wrapperInternal = mount(<Content indexEntry={testContent} viewerVersion="private" />);
        wrapperExternal = mount(<Content indexEntry={testContent} />);
    });

    it('Test for correctly rendering internaly', () => {
        expect(wrapperInternal.find(LabeledContent).length).toEqual(14);
        expect(wrapperInternal.find(StatusText).length).toEqual(2);
        expect(wrapperInternal.find(JiraRelations).length).toEqual(1);
        expect(wrapperInternal.find(ReactMarkDown).length).toEqual(5);
        expect(wrapperInternal.contains('Testavdelingen - Seksjon for testing')).toBeTruthy();
        wrapperInternal.unmount();
    });

    it('Test for correctly rendering externaly', () => {
        expect(wrapperExternal.find(LabeledContent).length).toEqual(6);
        expect(wrapperExternal.find(StatusText).length).toEqual(0);
        expect(wrapperExternal.find(JiraRelations).length).toEqual(1);
        expect(wrapperExternal.find(ReactMarkDown).length).toEqual(5);
        expect(wrapperExternal.contains('Test FirstName lastName')).toEqual(false);
        wrapperExternal.unmount();
    });

    it('Test for correctly rendering page if status is not approved', () => {
        let ContentWithDeniedStatus = testContent;
        ContentWithDeniedStatus.status = 'Utkast';
        const wrapperStatus = shallow(<Content indexEntry={ContentWithDeniedStatus} />);
        expect(wrapperStatus.contains(<Heading>Begrepet 'NAV Fagpost' er under arbeid.</Heading>)).toBeTruthy();
    });
});
