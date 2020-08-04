<p align="center">
  <img src="./readme/Home.png"/>
</p>

## 📑 Sumário
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Design](#-design)
- [Licença](#-licença)

## 💡 Sobre o Projeto
Criação do Proffy, uma plataforma para conexão professores e alunos.

## 🚀 Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- ReactJS
- React Native
- TypeScript
- HTML5 e CSS3
- NodeJS

## 🎨 Design 
Design feito por [Tiago Luchtenberg](https://www.instagram.com/tiagoluchtenberg/)
  
#### 🖥 Desktop
|<img src="./readme/preview-web.png" width=500 />|<img src="./readme/Formulário.png" width=500 /> |  
|---|---|


### 📱 Mobile
|<img src="./readme/preview-mobile.png" width=300 />|<img src="./readme/Home-mobile.png" width=300 /> |  
|---|---|

## Funcionalidades do Back-end

### Conexões
- Rota para listar o total de conexões realizadas
- Rota para criar uma nova conexão

### Aulas
- Rota para criar uma aula
- Rota para listar aulas
  - Filtrar por matéria, dia da semana e horário

# 📚 Instalação e Configuração das bibliotecas
O Node e o Yarn já devem estar instalados. 

Criar uma pasta 'server' que vai conter nossa aplicação.

**Iniciar o node na pasta** _(cria o arquivo 'package.json')_: `yarn init -y`

**Instalar o Express** _(cria a pasta 'node_modules' e o arquivo 'package-lock.json')_: `yarn add express -D`

**Instalar a definição de tipos do Express**: `yarn add @types/express -D`

**Instalar o Typescript**: `yarn add typescript -D`

**Iniciar o TSC (TypeScript Compiler)** _(cria o arquivo 'tsconfig.json')_: `yarn tsc --init`

**Instalar o TS-Node-DEV**: `yarn add ts-node-dev -D`

**Instalar o knex e o sqlite:** `yarn add knex sqlite3`

Criar uma nova pasta 'src'e um arquivo 'server.ts' dentro dessa pasta.


## Configuração do TS-Node-DEV

Na fase de desenvolvimento utilizaremos o TS-Node-Dev, uma solução mais rápida que possui muitas funcionalidades que o TSC. O TS-Node-Dev vai compilar nossos arquivos .ts (mesma função do TSC) e também reiniciar o projeto quando o arquivo é modificado (mesma função de um Nodemom por exemplo). No arquivo 'package.json', vamos configurar o script para rodar o servidor pelo TS-Node-Dev e também já vamos aproveitar para criar um script de criação de migrations pelo Knex. 

<img src="https://ik.imagekit.io/dxwebster/Screenshot_2_UJfmFC1Zf.png" />

A partir de agora, para iniciar o servidor, basta executar `yarn dev:server`
E quando formos criar nossas migrations, utilizaremos o comando `knex:migrate`

## Configurações do Knex

Na pasta src, criar uma pasta 'database' e um arquivo 'connection.ts'. Esse arquivo será responsável pela nossa conexão com o banco de dados. Vamos criar uma função que do Knex que procura na pasta 'database' um arquivo chamado 'database.sqlite' para fazer a conexão com o banco de dados.

```ts
import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;
```
Na mesma pasta 'database' vamos criar uma subpasta 'migrations'. As migrations vão servir como um histórico do banco de dados.

```ts
import knex from 'knex';
import path from 'path';

const db = knex({
  client: 'sqlite3',
  connection: {
    filename: path.resolve(__dirname, 'database.sqlite')
  },
  useNullAsDefault: true,
});

export default db;
```



## 📕 Licença
Todos os arquivos incluídos aqui, incluindo este * README *, estão sob [Licença MIT](./LICENSE).
Criado por [Adriana Lima](https://github.com/dxwebster)
