import { TaskManagementAppPage } from './app.po';

describe('task-management-app App', () => {
  let page: TaskManagementAppPage;

  beforeEach(() => {
    page = new TaskManagementAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
