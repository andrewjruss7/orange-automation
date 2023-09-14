import DirectoryPO from "./directoryPO"

describe('happy patch', () => {

const directoryPO = new DirectoryPO();

beforeEach(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.loginorange();
});

it('Search Directory', () => {

directoryPO.ClickmenuDirectory();
directoryPO.Clickautocompletarinput().type('Lisa');
directoryPO.Assert();
directoryPO.Clickselector();
directoryPO.ClickLocation();
directoryPO.Button();
directoryPO.directorycard();





});
});