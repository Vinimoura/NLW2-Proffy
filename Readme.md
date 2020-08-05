<p align="center">
  <img src="./readme/Home.png"/>
</p>

# 📑 Índice
- [Sobre o Projeto](#-sobre-o-projeto)
- [Tecnologias utilizadas](#-tecnologias-utilizadas)
- [Design](#-design)
- [Instalação e Configuração das bibliotecas](#-instalação-e-configuração-das-bibliotecas)
  - [Configuração de scripts de desenvolvimento](#configuração-de-scripts-de-desenvolvimento)
  - [Configurações do Knex](#configurações-do-knex)
  - [Configurações do Sqlite](#configurações-do-sqlite)
- [Server](#server)
- [Criação das Tabelas](#criação-das-rabelas)
  - [Tabela de Usuários](#tabela-de-usuários)
  - [Tabela de Aulas](#tabela-de-Aulas)
  - [Tabela de Agendamento das Aulas](#tabela-de-agendamento-das-aulas)
  - [Tabela de Conexões](#tabela-de-conexões)
- [Função para lidar com os Horários](#função-para-lidar-com-os-Horários)
- [Controllers](#controllers)
	- [Controller de Aulas](#controller-de-aulas)
	- [Controller de Conexões](#controller-de-conexões)
- [Rotas](#rotas)
- [Licença](#-licença)

# 💡 Sobre o Projeto
Criação do Proffy, uma plataforma para conexão professores e alunos.

# 🚀 Tecnologias utilizadas
O projeto foi desenvolvido utilizando as seguintes tecnologias:

- ReactJS
- React Native
- TypeScript
- HTML5 e CSS3
- NodeJS

# 🎨 Design 
Design feito por [Tiago Luchtenberg](https://www.instagram.com/tiagoluchtenberg/)
  
## Desktop
|<img src="./readme/preview-web.png" width=500 />|<img src="./readme/Formulário.png" width=500 /> |  
|---|---|


## Mobile
|<img src="./readme/preview-mobile.png" width=300 />|<img src="./readme/Home-mobile.png" width=300 /> |  
|---|---|


# Front-end

Vamos criar uma pasta 'web' que vai conter nossa aplicação. 

**Instalar o Template de aplicação de react em Typescript**: `yarn create react-app web --template typescript`

Agora, dentro da pasta 'src' vamos criar uma pasta 'assets' e uma subpasta 'images'. Nela deixaremos as imagens da nossa página.

## Limpar estrutura do Template
Vamos fazer algumas alterações em arquivos do template que não vamos utilizar, ou que vamos recriar depois. 
- Excluir Todos os arquivos .css
- Na pasta 'public' deixar apenas o index.html
- Excluir o Readme.md
- Excluir o App.test.tsx
- Excluir o logo.svg
- Excluir o serviceWorker.ts
- Excluir o setupTests.ts
- Abrir os arquivos 'index.tsx', App.tsx' e 'index.html' e remover as linhas que chamavam os arquivos que excluímos


## Estilos Globais
A construção do layout da nossa aplicação seguirá o conceito de Mobile First, ou seja, primeiro estilizaremos o layout para dispositivos mobile e depois trabalharemos nas media-querys para ajusta-los as outras telas maiores.

Dentro da pasta 'assets' vamos criar uma subpasta 'styles' e dentro dela um arquivo 'global.css'. Nesse arquivo teremos estilizações globais que servirão para todo o projeto.
Vamos usar unidades de medidas do css que são adaptáveis a diferentes telas, para termos um layout responsivo (ex: rem, vh e vw). Para acessar o estilo completo, clicar [aqui]().
Abaixo, vamos comentar alguns pontos importantes:


Com o border-box, o width e height incluem o tamanho padding size e a propriedade border, mas não incluem a propriedade margin:
```css
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box; 
}
```

Nas nossas divs html, body e root vamos setar a altura de 100vh para que a página ocupe a altura total da tela:
```css
html, body, #root{
  height: 100vh;
}
```

Na div #root, vamos usar o flex-box com o `display: flex`. Ele transforma em flex container e todos os seus filhos diretos em flex itens.
Com o `align-items: center`, todo o conteúdo fica alinhado horizontalmente e com o `justify-content: center` todo conteúdo fica justificado ao centro da tela:
```css
#root{
  display: flex; 
  align-items: center;
  justify-content: center;
}
```

Vamos setar as fontes para que aumente em 60% o tamanho da fonte principal, para isso vamos colocar 1.6rem:

```css
body, input, button, textarea{
  font: 500 1.6rem Poppins;   
}
```
Nosso container vai ocupar 90% da tela com máximo de até 700px:

```css
.container{
  width: 90vw;
  max-width: 700px; 
}
```

# Component: Landing Page
Na pasta 'scr' criar uma pasta 'pages' e uma subpasta 'Landing' com um arquivo 'index.tsx', para criar nosso primeiro componente "Landing" que conterá o conteúdo principal da nossa Homepage. O componente do React é uma função (com letra maiúscula) que retorna um html. Vamos começar importando o React e depois o component 'Link' padrão do React.

```tsx
import React from 'react';
import { Link } from 'react-router-dom';

// Para inserir imagens no JSX precisamos importar cada imagem em variáveis 
import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg';

import './styles.css';

function Landing() {
    return (
        <div id="page-landing">
            <div id="page-landing-content" className="container">
                
                <div className="logo-container">
                    <img src={logoImg} alt="Proffy" />
                    <h2>Sua plataforma de estudos online.</h2>
                </div>

                <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

                <div className="buttons-container">
                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Study"/>
                        Estudar
                    </Link>
                
                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Give classes"/>
                        Dar Aulas
                    </Link>
                </div>

                <span className="total-connections">
                    Mais de 200 conexões
                    <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>

            </div>
        </div>
    )
}

export default Landing;
```

Agora vamos criar um estilo específico dessa página em um arquivo 'styles.css' dentro do mesmo diretório do 'index.ts'. Para acessar o estilo completo, clicar [aqui]().
Abaixo, vamos comentar alguns pontos importantes desse estilo:

Ao colocar a imagem principal em 100%, fazemos com que ela não sobressaia o tamanho total da tela:

```css
.hero-image {
    width: 100%;
}
```

Temos um container para os botões que também setaremos como flex:

```css
.buttons-container {
  display: flex;
  justify-content: center;
  margin: 3.2rem 0;
}
```

Da mesma forma, faremos com os botões que também serão um container para os ícones e os textos.

```css
.buttons-container a {
  width: 30rem;
  height: 10.4rem;
  border-radius: 0.8rem;
  margin-right: 1.6rem;
  font: 700 2.0rem Archivo;

  display: flex;
  align-items: center;
  justify-content: center;

  text-decoration: none;
  color: var(--color-button-text);

  transition: background-color 0.2s;
}
```

Vamos agora fazer um break-point de 1100px que é onde mais ou menos a tela vai se converter em tamanho de desktop. Agora vamos usar o estilo display: grid, onde podemos simplesmente indicar aonde cada elemento se posicionará, seguindo a estrutura de linhas e colunas.

- Com o `grid-template-rows`, setamos 2 linhas: A primeira linha vai ocupar a altura de 350px e a segunda vai ocupar o espaço que sobrar
- Com o `grid-template-columns`,  setamos 3 colunas, onde a primeira ocupa 2 espaços e as outras duas ocupam 1 espaço cada.
- Com o `grid-template-areas`, eu crio 'variáveis' que vão indicar cada elemento

```css
@media (min-width: 1100px) {

  #page-landing-content {
    max-width: 1100px;
    display: grid;
    grid-template-rows: 350px 1fr; 
    grid-template-columns: 2fr 1fr 1fr; 
    grid-template-areas: 
    "logo hero hero"
    "buttons buttons total"
    ;
  }
```
Agora para cada estilo de elemento, eu informo a qual variável ele corresponde, com o estilo `grid-area`. Ou seja, vou definir os estilos do logo, hero, buttons e total.

```css
    .logo-container {
        grid-area: logo;
        align-self: center;
        text-align: left; 
        margin: 0;
    }

    .logo-container h2 {
        text-align: initial; 
        font-size: 3.6rem;
    }

    .logo-container img {
        height: 100%;
    }

    .hero-image {
        grid-area: hero;
        justify-self: end; 
    }

    .buttons-container {
        grid-area: buttons;
        justify-content: flex-start; 
    }

    .buttons-container a {
        font-size: 2.4rem;
    }
    
    .total-connections {
        grid-area: total;
        justify-self: end;
    }
  }
    
```









# Component: App
Teremos um componente principal que colocaremos no nosso 'index.tsx' que conterá todos os outros componentes da aplicação. Nas primeiras linhas vamos fazer a importação do React, do arquivo de rotas e do nosso estilo global. Vamos criar o componente App como uma função que retorna as rotas.

```tsx
import React from 'react';
import Routes from './routes';
import './assets/styles/global.css';


function App() {
  return (
    <Routes/>
  );
}

export default App;
```



# Back-end
O Node e o Yarn já devem estar instalados. 
Criar uma pasta 'server' que vai conter nossa aplicação.


## 📚 Instalação e Configuração das bibliotecas

**Iniciar o node na pasta** _(cria o arquivo 'package.json')_: `yarn init -y`

**Instalar o Express** _(cria a pasta 'node_modules' e o arquivo 'package-lock.json')_: `yarn add express -D`

**Instalar a definição de tipos do Express**: `yarn add @types/express -D`

**Instalar o Typescript**: `yarn add typescript -D`

**Iniciar o TSC (TypeScript Compiler)** _(cria o arquivo 'tsconfig.json')_: `yarn tsc --init`

**Instalar o TS-Node-DEV**: `yarn add ts-node-dev -D`

**Instalar o knex e o sqlite:** `yarn add knex sqlite3`

**Instalar o CORS:** `yarn add cors`

**Instalar a definição de tipos do CORS:** `yarn add @types/cors`

Depois de todas as dependências instaladas, vamos criar uma pasta 'src' que vai conter nossos arquivos.

## Configuração de scripts de desenvolvimento
No arquivo 'package.json', vamos configurar o script para rodar o servidor pelo TS-Node-Dev e também já vamos aproveitar para criar um script de criação de migrations pelo Knex. 
O TS-Node-Dev vai compilar nossos arquivos .ts (mesma função do TSC) e também reiniciar o projeto quando o arquivo é modificado (mesma função de um Nodemom, por exemplo). 

<img src="https://ik.imagekit.io/dxwebster/Screenshot_2_UJfmFC1Zf.png" />

- A partir de agora, para iniciar o servidor, basta executar `yarn dev:server`
- E quando formos criar nossas migrations, utilizaremos o comando `knex:migrate`

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
Agora na pasta 'src' vamos criar um arquivo 'knexfile.ts' para configuração do knex com o caminho da nossa pasta migrations:

```ts
import path from 'path';

module.exports = {
    client: 'sqlite3',
    connection: {
        filename: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    migrations: {
        directory: path.resolve(__dirname, 'src', 'database', 'database.sqlite')
    },
    useNullAsDefault: true,
}
```

## Configurações do Sqlite
Para visualizarmos nossas tabelas, usaremos a extensão 'SQLite' do VScode. Depois de instalar, basta clicar com o botão direito  em cima do arquivo 'database.sqlite' e selecionar 'Open Database'. Vai abrir uma aba SQLITE EXPLORER no menu lateral do VSCode para visualizarmos as tabelas que vamos criar para a aplicação.

# Server
Na pasta 'src', vamos criar um arquivo 'server.ts'. O server será o arquivo principal da nossa aplicação. Já configuramos um script para rodar ele no terminal. Vamos começar importando o express, o cors e as rotas. Depois usaremos a função use() para indicar que usaremos formato json, o cors e as nossas rotas. Pelo método listen(), vamos adicionar a porta que nossa aplicação vai rodar, e uma mensagem para aparecer no terminal quando executarmos o servidor.

```ts
import express from 'express';
import cors from 'cors';
import routes from './routes';

const app = express();
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen('3333', () => {
  console.log('> Servidor rodando em http://localhost:3333');
});
```

# Criação das Tabelas 
Com as configurações principais feitas, vamos começar nossa aplicação pela criação das tabelas do banco de dados. Vamos criar 4 tabelas:

- Tabela de usuários (id, name, avatar, whatsapp, bio)
- Tabela de aulas (id, subject, cost, user_id)
- Tabela da agenda (week_day, from, to, class_id)
- Tabela de conexões (id, user_id, created_at)

Na mesma pasta 'database' vamos criar uma subpasta 'migrations'. As migrations vão servir como um histórico do banco de dados. Cada tabela ficará em um arquivo separadp dentro das migration, e importante criar cada arquivo numa ordem numérica crescente.

## Tabela de Usuários
Criar um arquivo '00_create_users.ts'. Seguindo a lógica das migrations, primeiro temos a função pra criar a tabela (up) e depois a função para deletar a tabela (down). Dentro da função up(), escrevemos cada coluna e sua característica (chave primária, obrigatoriedade, etc):

```ts
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('users', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('avatar').notNullable();
    table.string('whatsapp').notNullable();
    table.string('bio').notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('users');
}
```

## Tabela de Aulas
Criar um arquivo '01_create_classes.ts', para armazenar as aulas. Nessa tabela teremos uma coluna que faz relacionamento com a tabela 'users'. No campo user_id, vamos armazenar qual user será professor, ou seja, vamos associar um usuário à matéria que ele vai dar aula. E aproveitando, vamos também colocar mais duas informações para os seguintes casos:

- o que acontece com o professor se o id for alterado na tabela?
- o que acontece com as aulas desse professor caso ele seja deletado da plataforma?

Para resolver isso, vamos usar o método CASCADE. Ou seja, caso o id for alterado, será feita a alteração em todos os lugares que essa informação estiver. E caso o professor for deletado, todas as aulas associadas a ele também serem deletadas.

```ts
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('classes', (table) => {
    table.increments('id').primary();
    table.string('subject').notNullable();
    table.decimal('cost').notNullable();

    // Chave Estrangeira que permite relacionamento com a tabela 'users'
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('classes');
}
```

## Tabela de Agendamento das Aulas
Criar um arquivo '02_create_classes_schedules.ts', para armazenar as datas agendadas das aulas. Precisaremos fazer um relacionamento com a tabela 'classes', então teremos o campo 'class_id' como chave estrangeira para relacionar uma aula a um agendamento.

```ts
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('class_schedule', (table) => {
    table.increments('id').primary();
    table.integer('week_day').notNullable();
    table.integer('from').notNullable();
    table.integer('to').notNullable();
    
    // Chave Estrangeira que permite relacionamento com a tabela 'classes'
    table.integer('class_id')
      .notNullable()
      .references('id')
      .inTable('classes')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('class_schedule');
}
```

## Tabela de Conexões
Criar um arquivo '03_create_connections.ts'. Aqui vamos armazenar dados caso um usuário apenas tente uma conexão com um professor. Teremos apenas dois campos, o id do professor (chave estrangeira) que o user tentou a conexão e a hora que isso ocorreu. 

```ts
import Knex from 'knex';

export async function up(knex: Knex) {
  return knex.schema.createTable('connections', (table) => {
    table.increments('id').primary();
    
    // Chave Estrangeira que permite relacionamento com a tabela 'users'
    table.integer('user_id')
      .notNullable()
      .references('id')
      .inTable('users')
      .onUpdate('CASCADE')
      .onDelete('CASCADE');
    
    table.timestamp('created_at')
      .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      .notNullable();
  })
}

export async function down(knex: Knex) {
  return knex.schema.dropTable('connections');
}
```

# Função para lidar com os Horários
O banco SQL não consegue armazenar informações com  o formato de horas (ex: 8:00). Para resolver isso, vamos criar uma pasta 'utils' e um arquivo chamado 'convertHoursToMinutes.ts'. Nesse arquivo criaremos uma função que converte horas em minutos, assim conseguimos armazenar essa informação no banco de dados. Vamos utilizar essa função mais pra frente, quando  formos de fato fazer as querys para inserção das informações no banco de dados.

Atráves da função de js 'split()' vamos dividir a hora onde tem os dois pontos (8:00) e retornar ela num array. Com o map vou passar por todos os itens e armazenar cada posição em uma variável, fazendo uma desestruturação de hour (para a primeira posição) e minutes (para segunda posição). Logo abaixo faço a conversão e armazeno o resultado na variável 'timeInMinutes'.

```ts
export default function convertHourToMinutes(time: string) {
  const [hour, minutes] = time.split(':').map(Number);
  const timeInMinutes = (hour * 60) + minutes;
  return timeInMinutes;
}
```

# Controllers
Nossa aplicação gira em torno de duas entidades: aulas (classes) e conexões (connections). Para cada entidade, vamos fazer rotas para buscar (get) ou criar (post) alguma informação no banco de dados. 

- Conexões
  - Rota para listar o total de conexões realizadas
  - Rota para criar uma nova conexão

- Aulas
  - Rota para criar uma aula
  - Rota para listar aulas (Filtrar por matéria, dia da semana e horário)
  
Na pasta 'src' vamos criar uma pasta 'controllers' e dois arquivos 'ClassesController.ts' e 'ConnectionController.ts'


## Controller de Aulas
No arquivo 'ClassesController.ts', nas primeiras linhas vamos importar o express, o banco de dados e nossa função criada 'convertHourToMinutes()'.

```ts
import { Request, Response } from 'express';
import db from '../database/connection';
import convertHourToMinutes from '../utils/convertHourToMinutes';

// Interface que define o formato do ScheduleItem
interface scheduleItem {
  week_day: number,
  from: string,
  to: string
}

// Cria a class ConnectionsController para englobar as querys
export default class ConnectionsController {

// -------- Função que que lista as aulas filtradas --------
  async index(request: Request, response: Response){
    const filters = request.query;

    const subject = filters.subject as string;
    const week_day = filters.week_day as string;
    const time = filters.time as string;

// Nossa listagem só poderá ser feita caso tenha pelo menos um dos filtros.
// Para isso vamos fazer um if para caso não existir esses filtros, retornamos um erro.
    if(!filters.week_day || !filters.subject || !filters.time) {
      return response.status(400).json({
        error: 'Missing filters to search classes',
      })
    }

// Converte o horário enviado em minutos usando nossa função convertHourToMinutes()
    const timeInMinutes = convertHourToMinutes(time); 

// Agora vamos para a query de busca na tabela 'classes'.
// Com umas funções do knex conseguimos fazer algumas comparações para buscar aquilo que foi filtrado.
    const classes = await db('classes')
      .whereExists(function Exists() {
        this.select('class_schedule.*') // seleciona todos os campos da tabela 'class_schedule'
          .from('class_schedule')
          .whereRaw('`class_schedule`.`class_id` = `classes`.`id`')
          .whereRaw('`class_schedule`.`week_day` = ??', [Number(week_day)])
          .whereRaw('`class_schedule`.`from` <= ??', [timeInMinutes])
          .whereRaw('`class_schedule`.`to` > ??', [timeInMinutes]);
      })
      .where('classes.subject', '=', subject)
      .join('users', 'classes.user_id', '=', 'users.id')
      .select(['classes.*', 'users.*']);

    return response.json(classes);
  } 

// -------- Função que que cria uma aula --------
// Pega todas as informações do corpo da requisição e inserir cada uma em sua própria tabela.
  async create(request: Request, response: Response) {
    const { 
      name,
      avatar,
      whatsapp,
      bio,
      subject,
      cost,
      schedule,
    } = request.body;

// Com a função 'transaction()' as inserções serão feitas de uma só vez.
// A inserção só é feita caso não dê erro em nenhuma delas.
    const trx = await db.transaction(); 
 
// Agora vamos usar o 'try' para fazer a tentativa de inserção no banco de dados.
// Colocamos as querys, que armazena os dados em suas respectivas tabelas.
    try {
      
      // Prepara a query de inserção na tabela 'users'
      const insertedUsersIds = await trx('users').insert({
        name,
        avatar,
        whatsapp,
        bio,
      });
    
      const user_id = insertedUsersIds[0];
     
      // Prepara a query de inserção na tabela 'classes'
      const insertedClassesIds = await trx('classes').insert({
        subject,
        cost,
        user_id,
      });
    
      const class_id = insertedClassesIds;

// A preparação da inserção do schedule vai ser um pouco diferente.
// Como o schedule é um array de vários dados, antes de inserir precisamos fazer configurações.
// Com a função map() vamos percorrer cada item do array e transformá-los em um objeto.  
      const classSchedule = schedule.map((scheduleItem: scheduleItem) => {
        return {
          class_id,
          week_day: scheduleItem.week_day,
          from: convertHourToMinutes(scheduleItem.from), // utilizando a função criada
          to: convertHourToMinutes(scheduleItem.to), // utilizando a função criada
        };
      });
  
// Agora sim podemos inserir o objeto 'classSchedule' na tabela 'class_schedule' 
      await trx('class_schedule').insert(classSchedule)

// Com todas as querys preparadas, o commit() faz as inserções nas tabelas.
      await trx.commit();
      
// Se as inserções derem certo, retorna sucesso   
      return response.status(201).json({
        success: 'User create with success',
      });

// Aqui fechamos o 'try' e chamamos o chatch que vai expor se deu erro.    
   } catch(e) {
  
      // desfaz qualquer alteração no banco
      await trx.rollback();
  
      // retorna a mensagem de erro
      return response.status(400).json({
        error: 'Unexpected error while creating new class',
      });
    }
  }
}

```

## Controller de Conexões
Vamos criar o arquivo 'ConnectionsController.ts'. Nas primeiras linhas vamos importar o express e o banco de dados. Depois vamos escrever duas funções, uma pra listar e outra para criar.

```ts
import { Request, Response } from 'express';
import db from '../database/connection';

export default class ConnectionsController {

// -------- Função que lista o total de conexões feitas --------
  async index(request: Request, response: Response) {
    const totalConnections = await db('connections').count('* as total');

    const { total } = totalConnections[0];

    return response.json({ total });
  }

// -------- Função que cria uma conexão --------
  async create(request: Request, response: Response) {
    const { user_id } = request.body;

    await db('connections').insert({
      user_id,
    });

    return response.status(201).send('Sucesso');
  }
}
```

# Rotas
Na pasta 'src' vamos criar um arquivo 'routes.ts' que conterá a chamada das nossas rotas. Nas primeiras linhas, vamos fazer a importação do 'express' e também das duas classes que criamos, com nossos querys.

```ts
import express from 'express';
import ClassesControlller from './controllers/ClassesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesControllers = new ClassesControlller();
const connectionsController = new ConnectionsController();

routes.get('/classes', classesControllers.index);
routes.post('/classes', classesControllers.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;
```






## 📕 Licença
Todos os arquivos incluídos aqui, incluindo este * README *, estão sob [Licença MIT](./LICENSE).
Criado por [Adriana Lima](https://github.com/dxwebster)
