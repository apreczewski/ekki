# IDE VScode

## settings

> Configuração eslint auto-save

```json
"eslint.autoFixOnSave": true,
  "eslint.validate": [
    {
      "language": "javascript",
      "autoFix": true
    },
    {
      "language": "javascriptreact",
      "autoFix": true
    },
    {
      "language": "typescript",
      "autoFix": true
    },
    {
      "language": "typescriptreact",
      "autoFix": true
    }
  ],
```

# Configuração do projeto

**Dependencies**

- Server:

  > express

- ORM:

  > sequelize

- Postgres:

  > pg
  > pg-hstore

**DevDependencies**

- Padrão de código airbnb:

  > eslint
  > prettier
  > eslint-config-prettier
  > eslint-plugin-prettier
  > eslint-config-airbnb-base

- Síntese (import/export):

  > sucrase

- Reiniciar server:

  > modemon

- Digitar por linha de comando:

  > sequelize-cli

- Comando para o eslint salvar todos arquivos com extenção .js

  ```
  yarn eslint --fix src --ext .js
  ```

- criar docker para postgres
  ```
  docker run --name database -e POSTGRES_PASSWORD=docker -p 5432:5432 -d postgres
  ```

# Arquitetura MVC

**Arquitetura Pastas**

- src
  > Pasta raiz do projeto.
  - app
  - controllers
  - models
- app.js
  > Pasta raiz do projeto.
- routes.js
  > Configuração das rotas da aplicação
- server.js
  > Configuração do servidor da aplicação.
- .editorconfig
  > Configuração padronização de editor.
- .prettierrc.js
  > Configuração prettier, sob escrever regras com base no eslint.
- .eslintrc.js
  > Configuração do eslint style Airbnb, padrão de código da aplicação.
- .sequelizerc
  > Responsável de exportar os caminhos da aplicação.
- nodemon.json
  > Configuração da extenção do nodemon de js para sucrase-node .

# UML

![](https://github.com/apreczewski/ekki/blob/master/backend/tmp/ekki.png)
