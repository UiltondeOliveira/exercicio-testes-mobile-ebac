const {join} = require('path')

exports.config = {
    hostname: '127.0.0.1',
    port: 4723,
    //path: '/wd/hub',
    path: '/',
    specs: [
        './tests/specs/**/*.js'
    ],
    framework: 'mocha',

    capabilities: [{
        "appium:platformName": "Android",
        "appium:platformVersion": "12.0",
        "appium:deviceName": "Redmi_Note_9S",
        "appium:udid": "ee82fa37",
        "appium:automationName": "UiAutomator2",
        //"appium:app": join(process.cwd(),'./app/android/Android-NativeDemoApp-0.4.0'),
        "appium:app": "C:\\projetos\\exercicios-ebac\\exercicio-testes-mobile-ebac\\app\\Android-NativeDemoApp-0.4.0.apk",
        "appium:appwaitActivity": ".MainActivity",
        "appium:appPackage": "com.wdiodemoapp",
        "appium:appActivity": ".SplashActivity"
      }]
}


