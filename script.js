// URL da API pública do Rick and Morty
const urlAPI = 'https://rickandmortyapi.com/api/character';

// Seleciona o contêiner vazio lá do HTML
const container = document.getElementById('character-container');

// O comando fetch busca os dados na API
fetch(urlAPI)
    .then(response => response.json()) // Converte a resposta recebida para JSON
    .then(data => {
        // data.results é a lista (array) de personagens que a API retorna
        const personagens = data.results;

        // Para cada personagem na lista, vamos criar um card
        personagens.forEach(personagem => {
            
            // 1. Criando os elementos HTML dinamicamente (Exigência do trabalho)
            const card = document.createElement('div');
            card.classList.add('card'); // Adiciona a classe CSS

            const img = document.createElement('img');
            img.src = personagem.image; // Puxa a URL da imagem da API
            img.alt = personagem.name;

            const cardInfo = document.createElement('div');
            cardInfo.classList.add('card-info');

            const nome = document.createElement('h2');
            nome.textContent = personagem.name; // Puxa o nome da API

            const status = document.createElement('p');
            status.textContent = `Status: ${personagem.status}`; // Puxa o status

            const especie = document.createElement('p');
            especie.textContent = `Espécie: ${personagem.species}`;

            // 2. Usando appendChild
            cardInfo.appendChild(nome);
            cardInfo.appendChild(status);
            cardInfo.appendChild(especie);

            card.appendChild(img);
            card.appendChild(cardInfo);

            // 3. Injetando o card pronto no HTML principal
            container.appendChild(card);
        });
    })
    .catch(error => console.error('Erro ao buscar os dados:', error));