System.config({
    transpiler: 'typescript',
    paths: {
        'angular2/angular2': 'node_modules/angular2/angular2.js',
        'typescript': 'node_modules/typescript/lib/typescript.js',
        'systemjs': 'node_modules/systemjs/dist/system.src.js',
        'system-polyfills': 'node_modules/systemjs/dist/system-polyfills.js',
        'es6-module-loader': 'node_modules/es6-module-loader/dist/es6-module-loader.js',
        'phantomjs-polyfill': 'node_modules/phantomjs-polyfill/bind-polyfill.js'
    },
    packages: {
        'test': { defaultExtension: 'ts' },
        'src' : { defaultExtension: 'ts' },
        'node_modules/angular2': {
            main: 'angular2',
            defaultExtension: 'js'
        }
    }
});


