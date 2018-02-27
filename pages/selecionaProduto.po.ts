import { $, element, by, browser } from 'protractor';



let chai = require('chai').use(require('chai-as-promised'));
let expect = chai.expect;


export class selecionaProduto {

public campoProcurar :any;
public inputProcurar :any;
public botãoPesquisar :any;
public resultadoProcura:any;
public divTopo:any;
public h4Topo:any;
public divTítuloProduto:any;
public títuloProduto:any;
public botãoAdicionarCarrinho :any;

    constructor() {
        this.campoProcurar = element(by.className('cm-processed-form'));
        this.inputProcurar = element(by.id('search_input'));
        this.botãoPesquisar= element(by.className('ty-search-magnifier'));
        this.resultadoProcura= element(by.id('products_search_total_found_11'));        
        this.divTopo= element(by.className('ty-top-panel__wrapper'));
        this.h4Topo= element(by.className('ty-top-panel__title'))             
        this.divTítuloProduto= element(by.className('ty-grid-list__item-name'));
        this.títuloProduto= element(by.className('product-title'));
        this.botãoAdicionarCarrinho = element(by.className('ty-btn__primary ty-btn__big ty-btn__add-to-cart cm-form-dialog-closer ty-btn'));

    }

    

    

}