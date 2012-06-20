nuxeo-marketplace-sample
========================

Sample project for building a Marketplace package.

That sample MP (Marketplace Package) will deploy the [nuxeo-sample-project](https://github.com/nuxeo/nuxeo-sample-project/) into a Nuxeo CAP.

See [documentation on Creating Packages for the Marketplace](http://doc.nuxeo.com/x/CwIz).
Marketplace packages is a powerful packaging system when extending Nuxeo.
It improves your development process (for instance by allowing you to better automate the integration tests) but it also greatly improves
the deployment process. For instance, with Marketplace packages you can easily send upgrades to your production team either as a ZIP, either
directly from the Nuxeo Admin Center (where the administrator will see a new package is available).
Moreover, the Marketplace packaging system automatically maintains a bundles registry: you don't have anymore to know what files (especially the third-party libraries)
must be added or removed to or from your server.

Content listing:

    .
    |-- README.md
    |-- ear                                 * EAR like archive of the new distribution
    |   |-- pom.xml
    |   `-- src
    |       `-- main
    |           |-- assemble
    |           |   `-- assembly.xml          ** EAR assembly
    |           `-- resources                 ** Optional template resource
    |               `-- sample
    |                   `-- nuxeo.defaults
    |
    |-- marketplace                         * Marketplace Package
    |   |-- pom.xml
    |   |-- src
    |   |   `-- main
    |   |       |-- assemble
    |   |       |   `-- assembly.xml          ** MP assembly
    |   |       `-- resources
    |   |           |-- install.xml           ** MP install instructions
    |   |           `-- package.xml           ** MP description
    |   `-- target                            ** Output directory with MP ZIP
    |
    |-- ftest
    |   |-- funkload                        * Functional or performance tests with Funkload
    |   |   |-- itests.xml
    |   |   |-- pom.xml
    |   |   `-- README.txt
    |   |
    |   |-- selenium                        * Functional tests with Selenium
    |   |   |-- itests.xml
    |   |   |-- pom.xml
    |   |   `-- tests                         ** Testing suites
    |   |       `-- suite.html                ** Sample empty test suite
    |   |
    |   `-- webdriver                       * Functional tests with WebDriver
    |       |-- itests.xml
    |       |-- pom.xml
    |       `-- src
    |           `-- test                      ** Java and resources test files
    |               |-- java
    |               |   `-- com
    |               |       `-- nuxeo
    |               |           `-- functionaltests
    |               |               `-- ITLoginLogoutTest.java
    |               `-- resources
    |                   `-- log4j.xml
    `-- pom.xml

The assemblies are using [org.nuxeo.build:nuxeo-distribution-tools](https://github.com/nuxeo/nuxeo-distribution-tools).

The functional tests are using [org.nuxeo:nuxeo-ftest](https://github.com/nuxeo/tools-nuxeo-ftest).
