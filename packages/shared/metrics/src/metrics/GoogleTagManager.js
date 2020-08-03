import React from 'react';

export const GoogleTagManager = (props) => {
    const noScriptAsReact = (parts) => {
        return <noscript dangerouslySetInnerHTML={{__html: parts.iframe}}></noscript>;
    };

    const scriptAsReact = (parts) => {
        return <script dangerouslySetInnerHTML={{__html: parts.script}}></script>;
    };

    const convertToKeyValueString = (obj) => {
        return JSON.stringify(obj).slice(1, -1);
    };

    const buildParts = ({id, dataLayerName = 'dataLayer', additionalEvents = {}, scheme = '', previewVariables}) => {
        if (id === undefined) {
            throw new Error('No GTM id provided');
        }

        const iframe = `
            <iframe src="${scheme}//www.googletagmanager.com/ns.html?id=${id}"
                height="0" width="0" style="display:none;visibility:hidden"></iframe>`;

        const script = `
            (function(w,d,s,l,i){w[l]=w[l]||[];
                w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js', ${convertToKeyValueString(
                    additionalEvents
                )}});
                var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
                j.async=true;j.src='${scheme}//www.googletagmanager.com/gtm.js?id='+i+dl
                ${previewVariables ? `+"${previewVariables}"` : ''};
                f.parentNode.insertBefore(j,f);
            })(window,document,'script','${dataLayerName}','${id}');`;

        return {
            iframe,
            script,
        };
    };

    React.useEffect(() => {
        const dataLayerName = props.dataLayerName || 'dataLayer';
        const scriptId = props.scriptId || 'google-tag-manager';

        if (!window[dataLayerName]) {
            const gtmScriptNode = document.getElementById(scriptId);
            /* eslint no-eval: 0 */
            eval(gtmScriptNode.textContent);
        }
    }, [props]);

    const gtm = () =>
        buildParts({
            id: props.gtmId,
            dataLayerName: props.dataLayerName || 'dataLayer',
            additionalEvents: props.additionalEvents || {},
            previewVariables: props.previewVariables || false,
            scheme: props.scheme || 'https:',
        });

    return (
        <div>
            <div>{noScriptAsReact(gtm())}</div>
            <div id={props.scriptId || 'google-tag-manager'}>{scriptAsReact(gtm())}</div>
        </div>
    );
};

export default GoogleTagManager;
