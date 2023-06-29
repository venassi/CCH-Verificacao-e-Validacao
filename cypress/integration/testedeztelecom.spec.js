/// <reference types="cypress" />

describe('Testes abrindo os links do site', () => {
    it('Webmail', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get('[href="https://webmail.deztelecom.net.br/"]').click()
    
    });

    it('Trabalhe Conosco', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get('[href="https://docs.google.com/forms/d/e/1FAIpQLSeQBxzlbifNLmzAEhJgTzYNhrNKDK-gxElQiiODcZMjgtdvFg/viewform"]').click()

    });

    it('2 via do boleto', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get('[href="https://chat.deztelecom.net.br:8445/3c507145-1ec3-4cb2-a293-a78d226edaff"]').click()

    });

    it('Área do Cliente', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get('.hidden-xs > .menu-topo-rolagem').click()

    });

});

describe('Testes acessando outras páginas', () => {
    it('Residencial', () => {

        cy.visit('https://site.deztelecom.net.br/');
        cy.get(':nth-child(1) > .menu-topo-rolagem').click()

    });

    it('Empresarial', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get(':nth-child(2) > .menu-topo-rolagem').click()

    });

    it('Suporte', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get(':nth-child(3) > .menu-topo-rolagem').click()

    });

    it('Quem Somos', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get(':nth-child(4) > .menu-topo-rolagem').click()

    });

    it('Contato', () => {
        
        cy.visit('https://site.deztelecom.net.br/');
        cy.get('.nav > :nth-child(5) > .menu-topo-rolagem').click()

    });

});

describe('Encaminhar os dados para contato', () => {
    it('Precisa falar conosco?', () => {

        cy.visit('https://site.deztelecom.net.br/');
        
        cy.get('.box-body > .col-sm-12 > :nth-child(3) > #nome').type('Usuário teste');
        cy.get('.box-body > .col-sm-12 > :nth-child(4) > #email').type('teste@gmail.com');
        cy.get('.box-body > .col-sm-12 > :nth-child(5) > #telefone').type('46 999256833');
        cy.get(':nth-child(6) > #mensagem').type('Testando o campo');
        cy.get('#cidadecont').select('Francisco Beltrão');
    });

});