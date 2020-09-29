let scenarios = require('./scenarios.js');
let defaultScenarioValues = require('./defaultScenarioValues.js');

const mergedScenarios = scenarios.map(scenario => {
    return Object.assign(JSON.parse(JSON.stringify(defaultScenarioValues)), scenario);
});

let backstopConfiguration = {
    "id": "Foundation Template",
    "viewports": [
        {
            "label": "phone",
            "width": 320,
            "height": 480
        },
        {
            "label": "tablet",
            "width": 1024,
            "height": 768
        },
        {
            "label": "desktop",
            "width": 1440,
            "height": 900
        }
    ],
    "onBeforeScript": "puppet/onBefore.js",
    "onReadyScript": "puppet/onReady.js",
    "scenarios": mergedScenarios,
    "paths": {
        "bitmaps_reference": "backstop_data/bitmaps_reference",
        "bitmaps_test": "backstop_data/bitmaps_test",
        "engine_scripts": "backstop_data/engine_scripts",
        "html_report": "backstop_data/html_report",
        "ci_report": "backstop_data/ci_report"
    },
    "report": [],
    "engine": "chromy",
    "engineOptions": {
        "args": ["--no-sandbox"]
    },
    "asyncCaptureLimit": 4,
    "asyncCompareLimit": 40,
    "debug": false,
    "debugWindow": false
};

console.log('\x1b[32m', JSON.stringify(backstopConfiguration, null, 2), '\x1b[0m');
module.exports = backstopConfiguration;
