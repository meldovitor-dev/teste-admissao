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

Front-end -> Não é meu forte, onde estou acostumado a adicionar ou solucionar algumas features, poucas vezes parei para tirar algo do zero, ficou com uma interface bem simples, mas funcional, nada acima da media.

Swagger -> Para acessar a documentção basta acessar a pagina principal do servidor.

Pacotes -> http://localhost:3000/pacotes

Acabei ficando um pouco atolado de ativades e nao dando conta do teste 100% entao alguns pontos que eu poderia ter feito ou melhorado:

* Ter um esqueleto do projeto (front-end)
* Ter uma trativa melhor de cada error (front-end)
* Ter telas intuitivas(front-end)
* Quando for criar uma operacao ter uma trazer uma lista de clientes cadastrados para atribuir a operacao (front-end)
* Todos os campos ter validacao e mascaras (front-end)
* melhorar listagem de operacoes e ter alguns filtros (front-end)
* Ter uma documentção mais explicativa (back-end)
* Refatorar o pacote caso for maior que o limite estabelecido (back-end)

[MIT](https://choosealicense.com/licenses/mit/)
