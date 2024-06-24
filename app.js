import { fetchCharacters, searchCharacters, getCharacterById  } from './api.js';
import { updateCharacterGrid, updatePageNumber } from './ui.js';


let currentPage = 1;

async function loadCharacters(page) {
    const data = await fetchCharacters(page);
    updateCharacterGrid(data.data);
    updatePageNumber(page);
}

async function handleSearch(event) {
    const query = event.target.value;
    if (query) {
        const data = await searchCharacters(query);
        updateCharacterGrid(data.data);
    } else {
        loadCharacters(currentPage);
    }
}
document.getElementById('search-input').addEventListener('input', handleSearch);    

document.getElementById('prev-button').addEventListener('click', () => {
    if (currentPage > 1) {
        currentPage--;
        loadCharacters(currentPage);
    }
});

document.getElementById('next-button').addEventListener('click', () => {
    currentPage++;
    loadCharacters(currentPage);
});

// Initial load
loadCharacters(currentPage);