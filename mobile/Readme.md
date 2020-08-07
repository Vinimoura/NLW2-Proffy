
<p align="center">
  <img src="../readme/Home.png"/>
</p>

# 📑 Índice

### [Mobile](#mobile)

- [Instalação e Configuração das Bibliotecas Mobile](#-instalação-e-configuração-das-bibliotecas-mobile)
- [Components](#components)
  - [Component: Page Header](#component-page-header)
  - [Component: Teacher Item](#component-teacher-item)
- [Páginas](#páginas)
  - [Página: Landing](#página-landing)
  - [Página: Teacher List](#página-teacher-list)
  - [Página: Give Classes](#página-give-classes)
  - [Página: Favorites](#página-favorites)
- [App](#app)
- [Conexão com a API](#conexão-com-a-api)


# Mobile

Vamos criar uma pasta 'mobile' que vai conter nossa aplicação.

## 📚 Instalação e Configuração das Bibliotecas Mobile

O "Android Studio" já deve estar instalado e um "Android Virtual Device" configurado.

**Instalar o Expo** : `yarn add -g expo-cli`

**Instalar o Template de aplicação de React Native**: `expo init  mobile`
Selecionar Template `> blank (TypeScript)`

**Instalar o React Navigation**: `yarn add @react-navigation/native`

**Instalar dependências do React Navigation para um projeto Expo**: `expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view`

**Instalar a Stack Navigation (pilhas) do React Navigation**: `yarn add @react-navigation/stack`

**Instalar a Tab Natigation (abas) do React Navigation**: `yarn add @react-navigation/bottom-tabs`

- Então, vamos criar uma pasta 'assets' e uma subpasta 'images'. Nela deixaremos as imagens da nossa página.


# Executando o Emulador
Com o projeto criado e aberto, vamos executar o comando `emulator -avd [nome do dispositivo]` para abrir o AVD (Android Virtual Device).
Agora na pasta, vamos executar o `yarn start` para rodar a aplicação. Vai abrir uma janela "Expo Developer" no navegador que vai nos auxiliar com logs, debugs e outras funcionalidades. Agora, nessa janela do Expo, clicar no menu esquerdo em "Run on Android device/emulator", para a aplicação abrir automaticamente no seu AVD.

<p align="center">
  <img src="../readme/expo.png" width="400"/>  <img src="../readme/avd.png" width="500"/>
</p>


## 🚧 Em construção

# Components
## Component: Page Header
## Component: Teacher Item

# Páginas
##  Página: Landing
##  Página: Teacher List
##  Página: Give Classes
##  Página: Favorites

# App

# Conexão com a API
