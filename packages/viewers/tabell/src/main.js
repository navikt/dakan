import React from 'react';
import {Block} from 'baseui/block';
import {Switch, Route} from 'react-router-dom';
import {Header} from '@dakan/ui';
import {ThemeProvider, navTheme} from '@dakan/theme';
import env from '@beam-australia/react-env';

import Viewer from './pages/Viewer';

const title = env('TITLE') || 'Data';
const link = env('HOME_URL') || '../';

export default function App() {
    return (
        <ThemeProvider theme={navTheme()}>
            <Switch>
                <Route exact path="/tabell/:id" component={Viewer} />
                <Route
                    component={() => (
                        <Block>
                            <Header
                                config={{
                                    brand: title,
                                    nav: true,
                                    about: true,
                                }}
                            />
                            <Block display="flex" justifyContent="center" role="main">
                                Viewer id parameter missing. Format https://url/id
                            </Block>
                        </Block>
                    )}
                />
            </Switch>
        </ThemeProvider>
    );
}
