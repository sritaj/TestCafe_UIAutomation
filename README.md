<img src="https://raw.githubusercontent.com/DevExpress/testcafe-gh-page-assets/master/src/images/testcafe-ogp-icon.png" alt="TestCafe UI Automation" style="height: 350px; width:720px;"/>

# TestCafe UIAutomation Framework

UI Automation Framework with **_TestCafe_** demonstrating **_common operations, pom, taking screenshots and videos, tests on multiple browsers, multiple instances in parallel_** with integration of **_Allure Reports, Reporter HTML_** for generating Test reports and **_DockerSetup_** for running the Tests

## Tech Stack

1. TestCafe
2. JavaScript
3. Node, NPM
4. Allure Reports

## Instructions

### Installing TestCafe

Ensure that Node.js and npm are installed on your computer and run the following command:

    npm install -g testcafe

### Installing Reporters

1.  #### TestCafe Reporter HTML

        npm install testcafe-reporter-html

2.  #### TestCafe Reporter Allure

        npm install testcafe-reporter-allure

3.  #### TestCafe Reporter List

        npm install testcafe-reporter-list

    ###Generating Reports

4.  #### TestCafe Reporter HTML

        testcafe <specify-browser> <specify the test with path> --reporter html:<path-to-store-report>
        testcafe chrome test/testcafe-basic-examples/ --reporter html:test-artifacts/reports/reporter.html

5.  #### TestCafe Reporter Allure

        allure generate allure/allure-results --clean -o allure/allure-report && allure open allure/allure-report

### Building Docker Image

To Build Docker Image, run command: "**_docker build -t <preferredImageName:latest> ._**"

     docker build -t testcafe_uiautomation:latest .

### Docker Setup For Running TestCafe Tests

1. Run command `docker-compose up` to start the launch the container(container name is set as TestCafe_vX.X.X)
2. On container start, the Entrypoint defined in the Docker file will be executed
3. For Entrypoint, additional parameters needs to be defined - `BROWSER, CONCURRENCY`
4. The Additional parameters by default are defined in .env file which can be updated accordingly
5. Run command `docker-compose down` to bring down the container

### Installing Optional Tools

1.  #### Xpath To CSS

    For using XPath to identify elements as TestCafe natively doesn't support XPath

        npm install --save-dev xpath-to-css

2.  #### Prettier

    For formatting code

        npm install prettier

3.  #### FFMPEG

    For capturing videos

        npm install --save @ffmpeg-installer/ffmpeg

4.  #### Faker Library

    For generating Fake Data

        npm install @faker-js/faker --save-dev

