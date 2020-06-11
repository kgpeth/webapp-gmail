const onOpen = () => {
  SpreadsheetApp.getUi()
    .createMenu('➫ MailMan')
    .addItem('Show Sidebar', 'showSidebar')
    .addSeparator()
    .addItem('Creditss', 'showCredits')
    .addToUi();
};
export default onOpen;
