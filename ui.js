export function createCharacterCard(character) {
    const card = document.createElement('div');
    card.className = 'character-card';
    card.innerHTML = `
        <img src="${character.imageUrl}" alt="${character.name}">
        <div class="character-details">
            <h3>${character.name}</h3>
            <p><strong>Films:</strong> ${character.films.join(', ') || 'N/A'}</p>
            <p><strong>Short Films:</strong> ${character.shortFilms.join(', ') || 'N/A'}</p>
            <p><strong>TV Shows:</strong> ${character.tvShows.join(', ') || 'N/A'}</p>
            <p><strong>Video Games:</strong> ${character.videoGames.join(', ') || 'N/A'}</p>
        </div>
    `;
    return card;
}

export function updateCharacterGrid(characters) {
    const characterGrid = document.getElementById('characters');
    characterGrid.innerHTML = '';
    characters.forEach(character => {
        const card = createCharacterCard(character);
        characterGrid.appendChild(card);
    });
}

export function updatePageNumber(page) {
    document.getElementById('page-number').textContent = page;
}
