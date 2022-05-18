<img src="https://raw.githubusercontent.com/DevExpress/testcafe-gh-page-assets/master/src/images/testcafe-ogp-icon.png" alt="TestCafe UI Automation" style="height: 350px; width:720px;"/>

# TestCafe UIAutomation Framework

UI Automation Framework with ***TestCafe***

## Tech Stack

1. TestCafe
2. JavaScript
3. Node, NPM

##Instructions

###Installing TestCafe
Ensure that Node.js and npm are installed on your computer and run the following command: 


    npm install -g testcafe

###Installing Reporters
1. TestCafe Reporter HTML


    npm install testcafe-reporter-html
2. TestCafe Reporter Allure



     npm install testcafe-reporter-allure
3. TestCafe Reporter List



    npm install testcafe-reporter-list
###Generating Reports
1. TestCafe Reporter HTML


    testcafe <specify-browser> <specify the test with path>  --reporter html:<path-to-store-report>
    testcafe chrome test/testcafe-basic-examples/  --reporter html:test-artifacts/reports/reporter.html
2. TestCafe Reporter Allure


    allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report


###Installing Optional Tools
1. ####Xpath To CSS
   For using XPath to identify elements as TestCafe natively doesn't support XPath


    npm install --save-dev xpath-to-css

3. ####Prettier
   For formatting code


    npm install prettier 
4. ####FFMPEG
   For capturing videos


    npm install --save @ffmpeg-installer/ffmpeg
5. ####Faker Library
   For generating Fake Data


    npm install @faker-js/faker --save-dev
6. ####JSDoc Library
   For generating Javascript documentation
   **[Check Instructions for JSDoc](https://www.section.io/engineering-education/jsdoc-documentation/)**


    npm install -g jsdoc
8. ####VSCode TestCafe Test Runner
   For Running test using Right click actions
   **[Check Instructions to Add the Extension](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner)**  
9. ####VSCode TestCafe Snippets
   For Getting Code Snippets
   **[Check Instructions to Add the Extension](https://marketplace.visualstudio.com/items?itemName=hdorgeval.testcafe-snippets)**
10. ####VSCode Test Latte
    For Running all the Tests in the Selected Browsers 
    **[Check Instructions to Add the Extension](https://marketplace.visualstudio.com/items?itemName=sshimono.testlatte)** 

###Generating JSDoc
1. Install JSDoc package
2. Setup the ***jsdoc.json*** configuration file
3. Include the Script for JSDoc in ***package.json***


    "doc": "jsdoc -c jsdoc.json"
4. Run the NPM command to generate the documentation


    npm run doc

##Examples Included

| Examples                                                             | Packages/Files/Location      |
| -------------------------------------------------------------------- | ---------------------------- |
| Mouse Hover, Drag&Drop, FileUpload, iFrame, MetaScript, Hooks, Video Recording etc.   | ***tests/testcafe-basic-examples*** -> contains examples on different features provided by TestCafe |
| Scripts for running Tests via NPM (multipe browsers, headless, concurrent runs, emulation), Generating JSDoc | ***package.json*** -> script section |
| JSDoc for generating JS Documentation  | ***jsdoc.json*** -> configuration for JSDoc, ***documentation/index.html*** -> documentation for all relevant JS files |
| TestCafe Configuration | ***.testcaferc.json*** -> configuration for browser, videos, screenshots |
| POM Pages and Defined Tests |***pages/ecommerce-pages*** -> pom pages defining selectors & methods, ***test/ecommerce-test*** -> tests implementing the pom pages|
| Testcafe Allure Reports | ***doc-allure-config*** -> configuration for allure report, ***test/testcafe-basic-examples/allureReportMetaInfoTest.js*** -> test for generating Meta for allure report|

#Running The Test(s)
[Checkout Official Documentation for Running Tests](https://testcafe.io/documentation/402830/guides/basic-guides/run-tests)

| Command                                                              | Example    |
| -------------------------------------------------------------------- | ---------------------------- |
| Running Single Test - **testcafe <specify-browser> <specify the test with path>** | testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js |
| Running Test based on Meta Tags - **testcafe <specify-browser> <specify the test with path> --test-meta <key=value>** |testcafe chrome test/testcafe-basic-examples/testMetaScriptTest.js --test-meta severity=p2 |
| Running All The Tests in All The Available Browsers - **testcafe all tests** | testcafe all tests |
| Running All The Tests in specified Directory - **testcafe <specify-browser> <specify the path containing tests>** | testcafe chrome test/ |
| Running Test ignore JS errors - **testcafe <specify-browser> <specify the test with path> --skip-js-errors** | testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js --skip-js-errors |
| Running Test with Debug Mode for Failed Cases - **testcafe <specify-browser> <specify the test with path> --debug-on-fail** | testcafe chrome test/testcafe-basic-examples/debugModeTest.js --debug-on-fail|
| Running Test and capturing Screenshot on Failures - **testcafe <specify-browser> <specify the test with path> -s -takeOnFails=true**| testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js -s takeOnFails=true |
| Running Test with multiple Browser instances - **testcafe -c <specify no of instances> <specify-browser> <specify the test with path>** | testcafe -c 5 chrome test/testcafe-basic-examples/firstSelectorTest.js |
| Running Test with multiple Browsers - **testcafe <specify-browser1> <specify-browser2 <specify the test with path>** | testcafe chrome,firefox test/testcafe-basic-examples/firstSelectorTest.js |
| Running Test In Live Mode - **testcafe <specify-browser> <specify the test with path> -L**|testcafe chrome ./test/testcafe-basic-examples/firstSelectorTest.js -L|
| Running Test Via NPM(should have scripts defined in package.json) - **npm run <script-name>** | npm run test:chrome |
| Running Test and capturing Videos on Failures - **testcafe <specify-browser> <specify the test with path> --video <path> --video-options failedOnly=true** |testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js -s takeOnFails=true --video test-artifcats/videos --video-options failedOnly=true|


##Useful NPM Commands
1. To clean install node_modules


    npm clean-install
2. To remove packages


    npm uninstall <package-name>
3. To move packages from devDependencies to Dependencies


    npm i <module_name> -P

  