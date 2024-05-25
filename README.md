
# Search Dev

Projeto para realizar pesquisar de usuários do Github e seus respectivos repositórios

## Requisitos

Para instalar e executar este projeto, você precisará ter o Node.js e o npm instalados em sua máquina. 

Certifique-se de que está utilizando o Node.js versão 18.18.2 e o Angular versão 17.0.1.

## Instalação

1. Clone o repositório para sua máquina local:
  ```bash
  git clone https://github.com/techGabrielBr/search-dev.git
  ```

2. Navegue até o diretório do projeto:
  ```bash
  cd search-dev
  ```

3. Instale as dependências do projeto usando npm:
  ```bash
  npm install
  ```

## Rodando o ambiente de desenvolvimento

Para iniciar o servidor de desenvolvimento e visualizar o projeto em seu navegador, execute o seguinte comando:
```
ng serve -o
```
Isso iniciará o servidor de desenvolvimento em http://localhost:4200/ e abrirá automaticamente o navegador de sua preferência.

## Build de Deploy

Para criar uma versão de produção do aplicativo, execute o seguinte comando:
```
ng build
```
## Motivação e Escolha de Tecnologias

Nesta seção, gostaria de compartilhar um pouco sobre as decisões de design e as escolhas de tecnologias feitas neste projeto.

### Angular

Optei por usar o Angular como framework principal para este projeto pelas principais razões:

- Estrutura Modular: o framework oferece estrutura modular que facilita a organização e manutenção de projetos.

- Comunidade Ativa: a comunidade ativa e o ecossistema vasto, simplificam a resolução de problemas e o desenvolvimento rápido.

- Ferramentas Integradas: o Angular CLI e a integração com TypeScript, proporcionam um ambiente de desenvolvimento eficiente e seguro.

### PrimeNG

- Escolhi o PrimeNG para fornecer componentes de IU altamente personalizáveis. Ele oferece uma ampla variedade de componentes prontos para uso, o que acelerou significativamente o desenvolvimento.

### Ng-toastr

- Utilizei a lib ngx-toastr para exibir notificações na interface do usuário por ela ser fácil de usar e permitir a personalização das notificações sem muitos problemas.

## Explicação da estrutura do projeto

- /src: Engloba todo o código fonte do projeto.

- /src/app: Esse diretório contém todos os principais componentes, serviços e modelos da aplicação.

- /src/app/core: Essa pasta é responsável por armazenar todo o código crítico do projeto como: interceptors, guards e dentre outros.

- /src/app/public: Todo o conteúdo que pode ser acessado pelo usuário sem a necessidade de autenticação fica aqui.

- /src/app/shared: Pasta que ficou muito comum na comunidade para armazenar componentes, serviços e outros recursos que serão compartilhados entre diferentes partes do aplicativo.

- src/app/assets: Armazena todos os recursos estáticos, como imagens, mocks e fontes.

- src/app/environments: Este diretório é usado para armazenar arquivos de configuração de ambiente, como environment.ts e environment.prod.ts, que são usados para definir variáveis de ambiente específicas para diferentes ambientes.
