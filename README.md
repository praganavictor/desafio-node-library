# desafio-node-library
Uma api para gerenciar uma biblioteca.

## Testando rotas:
- Abra o arquivo desafio-node-library que está na raiz do projeto.
- Copie o conteudo todo o conteudo.
- Abra o insomnia e no canto superior direito clique em "Create", Clipboard.
- Acesse a node_library.
- Após fazer o login, "No Environment" e "Manage Environments", altere o token para o recebido apos realizar o login ou registration na pasta User

## Iniciando o projeto:
  - Na pasta raiz do jogo utilize o comando "yarn" ou "npm install". 
  
### Testando rotas para usuarios:
  - POST /authenticate - Faz login na aplicação
  - POST /register - Registra um novo usuario na aplicação
  - GET /users - Lista todos os usuarios
  - GET /user/id - Retornar dados de um livro
  - PUT /user/id - Editar os dados de um usuario.
  - DELETE /user/id - Exclui os dados de um usuario.
  - PUT /user/favbook/iduser/idbook - Salvar livro na lista de favoritos de um usuário
 
### Testando rotas para livros:
  - GET /books - Listar todos os livros.
  - GET /books/id - Retornar dados de um livro.
  - POST /books - Salva os dados de um livro.
  - PUT /books/id - Edita os dados de um livro.
  - DELETE /books/id - Deleta os dados de um livro.
 