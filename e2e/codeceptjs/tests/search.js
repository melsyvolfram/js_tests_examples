const { I, mainPage, searchResultsPage, searchComponent } = inject();

Feature('Search');

Scenario('Search from main page', async () => {
  I.amOnPage('');
  I.waitForVisible(mainPage.header_menu);
  within(mainPage.header_menu, () => {
    I.seeElement(searchComponent.input);
    I.seeTextEquals('Search or jump to...', searchComponent.input_text);
    I.click(searchComponent.input);
  });
  const text = 'veryLongTextForSearchWhichWillNotBeFound';
  await searchComponent.fillOverlayAndSearch(text);
  I.waitUrlEquals(`/search?q=${text}&type=repositories`);
  await searchResultsPage.whenNothingWasFound();
  I.see(text, searchComponent.input_text);
}).tag('@search').tag('@smoke');
