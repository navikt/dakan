import * as React from 'react';
import ReactDOM from 'react-dom';
import Main from '../main';
import {BrowserRouter} from 'react-router-dom';

it('Renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
        <BrowserRouter>
            <Main />
        </BrowserRouter>,
        div
    );
    ReactDOM.unmountComponentAtNode(div);
});
