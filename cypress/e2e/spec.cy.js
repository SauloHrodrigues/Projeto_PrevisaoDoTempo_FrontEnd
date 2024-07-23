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
  })
})