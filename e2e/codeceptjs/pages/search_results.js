const { I } = inject();
const assert = require('assert');
const { config: { baseUrl } } = require('../codecept.conf');

module.exports = {
  // LOCATORS
  content: '[class*="search-results-page"]',
  heading: '[class*="search-results-page"] [class*="Heading"]',
  text_under_heading: '//*[contains(@class,"search-results-page")]//*[contains(@class,"Heading")]/../p',
  img_searching: '[class*="search-results-page"] img[alt="Mona looking through a globe hologram for code"]',

  // METHODS
  async whenNothingWasFound() {
    I.waitForVisible(this.content);
    I.see('Your search did not match any repositories', this.heading);
    I.see('You could try one of the tips below.', this.text_under_heading);
    I.seeElement(this.img_searching);
    const img_src = await I.grabAttributeFrom(this.img_searching, 'src');
    assert.strictEqual(img_src, `${baseUrl}/images/modules/search/light.png`);
  }

}
