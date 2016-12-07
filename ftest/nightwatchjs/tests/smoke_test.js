module.exports = {
    'Sample Smoke Test' : function (browser) {
        var nuxeo = browser.page.nuxeo();
        nuxeo.navigate()
        .waitForElementVisible('body', 1000)
        .setValue('@username', 'Administrator')
        .setValue('@password', 'Administrator')
        .click('@submit')
        .waitForElementVisible('@welcomemsg', 5000)
        .assert.title('Nuxeo Platform - Domain')
        .assert.containsText('@welcomemsg', 'Enjoy the benefits of Nuxeo Online Services now');
        browser.end();
    }
}