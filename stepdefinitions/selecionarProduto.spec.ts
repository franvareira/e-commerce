import { browser, element, by } from 'protractor';
import { defineSupportCode } from 'cucumber';
import { selecionaProduto } from "../pages/selecionaProduto.po";
import { get } from 'https';
import { async } from 'q';



let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;

defineSupportCode(function ({ Given, When, Then }) {

    
    let buscaProduto: selecionaProduto = new selecionaProduto();
    

    Given('que eu tenha acessado o e-comerce', async () => {
        await browser.sleep(5000);
        return await expect(buscaProduto.h4Topo.getText()).to.eventually.equal('PAINEL DE LOJA DEMO');
    });

    Given('que eu clico e insiro {item} no campo Procurar produtos', async(item)=>{
        await browser.sleep(3000);
        await buscaProduto.inputProcurar.click();
        await buscaProduto.inputProcurar.sendKeys(item);
    });

    When('clico no botão de pesquisa', async () => {
        await buscaProduto.botãoPesquisar.click();
        await expect(buscaProduto.resultadoProcura.getText()).to.eventually.equal('Produtos encontrados: 5');    

    }); 

    Then('eu devo ver o resultado da procura conforme o item buscado', async () => {
        await expect(buscaProduto.divTítuloProduto.isDisplayed()).to.eventually.equal(true);
    
    });
    
    Then('eu devo clicar no produto para visualizar', async () => {
        await browser.sleep(5000);
        await buscaProduto.títuloProduto.click();        
    });
    
    Then('adicionar o produto ao carrinho de compras', async () => {
        await buscaProduto.botãoAdicionarCarrinho.click();
        await browser.sleep(10000);
    }); 
    
    Then('o produto deverá ser adicionado ao carrinho de compras', async () => {
        var iconeCart = element(by.css('div#sw_dropdown_8.ty-dropdown-box__title.cm-combination'));
        var listCarrinho = element(by.className('ty-cart-items'));
        await iconeCart.click();
        await browser.sleep(1000);
        await expect(listCarrinho.isDisplayed()).to.eventually.equal(true);
        
       
    });
        
   
    
});