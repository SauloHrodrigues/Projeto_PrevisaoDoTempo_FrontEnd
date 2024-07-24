describe('tela de cadastro', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Cadastrar cidade com sucesso', ()=> {
    cy.get('.ant-input').type("Campinas");
    cy.get('.ant-picker-input > input').type("2024-09-12");
    cy.get(':nth-child(1) > .sc-cBYhjr').type("25");
    cy.get(':nth-child(2) > .sc-cBYhjr').type("30");
    cy.get('#turnoSelecionado > :nth-child(1)').click();
    cy.get('#precipitacao > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type("5");
    cy.get('#umidade > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type("12");
    cy.get('#velocidadeDoVento > .ant-input-number > .ant-input-number-input-wrap > .ant-input-number-input').type("50");
    cy.get('.ant-select-selector').click();
    cy.get('.ant-select-item-option').contains('Chuvoso').click();
    cy.get('.cucyjA').click();
    cy.wait(5000);
    cy.visit('http://localhost:3000/listardados')
    cy.get('[style="width: 458px; height: 40px; border-radius: 6px; border: 2px solid rgb(65, 74, 186); margin-bottom: 10px; display: flex; align-items: center;"] > input').type('Campinas').type('{enter}');
    cy.get('.ant-space > :nth-child(2) > a').click();
    cy.get('.ant-btn-primary > span').click();
  })
})