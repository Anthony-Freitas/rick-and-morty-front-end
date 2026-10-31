# Universo Rick and Morty — Web Development Front-End

Aplicação web estática desenvolvida como trabalho acadêmico de **Web Development Front-End**. O projeto apresenta personagens de *Rick and Morty* por meio de cards criados dinamicamente a partir de dados da [Rick and Morty API](https://rickandmortyapi.com/).

## Funcionalidades

- Consumo da API pública usando `fetch()` e processamento da resposta JSON.
- Criação de cards **via JavaScript**, sem personagens inseridos manualmente no HTML.
- Exibição de imagem, nome, status e espécie de cada personagem.
- Grade responsiva criada com CSS Grid, sem frameworks.

## Tecnologias utilizadas

- HTML5 — estrutura semântica da página.
- CSS3 — estilização e organização responsiva dos cards.
- JavaScript — requisição HTTP e manipulação do DOM.

## Estrutura do projeto

```text
.
├── index.html  # Página principal e contêiner vazio para os cards
├── style.css   # Estilos e layout responsivo
├── script.js   # Consumo da API e criação dinâmica dos elementos
├── .gitignore  # Arquivos locais que não entram no repositório
└── README.md   # Documentação do projeto
```

## Como executar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` no navegador (com acesso à internet).
3. A página consulta a API e mostra os personagens automaticamente.

Não é necessário instalar dependências nem configurar chave de API.

## Como o projeto funciona

1. O JavaScript realiza `fetch('https://rickandmortyapi.com/api/character')`.
2. A resposta é convertida em JSON com `response.json()`.
3. O array `data.results` é percorrido com `forEach()`.
4. O código cria elementos com `document.createElement()`, preenche conteúdo e atributos dos personagens e adiciona cada card à página com `appendChild()`.

**API utilizada:** `https://rickandmortyapi.com/api/character`

**Nota:** a implementação atual consulta a primeira página da API (até 20 personagens). Caso ocorra uma falha, ela é registrada no console do navegador. Não há atualização contínua automática; uma nova consulta acontece quando a página é recarregada.

## Publicação pelo GitHub Pages

Após enviar os arquivos à raiz de um repositório **público**, abra **Settings → Pages** e selecione **Deploy from a branch → main → /(root)**. Salve e consulte o endereço publicado na seção Pages.

O repositório e o site publicado têm endereços diferentes. Para a entrega acadêmica, envie o link do repositório; caso habilite o GitHub Pages, você também pode enviar o link do site em funcionamento.

## Referências

- [Rick and Morty API — Documentation](https://rickandmortyapi.com/documentation)
- [MDN — Usando a API Fetch](https://developer.mozilla.org/pt-BR/docs/Web/API/Fetch_API/Using_Fetch)
- [MDN — Document.createElement()](https://developer.mozilla.org/pt-BR/docs/Web/API/Document/createElement)
- [MDN — Node.appendChild()](https://developer.mozilla.org/pt-BR/docs/Web/API/Node/appendChild)

Projeto acadêmico de demonstração, sem fins comerciais. Personagens, nomes e imagens pertencem aos respectivos titulares de direitos.
