
# Guia de Contribuição



## O que preciso saber para ajudar?
Se você procura contribuir com código nosso projeto usa:

- React
- Styled Components
- Jest
- Storybook

Se você ainda não se sente confortável com contribuições de código, sem problemas! Você também pode checar os Issues de documentação marcados com [`documentation`](https://github.com/daniel-norris/neu_ui/labels/documentation) ou é bem-vindo a deixar sugestões no novo [`design`](https://github.com/daniel-norris/neu_ui/labels/design) Issues Label que criamos.

Se você está interessado em fazer uma contribuição em código e quer aprender mais sobre as tecnologias que usamos, leia a lista abaixo.

### React
Nós usamos React como o fundamento para este projeto. Cada componente é encapsulado no seu prórpio arquivo Storybook `.mdx` e os testes Jest `.test.js` são uma ótima prática. Nós ainda aceitamos PRs sem testes. Todas variantes de um componente devem ser mantidas no mesmo arquivo e depois exportadas para `src/index.js` para serem acessíveis ao usuário quando publicadas em `https://www.npmjs.com/` e baixadas como um pacote.

Um bom exemplo de como isso funciona em prática esta disponível no componente `Check.js` localizado em `src/components/forms/Check.js`.

Documentação Oficial: https://reactjs.org/docs/getting-started.html

### Styled Components
SC é usadp em lugar de outras ferramentas como SASS ou CSS já que provê inúmeros benefícios para uma biblioteca de componentes. A ferramenta usa CSS-in-JS e template literals para estilizar elementos HTML. Para mais informações, cheque a documentação e outros componentes para ver como isto é feito em prática.

- Documentação Oficial: https://styled-components.com/

### Jest
Se você não está acostumado com testes utilizando Jest, não se preocupe. Nós ainda estaremos felizes em aceitar quaisquer contribuições que você está apto a fazer. Se você conhece Jest, incluir testes em suas PRs seria incrível.

- Documentação Oficial: https://jestjs.io/

### Storybook
Nós usamos Storybook como um guia de estilo e uma ferrementa para produzir documentação técnica online para nossa biblioteca. Novamente, recebemos de bom grado PRs que não incluem um arquivo Storybook `.mdx` para o componente, porém se você se sentir confortável em criar um isso seria fantástico. Você pode dar uma olhada em outros componentes para ver como é feito e checar os links abaixo. Um ótimo exemplo é o componente `Button.js`.

- Documentação Oficial: https://storybook.js.org/
- Como atualizar arquivos MDX: https://storybook.js.org/docs/react/writing-docs/mdx

## Nunca fez uma contribuição para open source antes? Está se perguntando como elas funcionam em nosso projeto?
1. Encontre um erro que esteja interessado em corrigir ou uma novo recurso que queira adicionar.
2. Fork o repositório associado ao erro para seu GitHub local. Isso significa que terá uma cópia do repositório sob seu-usuario-github/nome-do-repositorio.
3. Clone o repositório  em sua máquina utilizando git clone https://github.com/seu-usuario-github/nome-do-repositorio.git.
4. Crie um novo branch para as mudanças utilizando git checkout -b nome-do-branch.
5. Faça as mudanças no erro que você está tentando consertar ou adicione o novo recurso.
6. Use git add caminho-dos-arquivos-com-mudanças para adicionar o conteúdo dos arquivos ao "snapshot" que o git usa para manejar o estado do projeto, também conhecido como index.
7. Use git commit -m "Mensagem sobre a mudanças feitas" para salvar os conteúdos ao index com uma mensagem descritiva.
8. Mande as mudanças para o repositório remoto utilizando git push origin nome-do-branch.
9. Submita a pull request ao repositório original.
10. Dê um título à PR com uma pequena descrição das mudanças e o número do Issue associado à sua mudança. Por exemplo, você pode entitular sua PR como "Tradução da documentação #1935"
11. na descrição da PR, explique as mudanças realizadas, quaisquer erros que possam existir na PR e perguntas para o dono do projeto. Está tudo bem se sua PR não estiver perfeita (nenhuma é), o revisor estará apto a consertar erros e melhorá-la.
12. Espere a PR ser revisada. Nós tentaremos ser o mais rápidos possível mas pode demorar alguns dias dependendo da nossa disponibilidade.
13. Faça mudanças à PR se o revisor recomendá-las.
14. Celebre seu sucesso após a PR ser adicionada ao projeto!

## Como trabalhar no projeto localmente.
Após o fork e clonar o projeto em sua máquina você pode executar os seguintes comandos para rodar o projeto em sua máquina:

`npm start`

Isso iniciará o create-react-app em seu browser na porta 3000. Em um sistema Windows estará em `http://localhost:3000/`. Nada aparecerá já que o projeto não foi construído assim mas você pode  usar isso como um ambiente de desenvolvimento enquanto constrói seus componentes.

`npm run storybook`

Assim foi feito a maior parte do desenvolvimento e permitirá não apenas testar os componentes mas também a documentação do Srotybook e informações sobre os tipos de prop. mas  você decide como prefere fazer a build. Isso estará disponível na porta 9009 ou em um sistema Windows em `http://localhost:9009`.

## Onde posso procurar ajuda? 
Se você precisar de ajuda, pode perguntar no Issue ou me mandar uma DM no Twitter em https://twitter.com/danielpnorris.

## O que o Código de Conduta significa para mim?
Nosso Código de Conduta significa que você é responsável por tratar todos neste projeto com respeito e cortesia independente de suas indentidades. Se você for vítima de qualquer comportamento inapropriaso ou comentário como descritos em nosso Código de Conduta, nós estaremos aqui para você e faremos o nosso melhor para assegurar que o abusador seja repreendido adequadamente, segundo nosso código.