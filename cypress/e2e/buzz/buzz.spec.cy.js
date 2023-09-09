import BuzzPO from "./buzzPO";

describe('happy patch', () => {

const buzzPO = new BuzzPO();

beforeEach(() => {
  cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  cy.loginorange();
});

it('Crear Comentario', () => {

buzzPO.MenuBuzz();
buzzPO.Input().type('Bendecido día');
buzzPO.Button();
buzzPO.Successmessage();




});
});