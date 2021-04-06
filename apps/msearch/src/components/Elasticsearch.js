// Adapted from https://github.com/betagouv/react-elasticsearch

/* MIT License

Copyright (c) 2019-present beta.gouv.fr

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE. */



import React from 'react'
import { SharedContextProvider } from './SharedContextProvider'
import Listener from './Listener'

export default function ({ children, url, onChange, headers }) {
    const initialState = {
        url,
        listenerEffect: null,
        widgets: new Map(),
        headers,
        isSearching: false
    }

    const reducer = (state, action) => {
        const { widgets } = state
        const widget = {
            needsQuery: action.needsQuery,
            needsConfiguration: action.needsConfiguration,
            isFacet: action.isFacet,
            wantResults: action.wantResults,
            query: action.query,
            value: action.value,
            configuration: action.configuration,
            result: action.result,
        }
        switch (action.type) {
            case 'setWidget':
                widgets.set(action.key, widget)
                return { ...state, widgets }
            case 'deleteWidget':
                widgets.delete(action.key, widget)
                return { ...state, widgets }
            case 'setListenerEffect':
                return { ...state, listenerEffect: action.value }
            case 'isSearching':
                return { ...state, isSearching: action.value }
            default:
                return state
        }
    }

    return (
        <SharedContextProvider initialState={initialState} reducer={reducer}>
            <Listener onChange={onChange}>{children}</Listener>
        </SharedContextProvider>
    )
}
