import * as React from 'react';

import Viewer from '../pages/Viewer';
import ErrorMessage from '../components/ErrorMessage';
import {shallow} from '../enzyme';

describe('Test for Viewer page', () => {
    let wrapperError;

    beforeAll(() => {
        const params = {params: {id: 2}};
        wrapperError = shallow(<Viewer match={params} />);
    });

    // it('Test for correctly rendering error page', () => {
    //     expect(wrapperError.find(ErrorMessage).length).toEqual(1);
    // });
});
