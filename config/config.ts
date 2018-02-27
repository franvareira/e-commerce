import { browser, Config, by } from 'protractor';

export let config: Config = {

    seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
    //directConnect: true,
    SELENIUM_PROMISE_MANAGER: false,
    

    
    baseUrl: 'http://demo.cs-cart.com',

    capabilities: {
        browserName: 'chrome'
    },

    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),

    specs: ['../../features/**/*.feature'],

    onPrepare: () => {
        browser.ignoreSynchronization = true;
        browser.manage().window().maximize();
        by.addLocator('formControlName', 
            function(value, opt_parentElement, opt_rootSelector){
                var using = opt_parentElement || document;
                return using.querySelectorAll('[formControlName="' + value + '"]');
            });
        }, 

    cucumberOpts: {
        compiler: "ts:ts-node/register",
        strict: true,
        format: ['pretty'],
        require: ['../../stepdefinitions/**/*.steps.ts', '../../support/*.ts'],
        tags: '@Teste'
    }
};