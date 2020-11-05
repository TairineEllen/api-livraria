# API Livraria - CRUD Completo

<img src="https://i.ibb.co/5Gr2mFr/undraw-a-better-world-9xfd.png" alt="mulher em pé em frente a uma janela" border="0" width = "200" />

CRUD completo, ainda sem integração com banco de dados, com base nas orientações das semanas [09](http://https://github.com/reprograma/On9-Accenture-S10-API-PUT-PATCH "09") e [10](https://github.com/reprograma/On9-Accenture-S10-API-PUT-PATCH "10") do curso de back-end da {reprograma}.

---

Você foi contratada para fazer a implementação de um sistema de uma livraria no centro de Recife.

1 - A contratante espera que, no sistema, ela possa fazer a inclusão de seu estoque contendo as seguintes informações:

- Livros:
	- id
	- título
	- autoria
	- editora
	- em estoque

2 - A mesma livraria decidiu integrar um sisteminha em que será possível a adição de seus funcionários. A contratante espera que no sistema ela possa fazer a inclusão dos dados de cada um deles, contendo:

- Funcionários:
	- id
	- nome
	- idade
    - cargo

3 - Nossa livraria gostaria de garantir que será possível a exclusão do registro de determinado livro.

4 - Eles também desejam que seja possível a exclusão do registro de um funcionário.

5 - Nossa contratante espera que seja possível o acesso a uma lista completa com todos os livros do estoque.

6 - Eles também adorariam ter acesso a uma lista com todos os funcionários.

7 - Seria de grande valia se nossa livraria tivesse acesso a uma lista com todos os livros por categoria.

8 - A livraria gostaria de ter acesso a idade de um funcionário, de acordo com seu id.

9 - A livraria gostaria de poder atualizar todas as informações de um determinado livro.

10 - E também gostaria de poder atualizar uma ou mais informações específicas de um determinado livro.

11 - A contratante também precisa de um método para atualizar todas as informações de um determinado funcionário.

12 - E finalmente, a contratante pede um método para atualizar uma ou mais informações específicas de um determinado funcionário.

---

Com base nas instruções acima, os seguintes contratos estão disponíveis:

#### Contratos disponíveis

| Verbo        | Recurso                                          | Descrição                             |
| ------------ | ------------------------------------------------ | ------------------------------------- |
| GET          | `/livros`                                        | Retornar os livros em estoque             |
| GET          | `/livros/editoras`                               | Retornar os livros agrupados por editora |
| GET          | `/funcionarios`                                   | Retornar todos os funcionários                  |
| GET          | `/funcionarios/:id/idade`                         | Acessar idade de um determinado funcionário   |
| POST         | `/livros`                                         | Cadastrar livro no estoque                     |
| POST         | `/funcionarios`                                 | Cadastrar funcionário        |
| PUT          | `/livros/:id`                                   | Atualizar todas as informações de um livro           |
| PUT          | `/funcionarios/:id`             | Atualizar todas as informações de um funcionário                   |
| PATCH        | `/livros/:id`                   | Atualizar uma ou mais informações de um livro                        | 
| PATCH        | `/funcionarios/:id`                              | Atualizar uma ou mais informações de um funcionários   |
| DELETE       |  `/livros/:id`                       | Excluir um livro              |
| DELETE       |  `/funcionarios/:id`                       | Excluir um funcionários              |

---



##### Pacotes utilizados

- Express
- Nodemon




