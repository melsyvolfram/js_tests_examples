const { I } = inject();
const assert = require('assert');

module.exports = {
  // LOCATORS
  input: '[class="search-input"]',
  input_text: '[data-target="qbsearch-input.inputButtonText"]',
  input_overlay: '[data-target="qbsearch-input.queryBuilder"]',
  prompt: '[class*="search-feedback-prompt"] a[class*="Link"]',
  action_list_item: '[class="ActionListItem-label text-normal"] span',
  action_list_item_description: '[class="ActionListItem-description QueryBuilder-ListItem-trailing"]',


  // METHODS
  async fillOverlayAndSearch(text) {
    I.waitForVisible(this.input_overlay);
    I.seeTextEquals('Search syntax tips', this.prompt);
    const link = await I.grabAttributeFrom(this.prompt, 'href');
    assert.strictEqual(link, 'https://docs.github.com/en/search-github/github-code-search/understanding-github-code-search-syntax');
    I.fillField(this.input_overlay, text);
    I.waitForVisible(this.action_list_item);
    I.seeTextEquals(text, this.action_list_item);
    I.seeTextEquals('Search all of GitHub', this.action_list_item_description);
    I.click(this.action_list_item);
  }

}
