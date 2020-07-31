import deepmerge from 'deepmerge';

export const merge = (target, source) => {
    return deepmerge(target, source, {
        arrayMerge: (destination, source) => {
            return [...destination, ...source];
        },
    });
};
