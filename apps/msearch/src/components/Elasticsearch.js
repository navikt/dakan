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
