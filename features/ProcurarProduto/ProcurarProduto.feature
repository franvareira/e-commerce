#language: pt
#enconding: utf-8

@Teste

Funcionalidade: Prcourar Produto
Como um consumidor  
Eu quero procurar por produtos
Para poder visualizar e adquirir os mesmos 

Contexto:
Dado que eu tenha acessado o e-comerce

Esquema do Cenário: Buscar Produto 
Dado que eu clico e insiro <item> no campo Procurar produtos
Quando clico no botão de pesquisa
Então eu devo ver o resultado da procura conforme o item buscado
Então eu devo clicar no produto para visualizar
E adicionar o produto ao carrinho de compras
Então o produto deverá ser adicionado ao carrinho de compras

Exemplos:
| item   |
| batman |
| ps3    | 




