## Teste frente-corretora

## Servidor

* https://app-frente-corretora.herokuapp.com

## Como usar

* Clonar o projeto
* Acessar a pasta front-end
* npm install
* npm start (o back-end ja esta hospedado na cloud)

## Explicando

Arquitetura -> Escolhi uma arquitetura um pouco diferente, baseado em camadas controladoras, onde consigo definir bastante cada responsabilidade, a camada "controller" tem as classes com seus metodos que cuida de toda a regra de dados e de negocio, a camada "data" corresponde a conexcao com o banco, "model" responsavel tela propriedades do banco e sua persistencia e "router" por receber a requisicao e enviar para o controlador.

Banco de dados -> Escolhi usar o mongoDb com a ORM mongoose, consiguindo fazer "relações", utilizando alguns métodos da orm e do mongo.

Back-end ->Aqui é mais minha praia onde me sinto mais confortavel, demorei um pouco para entender como iria ser o fluxo de dados, e acho que acabei fazendo da melhor forma, onde ficou mais perfomatico e definido.

Front-end ->Não é muito meu forte, onde estou acostumado a adicionar ou solucionar algumas features, poucas vezes parei para tirar algo do zero, ficou com uma interface bem simples, mas, funcional nada muito acima da media.

Pontos que poderia ser feito ou melhorado:

* Ter um esqueleto do projeto (designer)
* Ter uma trativa melhor de cada error
* Ter uma definicao melhor de pastas
* Todos os campos ter validacao e mascaras

Swagger - Para acessar a documentção basta acessar a pagina principal do servidor

[MIT](https://choosealicense.com/licenses/mit/)
