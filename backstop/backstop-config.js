'use strict';
const BackstopReferenceBaseUrl = "http://live-mycirclewptest.pantheonsite.io";
const BackstopTestUrl = process.env.MULTIDEV_SITE_URL;
const config = {
  "viewports": [
    {
      "name": "desktop",
      "width": 1280,
      "height": 1080
    }
  ],
  "scenarios": [
    {
      "label": "Clips by person, with quotes",
      "url": BackstopTestUrl + "/2019/09/26/hello-world/",
      "referenceUrl": BackstopReferenceBaseUrl + "/2019/09/26/hello-world/",
      "delay": 4000,
      "misMatchThreshold" : 0.1
    },
    {
      "label": "Homepage",
      "url": BackstopTestUrl + "/",
      "referenceUrl": BackstopReferenceBaseUrl + "/",
      "delay": 4000,
      "misMatchThreshold" : 0.1
    },
  ],
  "paths": {
    "bitmaps_reference": "backstop_data/bitmaps_reference",
    "bitmaps_test": "backstop_data/bitmaps_test",
    "engine_scripts": "backstop_data/engine_scripts",
    "html_report": "backstop_data/html_report",
    "ci_report": "backstop_data/ci_report"
  },
  "report": ["browser"],
  "engine": "chrome",
  "engineFlags": [],
  "asyncCaptureLimit": 10,
  "debug": false,
  "debugWindow": false
}
module.exports = config;