5.  #### JSDoc Library

    For generating Javascript documentation
    **[Check Instructions for JSDoc](https://www.section.io/engineering-education/jsdoc-documentation/)**

        npm install -g jsdoc

6.  #### VSCode TestCafe Test Runner
    For Running test using Right click actions
    **[Check Instructions to Add the Extension](https://marketplace.visualstudio.com/items?itemName=romanresh.testcafe-test-runner)**
7.  #### V SCode TestCafe Snippets
    For Getting Code Snippets
    **[Check Instructions to Add the Extension](https://marketplace.visualstudio.com/items?itemName=hdorgeval.testcafe-snippets)**
8.  #### VSCode Test Latte
    For Running all the Tests in the Selected Browsers
    **[Check Instructions to Add the Extension](https://marketplace.visualstudio.com/items?itemName=sshimono.testlatte)**

### Generating JSDoc

1. Install JSDoc package
2. Setup the **_jsdoc.json_** configuration file
3. Include the Script for JSDoc in **_package.json_**

       "doc": "jsdoc -c jsdoc.json"

4. Run the NPM command to generate the documentation

        npm run doc

## Examples Included

| Examples                                                                                                     | Packages/Files/Location                                                                                                                                                  |
| ------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Mouse Hover, Drag&Drop, FileUpload, iFrame, MetaScript, Hooks, Video Recording etc.                          | **_tests/testcafe-basic-examples_** -> contains examples on different features provided by TestCafe                                                                      |
| Scripts for running Tests via NPM (multipe browsers, headless, concurrent runs, emulation), Generating JSDoc | **_package.json_** -> script section                                                                                                                                     |
| JSDoc for generating JS Documentation                                                                        | **_jsdoc.json_** -> configuration for JSDoc, **_documentation/index.html_** -> documentation for all relevant JS files                                                   |
| TestCafe Configuration                                                                                       | **_.testcaferc.json_** -> configuration for browser, videos, screenshots                                                                                                 |
| POM Pages and Defined Tests                                                                                  | **_pages/ecommerce-pages_** -> pom pages defining selectors & methods, **_test/ecommerce-test_** -> tests implementing the pom pages                                     |
| Testcafe Allure Reports                                                                                      | **_doc-allure-config_** -> configuration for allure report, **_test/testcafe-basic-examples/allureReportMetaInfoTest.js_** -> test for generating Meta for allure report |

# Running The Test(s)
[Checkout Official Documentation for Running Tests](https://testcafe.io/documentation/402830/guides/basic-guides/run-tests)

| Command                                                                                                                                                    | Example                                                                                                                                             |
| ---------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| Running Single Test - **testcafe <specify-browser> <specify the test with path>**                                                                          | testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js                                                                                   |
| Running Test based on Meta Tags - **testcafe <specify-browser> <specify the test with path> --test-meta <key=value>**                                      | testcafe chrome test/testcafe-basic-examples/testMetaScriptTest.js --test-meta severity=p2                                                          |
| Running All The Tests in All The Available Browsers - **testcafe all tests**                                                                               | testcafe all tests                                                                                                                                  |
| Running All The Tests in specified Directory - **testcafe <specify-browser> <specify the path containing tests>**                                          | testcafe chrome test/                                                                                                                               |
| Running Test ignore JS errors - **testcafe <specify-browser> <specify the test with path> --skip-js-errors**                                               | testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js --skip-js-errors                                                                  |
| Running Test with Debug Mode for Failed Cases - **testcafe <specify-browser> <specify the test with path> --debug-on-fail**                                | testcafe chrome test/testcafe-basic-examples/debugModeTest.js --debug-on-fail                                                                       |
| Running Test and capturing Screenshot on Failures - **testcafe <specify-browser> <specify the test with path> -s -takeOnFails=true**                       | testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js -s takeOnFails=true                                                               |
| Running Test with multiple Browser instances - **testcafe -c <specify no of instances> <specify-browser> <specify the test with path>**                    | testcafe -c 5 chrome test/testcafe-basic-examples/firstSelectorTest.js                                                                              |
| Running Test with multiple Browsers - **testcafe <specify-browser1> <specify-browser2 <specify the test with path>**                                       | testcafe chrome,firefox test/testcafe-basic-examples/firstSelectorTest.js                                                                           |
| Running Test In Live Mode - **testcafe <specify-browser> <specify the test with path> -L**                                                                 | testcafe chrome ./test/testcafe-basic-examples/firstSelectorTest.js -L                                                                              |
| Running Test Via NPM(should have scripts defined in package.json) - **npm run <script-name>**                                                              | npm run test:chrome                                                                                                                                 |
| Running Test and capturing Videos on Failures - **testcafe <specify-browser> <specify the test with path> --video <path> --video-options failedOnly=true** | testcafe chrome test/testcafe-basic-examples/firstSelectorTest.js -s takeOnFails=true --video test-artifcats/videos --video-options failedOnly=true |

## Useful NPM Commands

1. To clean install node_modules

    `npm clean-install`

2. To remove packages

   `npm uninstall <package-name>`

3. To move packages from devDependencies to Dependencies

   `npm i <module_name> -P`

## Known Issues

Please check **[Issues](https://github.com/sritaj/TestCafe_UIAutomation/issues)** for any open issues/known caveats

## Troubleshoots

### Issues with Running Tests in Docker

1. Tests are not running in chrome,firefox browser in Docker container -> In Docker container, use the `chrome:headless` or `firefox:headless` version
2. Test-output is not getting copied to Local system -> Check Volume Mappings in Docker compose file as per the Local Environment
3. Running Docker Image in Interactive Mode -> Comment out Entrypoint with # in Docker file, build the docker image and use the command `docker run -it <imagename>`
