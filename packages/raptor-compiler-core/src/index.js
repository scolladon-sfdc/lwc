import { normalizeEntryPath, normalizeOptions } from './lib/utils';
import { compileFile, compileBundle } from './lib/compiler';

const BASE_OPTIONS = {
    format: 'es',
    babelConfig: {
        babelrc: false,
        sourceMaps: true
    }
};

export function compile(entry: string, options: any): Promise<any> {
    options = options || {};
    entry = normalizeEntryPath(entry);
    options = normalizeOptions(Object.assign({}, { entry }, BASE_OPTIONS, options));
    if (options.bundle) {
        return compileBundle(entry, options);
    } else {
        return Promise.resolve(compileFile(entry, options));
    }
}

export function compileResource(entry: string, options: any): Object {
    options = options || {};
    entry = normalizeEntryPath(entry);
    options = normalizeOptions(Object.assign({}, { entry }, BASE_OPTIONS, options));
    return compileFile(entry, options);
}

export const version = "__VERSION__";
